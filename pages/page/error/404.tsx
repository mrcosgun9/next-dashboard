import type { NextPage } from "next";
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import Link from "next/link";

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
const Custom404: NextPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>Aradığın sayfayı bulamıyoruz.</Title>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
          Ne yazık ki, bu sadece bir 404 sayfası. <br />
          Adresi yanlış yazmış olabilirsiniz veya sayfa başka bir URL'ye taşınmış olabilir.
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

export default Custom404