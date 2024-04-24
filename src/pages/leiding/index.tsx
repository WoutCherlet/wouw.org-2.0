
import Navigation from '@/components/Navigation'
import TakList from '@/components/TakList'
import { Tajawal } from 'next/font/google';

export default function Leiding({ takken }) {
    const takken_list = takken["hydra:member"]

    return (
        <main
          className="flex min-h-screen flex-col items-center justify-between p-6"
        >
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <Navigation></Navigation>
          </div>

          {takken_list.map((tak) => (
            <TakList key={tak.name} takname={tak.name} takleiding={tak.leiding}></TakList>
          ))}
        </main>
      );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// TODO: getServerSideProps instead? for dynamic content
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://wouw.noshit.be/api/takken')
  const takken = await res.json()

  console.log(res.status)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      takken,
    },
  }
}