import React from 'react';

import { Input } from '../components/Input/Input.jsx';

export default {
  title: 'Simple/Input',
  component: Input,
  argTypes: {
    borderColor: { control: 'color' }
  },
}

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  placeholder: 'Primary Input'
}

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: 'Secondary Input',
  actionText: 'Search',
  actionButtonBg: '#1890ff'
}

export const Full = Template.bind({});
Full.args = {
  full: true,
  primary: false,
  placeholder: 'Input Full'
}