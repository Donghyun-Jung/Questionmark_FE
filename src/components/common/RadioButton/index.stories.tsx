import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Flex from '@/components/common/Flex';
import RadioButton from '@/components/common/RadioButton';

export default {
  component: RadioButton,
} as Meta<typeof RadioButton>;

const data = [
  { value: '홍박사', label: '홍박사' },
  { value: '이희주', label: '이희주' },
  { value: '이하연', label: '이하연' },
  { value: '정동현', label: '정동현' },
  { value: '뉴진스', label: '뉴진스' },
];

export const Row: StoryObj = {
  render: function Render() {
    const [checked, setChecked] = useState('yes');

    return (
      <Flex gap={1}>
        {data.map((item) => {
          return (
            <RadioButton
              key={item.value}
              value={item.value}
              label={item.label}
              checked={checked === item.value}
              onChange={(e) => {
                setChecked(e.target.value);
              }}
            />
          );
        })}
      </Flex>
    );
  },

  name: '가로',
};

export const Col: StoryObj = {
  render: function Render() {
    const [checked, setChecked] = useState('yes');

    return (
      <Flex dir="col" gap={1}>
        {data.map((item) => {
          return (
            <RadioButton
              key={item.value}
              value={item.value}
              label={item.label}
              checked={checked === item.value}
              onChange={(e) => {
                setChecked(e.target.value);
              }}
            />
          );
        })}
      </Flex>
    );
  },

  name: '세로',
};