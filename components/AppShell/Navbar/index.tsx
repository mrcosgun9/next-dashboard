import { Navbar, ScrollArea } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Home, Table } from "tabler-icons-react";
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