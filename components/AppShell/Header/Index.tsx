import { ActionIcon, Burger, Group, Header, MediaQuery, useMantineColorScheme } from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import { MoonStars, Sun } from "tabler-icons-react";
import Logo from "./Logo";

const AppShellHeaderIndex: NextPage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);
  const dark = colorScheme === 'dark';
  return (
    <>
      <Header height={60} p="xs">
        <Group sx={{ height: '100%' }} position="apart" >
          <Group>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}

              />
            </MediaQuery>
            <Logo colorScheme={colorScheme} />
          </Group>
          <Group>
            <ActionIcon
              variant="outline"
              color={dark ? 'yellow' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <Sun size={18} /> : <MoonStars size={18} />}
            </ActionIcon>
            {/* 
                <Menu
                  size={260}
                  placement="end"
                  transition="pop-top-right"
                  className='mt-2'
                  onClose={() => setUserMenuOpened(false)}
                  onOpen={() => setUserMenuOpened(true)}
                  control={
                    <UnstyledButton
                    >
                      <Group spacing={7}>
                        <Avatar src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80" alt="Muhammet Raşit Coşgun" radius="xl" size={20} />
                        <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                          Muhammet Raşit Coşgun
                        </Text>
                        <ChevronDown size={12} />
                      </Group>
                    </UnstyledButton>
                  }
                >
                  <Menu.Item icon={<Heart size={14} />}>
                    Liked posts
                  </Menu.Item>
                  <Menu.Item icon={<Star size={14} />}>
                    Saved posts
                  </Menu.Item>
                  <Menu.Item icon={<Message size={14} />}>
                    Your comments
                  </Menu.Item>

                  <Menu.Label>Settings</Menu.Label>
                  <Menu.Item icon={<Settings size={14} />}>Account settings</Menu.Item>
                  <Menu.Item icon={<SwitchHorizontal size={14} />}>Change account</Menu.Item>
                  <Menu.Item icon={<Logout size={14} />}>Logout</Menu.Item>

                  <Divider />

                  <Menu.Label>Danger zone</Menu.Label>
                  <Menu.Item icon={<PlayerPause size={14} />}>Pause subscription</Menu.Item>
                  <Menu.Item color="red" icon={<Trash size={14} />}>
                    Delete account
                  </Menu.Item>
                </Menu> */}
          </Group>
        </Group>
      </Header>
    </>
  )
}

export default AppShellHeaderIndex