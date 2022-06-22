import type { NextPage } from 'next'
import AppShellIndex from '../components/AppShell';
type LayoutType = {
  children?: React.ReactNode;
}
const MainLayout: NextPage = ({ children }: LayoutType) => {
  return (
    <>
      <AppShellIndex>
        <main>
          {children}
        </main>
      </AppShellIndex>
    </>

  )
}
export default MainLayout
