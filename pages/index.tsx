import type { NextPage } from 'next'
import { DefaultButton, PrimaryButton, ThemeProvider, initializeIcons } from '@fluentui/react';
import { CompoundButton } from '@fluentui/react/lib/Button';
const Home: NextPage = () => {
  return (
    <ThemeProvider>
      <DefaultButton onClick={() => alert('hello')}>Hello World</DefaultButton>
      <PrimaryButton onClick={() => alert('hello')}>Hello World</PrimaryButton>
      <CompoundButton primary secondaryText="This is the secondary text." >
        Primary
      </CompoundButton>
    </ThemeProvider>
  )
}

export default Home
