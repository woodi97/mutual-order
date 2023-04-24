import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import MainActivity from "./activities/MainActivity";
import ArticleActivity from "./activities/ArticleActivity";

export const { Stack, useFlow, useStepFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  activities: {
    MainActivity,
    ArticleActivity,
  },
  initialActivity: () => "MainActivity",
});
