import type { Metadata } from 'next';
import { MuseoModerno } from 'next/font/google';

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles/global.css';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/tiptap/styles.css';

import '@/styles/globals.scss';

import {
  ColorSchemeScript,
  MantineColorScheme,
  MantineProvider,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

// import { SpeedInsights } from "@vercel/speed-insights/next";

import appTheme from '@/styles/theme';
import appResolver from '@/styles/resolver';

import appData from '@/data/app';
import { linkify } from '@repo/utils/formatters';

import { getSession } from '@/libraries/auth';

import { COOKIE_NAME } from '@/data/constants';

import ProviderStore from '@/components/providers/store';
import { cookies } from 'next/headers';
import { getGeoData } from '@/libraries/geolocation';
import AffixWhatsApp from '@/components/common/affixi/whatsapp';
import AffixNavbar from '@/components/common/affixi/navbar';
import AffixTop from '@/components/common/affixi/top';
// import AffixOffline from '@/components/common/affixi/offline';
// import AffixiCookies from '@/components/common/affixi/cookies';

const noto = MuseoModerno({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: `${appData.name.app}`,
    template: `%s - ${appData.name.app}`,
  },
  description: 'App description',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const colorScheme = cookies().get(COOKIE_NAME.COLOR_SCHEME)?.value;
  const colorSchemeState = cookies().get(COOKIE_NAME.COLOR_SCHEME_STATE)?.value;

  return (
    <html
      lang="en"
      data-mantine-color-scheme={(colorScheme || 'dark') as MantineColorScheme}
    >
      <head>
        <ColorSchemeScript
          defaultColorScheme={(colorScheme || 'dark') as MantineColorScheme}
        />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>

      <body className={noto.className}>
        <ProviderStore
          colorScheme={colorSchemeState || 'dark'}
          session={await getSession()}
          geoData={await getGeoData()}
        >
          <MantineProvider
            theme={appTheme}
            cssVariablesResolver={appResolver}
            defaultColorScheme={(colorScheme || 'dark') as MantineColorScheme}
            classNamesPrefix={linkify(appData.name.app)}
          >
            <ModalsProvider>{children}</ModalsProvider>

            <Notifications limit={3} />

            <AffixTop />
            <AffixNavbar />
            <AffixWhatsApp />
            {/* <AffixOffline /> */}
            {/* <AffixiCookies /> */}
          </MantineProvider>
        </ProviderStore>

        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
