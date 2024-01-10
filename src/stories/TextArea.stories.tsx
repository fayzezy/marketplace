import React from "react";
import { TextArea } from "components";
import { Meta, Story } from "@storybook/react";

export default {
  title: "fayzezy_s_application2/TextArea",
  component: TextArea,
};

export const SampleTextarea: Story<any> = (args) => <TextArea {...args} />;

SampleTextarea.args = { placeholder: "placeholder" };
