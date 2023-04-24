import React, {
  forwardRef,
  useContext,
  createContext,
  FunctionComponent,
  useId,
  useState,
  Children,
  useMemo,
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useRef,
  useEffect,
  useCallback,
} from "react";

import * as styles from "./Carousel.css";
import cx from "classnames";
import { PanInfo, motion, useAnimation } from "framer-motion";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  itemsPerPage: number;
}

export type CarouselProps = React.ForwardRefExoticComponent<
  Props & React.RefAttributes<HTMLDivElement>
>;

const CarouselContext = createContext<{
  itemsPerPage: number;
  numOfPages: number | null;
  setNumOfPages?: Dispatch<SetStateAction<number | null>>;
}>({
  itemsPerPage: 0,
  numOfPages: 0,
});

const useCarouselContext = () => useContext(CarouselContext);

const CarouselRoot: CarouselProps = forwardRef((props, ref) => {
  const { itemsPerPage, children, className, ...restProps } = props;
  const [numOfPages, setNumOfPages] = useState<number | null>(null);

  return (
    <CarouselContext.Provider
      value={{
        itemsPerPage,
        numOfPages,
        setNumOfPages,
      }}
    >
      <div
        ref={ref}
        className={cx(styles.carouselRoot, className)}
        {...restProps}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});

export const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

const Content: FunctionComponent<{
  enableInfinite?: boolean;
  children: React.ReactNode;
}> = ({ enableInfinite = true, children }) => {
  const { itemsPerPage, setNumOfPages } = useCarouselContext();
  const numOfItems = useMemo(() => Children.count(children), [children]);
  const numOfPages = useMemo(
    () => Math.ceil(numOfItems / itemsPerPage),
    [numOfItems, itemsPerPage]
  );

  const controls = useAnimation();
  const swipeConfidenceThreshold = useMemo(() => 10000, []);
  const sliderItemnRefs = useRef<HTMLDivElement[]>([]);
  const [selectedPage, setSelectedPage] = useState(0);

  // Think: selectedPage changes when every user slider, do we need?
  const paginate = useCallback(
    (newDirection: number) => {
      let nextPageIndex: number;
      let nextPage = selectedPage + newDirection;
      if (enableInfinite) {
        nextPage %= numOfItems;
        nextPageIndex = nextPage < 0 ? numOfItems - 1 : nextPage;
      } else {
        nextPage = nextPage > numOfItems - 1 ? numOfItems - 1 : nextPage;
        nextPageIndex = nextPage < 0 ? 0 : nextPage;
      }
      setSelectedPage(nextPageIndex);
    },
    [selectedPage, numOfItems, enableInfinite]
  );

  const onDragEnd = useCallback(
    (
      event: MouseEvent | TouchEvent | PointerEvent,
      { offset, velocity }: PanInfo
    ) => {
      const swipe = swipePower(offset.x, velocity.x);
      if (swipe < -swipeConfidenceThreshold) {
        paginate(1);
      } else if (swipe > swipeConfidenceThreshold) {
        paginate(-1);
      }
    },
    [paginate]
  );

  // assign calculated num of pages to context
  useLayoutEffect(() => {
    setNumOfPages?.(numOfPages);
  }, []);

  // run next animation when selectedPage changed
  useEffect(() => {
    controls.start("next");
  }, [controls, selectedPage]);

  return (
    <div className={styles.carouselContent}>
      <motion.div
        variants={{
          next: {
            x: -sliderItemnRefs.current[0]?.offsetWidth * selectedPage,
          },
        }}
        animate={controls}
        transition={{ duration: 0.5, stiffness: 100 }}
        drag="x"
        dragConstraints={{
          left: -sliderItemnRefs.current[0]?.offsetWidth * selectedPage,
          right: -sliderItemnRefs.current[0]?.offsetWidth * selectedPage,
        }}
        dragElastic={0.5}
        dragMomentum={false}
        onDragEnd={onDragEnd}
        className={styles.carouselDrag}
      >
        {numOfItems > 0 &&
          Children.map(children, (child, idx) => (
            <motion.div
              key={`carousel-content-${idx}`}
              ref={(el) => {
                if (el) sliderItemnRefs.current[idx] = el;
              }}
              animate={{
                scale: selectedPage === idx ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
              className={cx(styles.carouselItem)}
            >
              {child}
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

const Indicator: FunctionComponent<{
  classname?: string;
}> = ({ classname }) => {
  const id = useId();
  const { numOfPages } = useCarouselContext();

  return (
    <div className={styles.indicatorRoot}>
      {Array(numOfPages)
        .fill(0)
        .map((_, index) => (
          <span
            key={`${id}-${index}`}
            className={cx(styles.indicatorStyle, classname)}
          />
        ))}
    </div>
  );
};

const Root = CarouselRoot;
export const Carousel = { Root, Content, Indicator };
