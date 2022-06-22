import { Navbar, ScrollArea } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Home, CalendarStats, PresentationAnalytics, FileAnalytics, Adjustments, Lock, Table } from "tabler-icons-react";
import NavbarLinksGroup from "./NavBarLinksGroups/NavbarLinksGroup";

const NavbarIndex: NextPage = () => {
  const router = useRouter()
  const mockdata = [
    { label: 'Anasayfa', icon: Home, link: '/' },
    {
      label: 'Tables',
      icon: Table,
      initiallyOpened: router.pathname == '/cars' || router.pathname == '/cars/create',
      links: [
        { label: 'Basic Table', link: '/tables' },
        { label: 'Ekle', link: '/cars/create' },
      ],

    },
    {
      label: 'Releases',
      icon: CalendarStats,
      links: [
        { label: 'Upcoming releases', link: '/' },
        { label: 'Previous releases', link: '/' },
        { label: 'Releases schedule', link: '/' },
      ],
    },
    { label: 'Analytics', icon: PresentationAnalytics },
    { label: 'Contracts', icon: FileAnalytics },
    { label: 'Settings', icon: Adjustments },
    {
      label: 'Security',
      icon: Lock,
      links: [
        { label: 'Enable 2FA', link: '/' },
        { label: 'Change password', link: '/' },
        { label: 'Recovery codes', link: '/' },
      ],
    },
  ];
  const [opened] = useState(false);
  const links = mockdata.map((item) => <NavbarLinksGroup {...item} key={item.label} />);
  return (
    <>
      <Navbar p="md" hiddenBreakpoint="sm" className="absolute md:static shadow-md" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <Navbar.Section grow component={ScrollArea}>
          <div >{links}</div>
        </Navbar.Section>
      </Navbar>
    </>
  )
}

export default NavbarIndex