import React from 'react';
import { ThemeProvider } from '@emotion/react'; // Emotion의 ThemeProvider를 가져옴
import type { Preview } from '@storybook/react'; // Storybook의 Preview 타입을 가져옴
import '@/styles/globals.css'; // 글로벌 CSS 스타일을 가져옴
import { emotionTheme } from '../src/styles/emotion'; // emotion 테마를 가져옴

// Storybook의 프리뷰 설정 객체를 생성
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' }, // 'on'으로 시작하는 props를 액션으로 처리
    controls: {
      matchers: {
        color: /(background|color)$/i, // 'background' 또는 'color'가 포함된 props를 색상 컨트롤로 매칭
        date: /Date$/, // 'Date'로 끝나는 props를 날짜 컨트롤로 매칭
      },
    },
  },
};

export default preview; // 프리뷰 설정 객체를 기본 내보내기

// Storybook의 데코레이터 설정
export const decorators = [
  (Story) => (
    <ThemeProvider theme={emotionTheme}> {/* Emotion 테마를 제공 */}
      <Story /> {/* 각 스토리를 ThemeProvider로 감쌈 */}
    </ThemeProvider>
  ),
];
