import {Meta, StoryObj} from '@storybook/react';
import ButtonWithToast from "../components/ButtonWithToast";
import {within, waitFor, userEvent} from "@storybook/testing-library";
import {expect} from "@storybook/jest";


const meta = {
  title: "Components/ButtonWithToast",
  component: ButtonWithToast,
} as Meta;
export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    message: "toast",
    duration: 2000,
    fadeIn: false,
    fadeOut: true,
  },
};


Default.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByRole("button");
  await userEvent.click(button);

  await waitFor(async () => {
    await expect(await canvas.findByText("toast")).toBeInTheDocument();
  }, {timeout: 4000});


  await waitFor(async () => {
    expect(await canvas.findByText("toast")).not.toBeInTheDocument();
  })
}