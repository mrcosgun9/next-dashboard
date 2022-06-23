import { AppShell, Card, createStyles } from "@mantine/core"
import AppShellHeaderIndex from "./Header/Index"
import NavbarIndex from "./Navbar"

type AppShellType = {
  children?: React.ReactNode;
}
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.white,
  },
}));
function AppShellIndex({ children }: AppShellType) {
  const { classes } = useStyles();
  return <>

    <AppShell
      padding="md"
      navbar={
        <NavbarIndex />
      }
      header={
        <AppShellHeaderIndex />
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Card shadow="sm" radius="md" className={classes.card}>
        {children}
      </Card>

    </AppShell>
  </>
}

export default AppShellIndex