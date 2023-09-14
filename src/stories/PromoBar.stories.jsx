import React from 'react';

import { PromoBar } from "../components/PromoBar";

export default {
  title: 'Simple/PromoBar',
  component: 'PromoBar',
  argTypes: {
    backgroundColor: { control: 'color' },
    title: { control: 'text' },
    location: { control: { type: 'file', accept: '.png' } },
    slides: {
      control: "array",
      table: {
        category: "Props",
      },
    }
  }
}

const Template = (args) => <PromoBar {...args} />
export const Main = Template.bind({});

Main.args = {
  backgroundColor: '#CDDC39',
  slides: [
    { text: "Free Shipping over $25", link: "#" },
    { text: "Enjoy Labor Day Sale", link: "#" }
  ],
}