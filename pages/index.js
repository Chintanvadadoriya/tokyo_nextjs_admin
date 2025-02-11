import { Box, Card, Container, Button, styled } from '@mui/material';

import BaseLayout from 'src/layouts/BaseLayout';

import Link from 'src/components/Link';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Logo from 'src/components/LogoSign';
import Hero from 'src/content/Overview/Hero';
import Highlights from 'src/content/Overview/Highlights';
import LanguageSwitcher from 'src/layouts/BoxedSidebarLayout/Header/Buttons/LanguageSwitcher';
import Footer from 'src/components/Footer';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  const { t } = useTranslation();

  return (
    <OverviewWrapper>
      <Head>
        <title>Tokyo Black NextJS Javascript Admin Dashboard</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <LanguageSwitcher />
                <Button
                  component={Link}
                  href="/dashboards/reports"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  {t('Live Preview')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </HeaderWrapper>
      <Hero />
      <Highlights />
      <Footer />
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
