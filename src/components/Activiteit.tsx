

export default function Activiteit({ activiteit }) { 

    return (
        <> 
            <h1 className= "text-center lg:max-w-5xl lg:w-full m-auto">
                TODO: info for activiteit ({activiteit}) here
            </h1>
            <p className= "text-center lg:max-w-5xl lg:w-full m-auto">
                Info over activiteit moet in deze component gegeven worden, wordt dan opgebouwd op activiteiten/[id].tsx
            </p>
        </>
        
    )
}