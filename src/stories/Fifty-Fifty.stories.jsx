import React from 'react';

import { FiftyFifty } from '../components/FiftyFifty';

export default {
  title: 'Simple/Fifty-Fifty',
  component: 'FiftyFifty',
  argTypes: {
    imageUrl: { control: 'text' },
    imagePosition: { control: 'radio', options: ['left', 'right'] },
    buttonStyle: { control: 'radio', options: ['primary', 'secondary'] },
    buttonText: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' }
  }
}

const Template = (args) => <FiftyFifty {...args} />
export const Default = Template.bind({});

Default.args = {
  imageUrl: 'https://picsum.photos/400/300?random=1',
  imagePosition: 'left',
  buttonText: 'Shop Now',
  buttonStyle: 'primary',
  title: 'Example Title',
  description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
}