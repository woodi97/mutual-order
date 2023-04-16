import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";
import { Button } from "@container101/ui";

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
        Main Activity
        <Button onClick={onClick}>Go to article page</Button>
      </div>
    </AppScreen>
  );
};

export default MainActivity;
