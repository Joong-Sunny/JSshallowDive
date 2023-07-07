import { Meta, StoryObj } from '@storybook/react';
import CustomToast  from "../components/CustomToast";

const meta = {
  title: "Components/CustomToast",
  component: CustomToast,
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
  message: "토스트메시지1",
  duration: 3000,
  },
};


export const LongTimeToast : Story = {
  args: {
  message: "토스트메시지1",
  duration: 30000,
  },
};


// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };