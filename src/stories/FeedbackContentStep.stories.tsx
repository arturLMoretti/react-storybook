import { Popover } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react'
import { FeedbackContentStep, FeedbackContentStepProps } from '../components/WidgetForm/Steps/FeedbackContentStep';

export default {
  title: 'Components/Widget/FeedbackContentStep',
  component: FeedbackContentStep,
  args: {
    feedbackType: 'IDEA'
  },
  decorators: [
    (Story) => (
      <Popover>
        <Popover.Panel static >
          {Story()}
        </Popover.Panel>
      </Popover>
    )
  ]
} as Meta<FeedbackContentStepProps>;

export const Defaul: StoryObj = {};
export const Bug: StoryObj = {
  args: {
    feedbackType: 'BUG'
  },
};
export const Idea: StoryObj = {
  args: {
    feedbackType: 'IDEA'
  },
};
export const Other: StoryObj = {
  args: {
    feedbackType: 'OTHER'
  },
};