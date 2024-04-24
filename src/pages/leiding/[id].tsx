import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import UserPage from '@/components/UserPage'

export default function LeidingInfo({ leiding }) {

    const router = useRouter();
    const { id } = router.query;

    return (
        <main
        className="flex min-h-screen flex-col items-center justify-between p-6"
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Navigation></Navigation>
        </div>
        <div className="flex items-center m-auto">
            <UserPage user = { leiding }></UserPage>
        </div>
      </main>
    )
}



// TODO: deze function fixt data van de api

export async function getStaticProps({ params }) {
    const req = await fetch('https://wouw.noshit.be/api/leiding/'+params.id);
    const data = await req.json();

    return {
        props: { leiding: data },
    }

}


// TODO: deze function geeft een lijst van alle ids van leiding door, zodat next die kan pre renderen

export async function getStaticPaths() {

    // TODO: find way to get all in one api call, now api returns hydra views

    const req1 = await fetch("https://wouw.noshit.be/api/leiding?page=1");
    const takken1 = await req1.json();
    var leiding_arr = takken1["hydra:member"]
    const req2 = await fetch("https://wouw.noshit.be/api/leiding?page=2");
    const takken2 = await req2.json();
    var leiding_arr = leiding_arr.concat(takken2["hydra:member"])
    const req3 = await fetch("https://wouw.noshit.be/api/leiding?page=3");
    const takken3 = await req3.json();
    var leiding_arr = leiding_arr.concat(takken3["hydra:member"])
    const req4 = await fetch("https://wouw.noshit.be/api/leiding?page=4");
    const takken4 = await req4.json();
    var leiding_arr = leiding_arr.concat(takken4["hydra:member"])
    const req5 = await fetch("https://wouw.noshit.be/api/leiding?page=5");
    const takken5 = await req5.json();
    var leiding_arr = leiding_arr.concat(takken5["hydra:member"])

    // const takken = [takken1, takken2, takken3, takken4, takken5]

    // console.log(takken)

    // let leiding_arr = [];
    // for (const tak in takken) {
    //     leiding_arr = leiding_arr.concat(tak["hydra:member"])
    // }

    console.log(leiding_arr)

    const paths = leiding_arr.map(leiding => {
        return { params: {id: leiding.slug } }
    })

    console.log(paths)

    return {
        paths,
        fallback:false
    }
}