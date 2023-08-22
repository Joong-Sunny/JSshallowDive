import {Meta, StoryObj} from '@storybook/react';
import square from "./square";

const meta = {
  title: "drawingTest",
  component: square,
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// export const ToastWithDuration: Story = {
//   args: {
//     message: "토스트메시지",
//     duration: 2000,
//   },
// };

