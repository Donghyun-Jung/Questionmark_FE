import Head from 'next/head';

interface DUELHeadProps {
  title?: string;
  description?: string;
  additional?: JSX.Element;
}

const DUELHead = ({ title, description, additional }: DUELHeadProps) => {
  return (
    <Head>
      <title>{title || 'DUEL'}</title>
      {description ? (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://i.ibb.co/9NVmxfb/logo.png" />
        </>
      ) : (
        <>
          <meta name="description" content="개발자를 위한 성장 학습 플랫폼" />
          <meta property="og:description" content="개발자를 위한 성장 학습 플랫폼" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://i.ibb.co/9NVmxfb/logo.png" />
        </>
      )}
      <meta name="viewport" content="initial-scale=1.0, maximum-scale=5, width=device-width" />
      <link rel="apple-touch-icon" href="/logo.svg" />
      <link rel="icon" href="/favicon.ico" />
      {additional}
    </Head>
  );
};

export default DUELHead;
