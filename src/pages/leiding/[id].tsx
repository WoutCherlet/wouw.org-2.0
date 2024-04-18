import { useRouter } from 'next/router'

export default function LeidingInfo() {

    const router = useRouter();
    const { id } = router.query;

    return <h1>On page {id}</h1>
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