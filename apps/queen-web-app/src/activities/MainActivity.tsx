import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";
import { Button, Carousel } from "@container101/ui";

// Tip: Initial Activity Should Not Have Params
const MainActivity: ActivityComponentType = () => {
  // const { id, name, transitionState } = useActivity();
  const { push } = useFlow();

  const onClick = () => {
    push("Article", {
      title: "Hello",
    });
  };

  return (
    <AppScreen>
      <div className="flex flex-col">
        <Button onClick={onClick}>Go to article page</Button>
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
    </AppScreen>
  );
};

export default MainActivity;
