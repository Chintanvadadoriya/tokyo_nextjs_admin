import Head from 'next/head';

import DocsLayout from 'src/layouts/DocsLayout';

import { Container, Grid, Typography } from '@mui/material';

import PageHeader from 'src/components/PageHeaderDocs';

function Introduction() {
  return (
    <>
      <Head>
        <title>
          Introduction - Tokyo Black NextJS Javascript Admin Dashboard
        </title>
      </Head>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageHeader heading="Introduction" subheading="" />
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ mb: 2 }} variant="h2">
              Welcome
            </Typography>
            <Typography paragraph>
              Tokyo Black NextJS Javascript Admin Dashboard includes multiple
              pages that can be used to give you a head start when starting you
              start developing a web app.
            </Typography>
            <Typography paragraph>
              We've built this template with performance in mind, so all pages
              will get a 96 or more score on Google Lighthouse performance
              testing. You can inspect the template performance by opening the
              Google Chrome Inspector and moving to the last tab named
              "Lighthouse". On that tab click on "Generate report".
            </Typography>
            <Typography paragraph>
              We designed multiple color schemes that can be switched from the
              Settings button in the live preview screen corner.
            </Typography>
            <Typography paragraph>
              The documentation includes basic examples on how to work with the
              template or how to remove certain parts that you will not be using
              in your production application.
            </Typography>
            <Typography paragraph>
              Tokyo Black NextJS Javascript Admin Dashboard is built for
              <code>NextJS</code> from Vercel. Next.js gives you the best
              developer experience with all the features you need for
              production: hybrid static &amp; server rendering, TypeScript
              support, smart bundling, route pre-fetching, and more. No config
              needed. Find out more about it here: https://nextjs.org/
            </Typography>
            <br />
            <Typography sx={{ mb: 2 }} variant="h2">
              Feedback
            </Typography>
            <Typography paragraph>
              We try to constantly improve all our products. Any feedback or
              suggestions you might have will help us a lot in developing the
              next release. If you have any suggestions, bugs report or issue,
              you can open a ticket by sending an email to
              <code>support@bloomui.freshdesk.com</code>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Introduction.getLayout = (page) => <DocsLayout>{page}</DocsLayout>;

export default Introduction;
