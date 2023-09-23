import React from 'react';
import { ProjectFilter } from './index';

export default {
  title: 'Interactive/ProjectFilter',
  component: 'ProductFilter',
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    title: { control: 'text' },
    content: { control: 'object' },
    filters: { control: 'object' }
  }
};

const Template = (args) => <ProjectFilter {...args} />
export const Main = Template.bind({});

Main.args = {
  title: 'Example Title',
  filters: ['shopify', 'react', 'python', 'front-end', 'full-stack'],
  content: [
    { title: 'Project A', tags: ['shopify', 'vue', 'front-end'], image: 'https://picsum.photos/300/400?random=100' },
    { title: 'Project B', tags: ['shopify', 'react', 'typescript'], image: 'https://picsum.photos/300/400?random=200' },
    { title: 'Project C', tags: ['back-end'], image: 'https://picsum.photos/300/400?random=230' },
    { title: 'Project D', tags: ['full-stack', 'python'], image: 'https://picsum.photos/300/400?random=280' },
    { title: 'Project E', tags: ['full-stack', 'node', 'react'], image: 'https://picsum.photos/300/400?random=350' }
  ]
}