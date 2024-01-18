import * as React from 'react';
import {Carousel} from './carousel';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  decorators: [
    (Story) => (
      <div style={{width: 500}}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Main: Story = {
  args: {
    images: [
      {src: '/images/neom-x-F7S_lqN2U-unsplash.jpg'},
      {src: '/images/christian-lue-bEbaUin4Csg-unsplash.jpg'},
      {src: '/images/slava-jamm-JSanUCMHLJw-unsplash.jpg'},
      {src: '/images/evgeny-matveev-kiX2HxJ9FtQ-unsplash.jpg'},
      {src: '/images/neom-YeLs9lJDx9M-unsplash.jpg'},
    ],
  },
};
