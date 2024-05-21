import path from 'path'; // path 모듈을 가져옴, 파일 및 디렉토리 경로 조작에 사용됨
import type { StorybookConfig } from '@storybook/nextjs'; // StorybookConfig 타입을 가져옴

// Storybook 설정 객체 생성
const config: StorybookConfig = {
  // stories: Storybook이 스토리를 검색할 경로 지정
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  
  // addons: Storybook에 추가 기능을 제공하는 애드온 목록
  addons: [
    '@storybook/addon-links', // 컴포넌트 간 링크를 제공
    '@storybook/addon-essentials', // 다양한 필수 애드온들 포함
    '@storybook/addon-onboarding', // 온보딩 애드온
    '@storybook/addon-interactions', // 상호작용 애드온
  ],
  
  // 사용 중인 프레임워크와 해당 옵션 지정
  framework: {
    name: '@storybook/nextjs', // Storybook 프레임워크 사용
    options: {}, 
  },
  
  // docs: 문서화 옵션 설정
  docs: {
    autodocs: 'tag', // 태그를 사용하여 자동 문서화
  },
  
  // babel: Babel 설정을 사용자 정의
  babel: async (options) => ({
    ...options, // 기존 옵션을 확장
    presets: options.presets
      ? [...options.presets, '@emotion/babel-preset-css-prop'] // 기존 프리셋에 emotion 프리셋 추가
      : ['@emotion/babel-preset-css-prop'], // 프리셋이 없으면 emotion 프리셋만 사용
  }),
  
  // webpackFinal: 최종 Webpack 설정을 사용자 정의
  webpackFinal: async (config) => {
    // resolve.alias 설정: 경로 별칭 설정
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias, // 기존 별칭 확장
        '@/public': path.resolve(__dirname, '../public'), // '@/public'을 '../public' 경로로 설정
        '@': path.resolve(__dirname, '../src'), // '@'을 '../src' 경로로 설정
      };
    }

    // Storybook에서 SVG 파일을 처리하기 위한 설정
    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (!test) {
        return false;
      }

      return test.test('.svg'); // .svg 파일을 테스트하는 규칙 찾기
    }) as { [key: string]: any };

    imageRule.exclude = /\.svg$/; // 기존 이미지 규칙에서 .svg 파일 제외

    config.module?.rules?.push({
      test: /\.svg$/, // .svg 파일에 대한 새로운 규칙 추가
      use: ['@svgr/webpack'], // @svgr/webpack 로더 사용
    });

    return config; // 최종 설정 반환
  },
  
  // staticDirs: 정적 파일을 제공할 디렉토리 설정
  staticDirs: ['../public'],
};

export default config; // 설정 객체를 기본 내보내기
