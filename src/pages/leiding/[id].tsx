import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import UserPage from '@/components/UserPage'

export default function LeidingInfo() {

    const router = useRouter();
    const { id } = router.query;

    // TODO: here: check creator of activiteit
    // TEMP stub TODO: move temp stub to api route
    const user = { 
        totem: "Slechtvalk",
        img_url: "https://wouw.org/sites/default/files/styles/profile_pic/public/pictures/picture-711-1696513984.jpg",
        adjectief: "Vitale",
        naam: "Wout Cherlet",
        tak: "Verkenners",
        functie: "Assistent-takleider"
    };

    return (
        <main
        className="flex min-h-screen flex-col items-center justify-between p-6"
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Navigation></Navigation>
        </div>
        <div className="flex items-center m-auto">
            <UserPage user = { user }></UserPage>
        </div>
      </main>
    )
}


// Workflow voor server side rendering:
/*

export async function getServerSideProps({ params }) {
    const req = await fetch(api/${params.id}.json);
    const data = await req.json();

    return {
        props: { car: data },
    }
}

*/

// Workflow voor static generation:

/*

TODO: deze function fixt data van de api

export async function getStaticProps({ params }) {
    const req = await fetch(api/${params.id}.json);
    const data = await req.json();

    return {
        props: { car: data },
    }

}


TODO: deze function geeft een lijst van alle ids van leiding door, zodat next die kan pre renderen

export async function getStaticPaths() {

    const req = await fetch(api/leiding.json);
    const data = await req.json();

    const paths = data.map(person => {
        return { params: {id: person } }
    })

    return {
        paths,
        fallback:false
    }
}

*/