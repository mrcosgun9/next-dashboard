import { Grid, Container } from '@mantine/core'
import type { NextPage } from 'next'
import HomeCard from '../components/Cards/HomeCard'
import HomeCardIcons from '../components/Cards/HomeCardIcons'

const Home: NextPage = () => {

  return (
    <Grid>
      <Grid.Col>
        <HomeCardIcons />
      </Grid.Col>
      <Grid.Col xs={12} md={6} lg={3}>
        <HomeCard title="Satış Adeti" completed="20" total="50" stats={[{ value: 18, label: "Deneme" }]} />
      </Grid.Col>
      <Grid.Col xs={12} md={6} lg={3}>
        <HomeCard title="Deneme Değer" completed="30" total="50" stats={[{ value: 18, label: "Deneme" }]} />
      </Grid.Col>
      <Grid.Col xs={12} md={6} lg={3}>
        <HomeCard title="Satış Adeti" completed="80" total="50" stats={[{ value: 18, label: "Deneme" }]} />
      </Grid.Col>
      <Grid.Col xs={12} md={6} lg={3}>
        <HomeCard title="Satış Adeti" completed="20" total="50" stats={[{ value: 18, label: "Deneme" }]} />
      </Grid.Col>

    </Grid>
  )
}

export default Home
