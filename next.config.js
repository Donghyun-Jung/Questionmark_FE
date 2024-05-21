/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 구성 옵션 설정
  reactStrictMode: false, // Strict 모드 비활성화
  output: 'standalone', // 스탠드얼론 모드로 빌드
  images: {
    // 이미지 관련 설정
    remotePatterns: [
      // 원격 이미지 패턴 지정
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'ppss.kr',
      },
      {
        protocol: 'https',
        hostname: 'cdn.inflearn.com',
      },
      {
        protocol: 'https',
        hostname: 'duel-bucket.s3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },

  // Webpack 설정 추가
  webpack: (config) => {
    config.module.rules.push({
      // SVG 파일 처리를 위한 로더 추가
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false, // rect가 path로 렌더링되지 않도록
          },
        },
      ],
    });

    config.module.rules.push({
      // 폰트 파일 처리를 위한 로더 추가
      test: /\.(eot|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
        },
      ],
    });

    return config;
  },
};

// 번들 분석기 플러그인 설정 추가
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// nextConfig와 withBundleAnalyzer를 함께 내보냄
module.exports = withBundleAnalyzer({});
module.exports = nextConfig;

