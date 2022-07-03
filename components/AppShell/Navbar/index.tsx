import { Navbar, ScrollArea } from "@mantine/core";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { Forms, Home, Table, Article, Lock } from "tabler-icons-react";
import NavbarLinksGroup from "./NavBarLinksGroups/NavbarLinksGroup";

const NavbarIndex: NextPage = () => {
  const router = useRouter()
  const mockdata = [
    { label: 'Anasayfa', icon: Home, link: '/' },
    {
      label: 'Tables',
      icon: Table,
      initiallyOpened: router.pathname.includes('/tables'),
      links: [
        { label: 'Basic Table', link: '/tables' },
        { label: 'Sorting Table', link: '/tables/sortingDataTable' },
        { label: 'Sorting Selected Table', link: '/tables/sortingSelectedDataTable' },
      ],

    },
    {
      label: 'Pages',
      icon: Article,
      initiallyOpened: router.pathname.includes('/page/'),
      links: [
        { label: '404 Page', link: '/page/error/404' },
        { label: '500 Page', link: '/page/error/500' },
        { label: '503 Page', link: '/page/error/503' },
        { label: 'Blank Page', link: '/page/blank' },

      ],
    },
    {
      label: 'Authentications',
      icon: Lock,
      initiallyOpened: router.pathname.includes('/page/'),
      links: [
        { label: 'Login', link: '/auth/login' },
        { label: 'Register', link: '/auth/register' },
        { label: 'Forgot Password', link: '/auth/forgot-password' },
      ],
    },
    {
      label: 'Forms',
      icon: Forms,
      initiallyOpened: router.pathname.includes('/cars'),
      links: [
        { label: 'Basic Form', link: '/tables' },
        { label: 'Sorting Table', link: '/tables/sortingDataTable' },
        { label: 'Sorting Selected Table', link: '/tables/sortingSelectedDataTable' },
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