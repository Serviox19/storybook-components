import React from 'react';

import { Accordion } from '../components/Accordion/index.jsx';

export default {
  title: 'Simple/Accordion',
  component: 'Accordion',
  argTypes: {
    'borderColor': { control: 'color' },
    'title': {
      control: { type: 'text' }
    },
    'content': {
      control: { type: 'text' }
    },
    iconFill: {
      control: 'color'
    }
  }
}

const Template = (args) => <Accordion {...args} />
export const Main = Template.bind({});

Main.args = {
  title: 'Accordion Title',
  borderColor: '#d3d3d3',
  iconFill: '#d3d3d3'
}