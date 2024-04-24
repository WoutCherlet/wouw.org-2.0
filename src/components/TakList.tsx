


export default function TakList({ takname, takleiding }) {

    // TODO: here: make a nice list of picture + info of leiding
    // make sure it is full width and vertically stackable component

    // NOTE: use takleiding[i].takleider (bool) to place takleider first

    return (
        <>
            <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl"> 
                {takname} 
            </h1>
        
            <ul>
                {takleiding.map((leider) => (
                <li key={leider.leiding.totem}><a href={"/leiding/"+leider.leiding.slug}>{leider.leiding.totem}</a></li>
                ))}
          </ul>
        </>
    )
}