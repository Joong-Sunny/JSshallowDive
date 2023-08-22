import {Meta, StoryObj} from '@storybook/react';
import WhiteWrapper from "./square Wrapper";

const meta = {
  title: "drawingTest2",
  component: WhiteWrapper,
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

