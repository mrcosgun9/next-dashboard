import type { NextPage } from "next";
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import Link from "next/link";
import Head from "next/head";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));
const Custom500: NextPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>500 Error Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container className={classes.root}>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Bir Hata Oluştu.</Title>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
          Sunucularımız isteğinizi yerine getiremedi.<br />
          Endişelenmeyin, geliştirme ekibimiz zaten bilgilendirildi.
        </Text>
        <Group position="center">
          <Link href="/">

            <Button variant="subtle" size="md">
              Anasayfaya Dön
            </Button>

          </Link>

        </Group>
      </Container>
    </>
  )
}

export default Custom500