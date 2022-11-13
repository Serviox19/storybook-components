import React from 'react';

import { Carousel } from '../components/Carousel/Carousel.jsx';

export default {
  title: 'Simple/Carousel',
  component: 'Carousel',
  argTypes: {
    pagination: { control: 'boolean' },
    title: { control: 'string' },
    showArrows: { control: 'boolean' },
    arrowsPlacement: { control: 'radio', options: ['top', 'middle'] }
  }
}

const Template = (args) => <Carousel {...args} />;
export const Main = Template.bind({});

Main.args = {
  pagination: true,
  title: 'Title',
  showArrows: true,
  arrowsPlacement: 'top'
}