import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back 2 Home</a>
        </Link>
      </h2>
      <Image
        src="/images/calm-place.jpg"
        height={144}
        width={432}
        alt="pic"
      />
    </Layout>
  )
}

export default FirstPost;
