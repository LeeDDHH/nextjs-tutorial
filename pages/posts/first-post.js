import Link from 'next/link'
import Image from 'next/image'

const FirstPost = () => {
  return (
    <>
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
    </>
  )
}

export default FirstPost;
