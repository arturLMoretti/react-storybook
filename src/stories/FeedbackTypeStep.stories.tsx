import { Popover } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react'
import { FeedbackTypeStep } from '../components/WidgetForm/Steps/FeedbackTypeStep';

export default {
  title: 'Components/Widget/FeedbackTypeStep',
  component: FeedbackTypeStep,
  decorators: [
    (Story) => (
      <Popover>
        <Popover.Panel static >
          {Story()}
        </Popover.Panel>
      </Popover>
    )
  ]
} as Meta;

export const Default: StoryObj = {
  
};