import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";
import { useOnClickOutside } from "@container101/hooks";
import { useRef, useState } from "react";

type ArticleActivityParams = {
  title: string;
};
const ArticleActivity: ActivityComponentType<ArticleActivityParams> = ({
  params,
}) => {
  const { pop } = useFlow();

  const ref = useRef<HTMLDivElement | null>(null);
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false);
  // Call hook passing in the ref and a function to call on outside click

  const onClick = () => {
    pop();
  };
  useOnClickOutside(ref, () => setModalOpen(false));

  return (
    <AppScreen>
      <div className="flex flex-col">
        <h1>{params.title}</h1>
        <button onClick={onClick}>back</button>
        <div>
          {isModalOpen ? (
            <div ref={ref}>
              👋 Hey, Im a modal. Click anywhere outside of me to close.
            </div>
          ) : (
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
          )}
        </div>
      </div>
    </AppScreen>
  );
};

export default ArticleActivity;
