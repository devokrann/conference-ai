import React from 'react';

import LayoutBody from '@/components/layout/body';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import HeaderMain from '@/components/layout/headers/main';
import AffixTop from '@/components/common/affixi/top';
import AffixNavbar from '@/components/common/affixi/navbar';
import AffixWhatsApp from '@/components/common/affixi/whatsapp';

export default function LayoutPast({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
      header={<HeaderMain />}
      nav={<NavbarMain />}
      footer={<FooterMain />}
    >
      <main>{children}</main>

      <AffixTop />
      <AffixNavbar />
      <AffixWhatsApp />
    </LayoutBody>
  );
}
