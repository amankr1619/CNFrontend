import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
export default function Home() {
  const [proto, setProto] = useBoolean()
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Wrapper />
    </Layout>
  )
}