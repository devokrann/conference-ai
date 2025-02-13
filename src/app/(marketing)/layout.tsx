import React from 'react';

import LayoutBody from '@/components/layout/body';
import NavbarMain from '@/components/layout/navbars/main';
import FooterMain from '@/components/layout/footers/main';
import HeaderMain from '@/components/layout/headers/main';
import HeroRoute from '@/components/layout/hero/route';
import AffixWhatsApp from '@/components/common/affixi/whatsapp';

export default function LayoutMarketing({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutBody
      header={<HeaderMain />}
      nav={<NavbarMain />}
      footer={<FooterMain />}
      hero={<HeroRoute />}
    >
      <main>{children}</main>

      <AffixWhatsApp />
    </LayoutBody>
  );
}
