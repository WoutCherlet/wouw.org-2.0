
import Navigation from '@/components/Navigation'

export default function Leiding({ leiding }) {

    console.log(leiding)
    const leiding_list = leiding["hydra:member"]

    return (
        <main
          className="flex min-h-screen flex-col items-center justify-between p-6"
        >
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <Navigation></Navigation>
          </div>
          <p className= "text-center lg:max-w-5xl lg:w-full m-auto">
            Lijst van leiding hier, vraag met getServerSideProps
          </p>
          <ul>
            {leiding_list.map((leider) => (
              <li>{leider.totem}</li>
            ))}
          </ul>
        </main>
      );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://wouw.noshit.be/api/leiding')
  const leiding = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      leiding,
    },
  }
}