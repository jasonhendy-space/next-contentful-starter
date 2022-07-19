import Head from 'next/head'

import { fetchEntries } from '@utils/contentfulPosts'

import Post from '@components/Post'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>ReAssure - Help Center Article</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="posts">
          {posts.map(({date, image, title, body}) => {
            return <Post key={date} date={date} image={image.fields} title={title} body={body} />
          })}
        </div>
      </main>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        main {
          padding: 0 0 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .posts {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((post) => {
    return post.fields
  })

  return {
    props: {
      posts,
    },
  }
}
