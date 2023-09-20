import React from 'react';

import { ProductCard } from './ProductCard';

export default {
  title: 'Interactive/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    price: { control: 'number' },
    options: { control: 'object' },
    gallery: { control: 'object' }
  }
};

const Template = (args) => <ProductCard {...args} />;
export const Main = Template.bind({});

Main.args = {
  title: 'Example Product',
  price: 49.99,
  options: {
    color: ['red', 'blue', 'orange', 'pink'],
    size: ['xs', 's', 'md', 'lg', 'xl']
  },
  gallery: {
    red: ['https://picsum.photos/300/400?random=1', 'https://picsum.photos/300/400?random=2', 'https://picsum.photos/300/400?random=3'],
    blue: ['https://picsum.photos/300/400?random=4', 'https://picsum.photos/300/400?random=5', 'https://picsum.photos/300/400?random=6'],
    orange: ['https://picsum.photos/300/400?random=7', 'https://picsum.photos/300/400?random=8', 'https://picsum.photos/300/400?random=9'],
    pink: ['https://picsum.photos/300/400?random=10', 'https://picsum.photos/300/400?random=11']
  }
};