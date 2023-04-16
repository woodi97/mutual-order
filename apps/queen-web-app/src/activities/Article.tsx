import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";

type ArticleParams = {
  title: string;
};
const Article: ActivityComponentType<ArticleParams> = ({ params }) => {
  const { pop } = useFlow();

  const handleBack = () => {
    pop();
  };

  return (
    <AppScreen>
      <div className="flex flex-col">
        <h1>{params.title}</h1>
        <button onClick={handleBack}>Back</button>
      </div>
    </AppScreen>
  );
};

export default Article;
