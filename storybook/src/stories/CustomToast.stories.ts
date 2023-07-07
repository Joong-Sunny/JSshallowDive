import {Meta, StoryObj} from '@storybook/react';
import CustomToast from "../components/CustomToast";

const meta = {
  title: "Components/CustomToast",
  component: CustomToast,
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "토스트메시지",
  },
};

export const ToastWithDuration: Story = {
  args: {
    message: "토스트메시지",
    duration: 2000,
  },
};

