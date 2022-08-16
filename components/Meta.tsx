import type { FCC } from 'globalTypes';
import Head from 'next/head';
import type { DetailedHTMLProps, MetaHTMLAttributes } from 'react';

export type MetaProps = {
  meta: DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>[];
  title?: string;
};
export const Meta: FCC<MetaProps> = ({ children, meta, title }) => {
  return (
    <Head>
      <title>{title ?? 'Web Development, App Development - Codeation.io'}</title>
      {meta.map((m) => (
        <meta key={m.name} {...m} />
      ))}
      {children}
    </Head>
  );
};

export default Meta;
