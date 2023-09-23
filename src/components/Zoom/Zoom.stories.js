import React from 'react';
import { Zoom } from './index';

export default {
  title: 'Interactive/Zoom',
  component: Zoom,
  parameters: {
    laayout: 'fullscreen'
  },
  argTypes: {
    gallery: { control: 'object' }
  }
};

const Template = (args) => <Zoom {...args} />;
export const Main = Template.bind({});

Main.args = {
  gallery: [
    { src: 'https://picsum.photos/400/700?random=1', alt: 'Product A' },
    { src: 'https://picsum.photos/400/700?random=2', alt: 'Product B' },
    { src: 'https://picsum.photos/400/700?random=3', alt: 'Product C' },
    { src: 'https://picsum.photos/400/700?random=4', alt: 'Product D' },
  ]
};