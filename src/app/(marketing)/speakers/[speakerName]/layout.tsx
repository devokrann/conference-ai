import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import { people } from '@/data/people';
import { linkify } from '@/utilities/formatters/string';

export interface typeParams {
  params: { speakerName: string };
}

export const generateMetadata = ({ params }: typeParams): Metadata => {
  return {
    title: people.find((p) => linkify(p.name) == params.speakerName)?.name,
  };
};

export default function Post({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
    // aside={{ right: { component: <AsideBlog /> } }}
    >
      {children}
    </LayoutBody>
  );
}
