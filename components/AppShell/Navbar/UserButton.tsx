import { forwardRef } from 'react';
import { ChevronRight } from 'tabler-icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton, Button } from '@mantine/core';
import type { NextPage } from "next";

const UserButtons: NextPage = () => {
  return (
    <>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: theme.spacing.md,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <Avatar src={"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"} radius="xl" />
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Deneme Button
            </Text>

            <Text color="dimmed" size="xs">
              mail@reategnolgy.com.tr
            </Text>
          </div>
          <ChevronRight size={16} />
        </Group>
      </UnstyledButton>
    </>
  )
}

export default UserButtons