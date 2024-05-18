import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Select from '@/components/common/Select';
import type { SelectOption } from '@/components/common/Select';

export default {
  component: Select,
} as Meta<typeof Select>;

const selectOptionItems: SelectOption[] = [
  {
    label: '홍박사',
    value: '홍박사',
  },
  {
    label: '이희주',
    value: '이희주',
  },
  {
    label: '이하연',
    value: '이하연',
  },
  {
    label: '정동현',
    value: '정동현',
  },
  {
    label: '뉴진스',
    value: '뉴진스',
  },
];

const defaultValue = { label: '7조', value: '' };

export const WithState: StoryObj<typeof Select> = {
  render: function Render() {
    const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(defaultValue);

    return (
      <Select
        selectedOption={selectedOption}
        onChangeOption={(option) => setSelectedOption(option)}
        options={selectOptionItems}
      />
    );
  },
};