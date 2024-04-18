import Image from 'next/image'

export default function UserPage({ user }) { 

    return (
        <> 
            <div className= "text-center lg:max-w-5xl lg:w-full m-auto">
                <h1>
                    { user.totem }
                </h1>
            </div>

            <div className="flex mb-4">
                <div className="w-1/2 bg-gray-400">
                    <div className="font-bold">
                        Totemnaam:
                    </div>
                    <div>
                        { user.totem }
                    </div>
                    <div className="font-bold">
                        Adjectief:
                    </div>
                    <div>
                        { user.adjectief }
                    </div>
                    <div className="font-bold">
                        Naam:
                    </div>
                    <div>
                        { user.naam }
                    </div>
                    <div className="font-bold">
                        Tak:
                    </div>
                    <div>
                        { user.tak }
                    </div>
                    <div className="font-bold">
                        Functie:
                    </div>
                    <div>
                        { user.functie }
                    </div>
                </div>
                <div className="w-1/2 bg-gray-500">
                    <Image src={user.img_url} alt={"Picture of " + user.name}>
                    </Image>
                </div>
            </div>
        </>
    )
}