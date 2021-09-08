import Head from 'next/head'
import { Header } from '../components/Header/Header'

import { Container, Main } from '../styles/styles'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Planty</title>
        <meta name="description" content="Planty project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header />
        
      </Main>

    </Container>
  )
}
