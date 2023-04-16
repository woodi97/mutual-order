import { Meta } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

export const Chunk = () => {
  return (
    <div className="inline-flex flex-col gap-2">
      <Button>Middle</Button>
    </div>
  );
};

export const FullWidth = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Button>Not Full Width</Button>
      </div>
      <div>
        <Button fullWidth>Fullwidth</Button>
      </div>
    </div>
  );
};
