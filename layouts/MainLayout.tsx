import Head from 'next/head';
import AppShellIndex from '../components/AppShell';
type LayoutType = {
  children?: React.ReactNode;
  title?: string;
}
function MainLayout({ children, title }: LayoutType) {
  return (<>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AppShellIndex>
      <main>

        {children}
      </main>
    </AppShellIndex>
  </>);
}

export default MainLayout
