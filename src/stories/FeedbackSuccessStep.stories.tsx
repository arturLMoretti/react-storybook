import { Popover } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react'
import { FeedbackSuccessStep } from '../components/WidgetForm/Steps/FeedbackSuccessStep';

export default {
  title: 'Components/Widget/FeedbackSuccessStep',
  component: FeedbackSuccessStep,
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