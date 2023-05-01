import { useOnClickOutside } from "@container101/hooks";
import { Carousel, Spinner } from "@container101/ui";
import { useRef, useState } from "react";

export default function Web() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <div className="flex flex-col">
      <Spinner />
      <div>Queen-web</div>
      <div>
        {isModalOpen ? (
          <div ref={ref}>
            👋 Hey, Im a modal. Click anywhere outside of me to close.
          </div>
        ) : (
          <button onClick={() => setModalOpen(true)}>Open Modal</button>
        )}
      </div>
      <div>
        <Carousel.Root itemsPerPage={1}>
          <Carousel.Content>
            {Array(10)
              .fill(0)
              .map((_, idx) => {
                return (
                  <div key={idx} className="h-[400px] bg-black text-white">
                    Draggable Carousel
                  </div>
                );
              })}
          </Carousel.Content>
          <Carousel.Indicator />
        </Carousel.Root>
      </div>
    </div>
  );
}
