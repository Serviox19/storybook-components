import React from 'react';

import { Pagination } from '../components/Pagination/index.jsx';

export default {
  title: 'Simple/Pagination',
  component: 'Pagination',
  argTypes: {
    paginateBy: { control: 'number' },
    itemsCount: { control: 'number' }
  }
}

const Template = (args) => <Pagination {...args} />;
export const Main = Template.bind({});

Main.args = {
  paginateBy: 6,
  itemsCount: 24
}