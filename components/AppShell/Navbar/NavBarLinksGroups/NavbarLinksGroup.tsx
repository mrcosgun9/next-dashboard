import type { NextPage } from "next";
import Link from 'next/link'
import { Group, Box, Collapse, ThemeIcon, Text, UnstyledButton, createStyles } from '@mantine/core';
import { Icon as TablerIcon, CalendarStats, ChevronLeft, ChevronRight } from 'tabler-icons-react';
import { useState } from "react";
const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));
interface LinksGroupProps {
  icon: TablerIcon;
  label: string;
  link: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}
const NavbarLinksGroup: NextPage = ({ icon: Icon, label, link, initiallyOpened, links }: LinksGroupProps) => {
  const { classes, theme } = useStyles();
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const items = (hasLinks ? links : []).map((link) => (
    <Link href={link.link} key={link.label}>
      <a className={classes.link}>{link.label}</a>
    </Link>

  ));


  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <Icon size={18} />
            </ThemeIcon>
            <Box ml="md">
              {link ? <Link href={link}>
                <a>
                  {label}
                </a>
              </Link> : label}
            </Box>
          </Box>
          {hasLinks && (
            <ChevronLeft
              className={classes.chevron}
              size={14}

            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

export default NavbarLinksGroup