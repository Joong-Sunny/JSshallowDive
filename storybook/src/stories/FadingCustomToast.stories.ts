import {Meta, StoryObj} from '@storybook/react';
import FadeInToast from "../components/FadingCustomToast";

const meta = {
  title: "Components/FadeInToast",
  component: FadeInToast,
} as Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "토스트메시지",
  },
};

export const FadeIn: Story = {
  args: {
    message: "토스트",
    duration: 2000,
    fadeIn: true,
    fadeOut: false,
  },
};

export const FadeOut: Story = {
  args: {
    message: "토스트",
    duration: 2000,
    fadeIn: false,
    fadeOut: true,
  },
};

export const FadeInFadeOut: Story = {
  args: {
    message: "토스트",
    duration: 2000,
    fadeIn: true,
    fadeOut: true,
  },
};