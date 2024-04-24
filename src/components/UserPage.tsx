import Image from 'next/image'

export default function UserPage({ user }) { 

    return (
        <div className='flex flex-col'> 
            <div className= "text-center lg:max-w-5xl lg:w-full m-auto">
                <h1 className='text-center m-auto text-lg'>
                    { user.totem }
                </h1>
            </div>

            <div className="flex mb-4">
                <div className="w-1/2">
                    <div className="font-bold">
                        Totemnaam:
                    </div>
                    <div>
                        { user.totem }
                    </div>
                    <div className="font-bold">
                        Adjectief: TODO: make optional, for people that dont have one
                    </div>
                    <div>
                        { user.adjective }
                    </div>
                    <div className="font-bold">
                        Naam:
                    </div>
                    <div>
                        { user.firstname } { user.lastname }
                    </div>
                    <div className="font-bold">
                        Tak:
                    </div>
                    <div>
                        TODO: tak not returned in api/leiding/slug (maybe not necessary here as its shown on takken pagina)
                    </div>
                    <div className="font-bold">
                        Functie:
                    </div>
                    <div>
                        TODO: functie not returned in api/leiding/slug (maybe not necessary here as its shown on takken pagina)
                    </div>
                </div>
                <div className="w-1/2">
                    <Image src={user.img_url} alt={"Picture of " + user.name} width={300} height={300}>
                    </Image>
                </div>
            </div>
        </div>
    )
}