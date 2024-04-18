import UserInfo from '@/components/UserInfo'
import Image from 'next/image'

export default function NieuwsPagina({ item, user }) { 

    return (
        <> 
            <div className="flex items-center m-auto">
            <div className="w-1/3 ">
                <UserInfo user = { user }></UserInfo>
            </div>
            <div className="w-2/3 m-auto text-center">
                <h1>
                    {item.title}
                </h1>
                <br />
                <Image src={item.img_url} alt={"Picture of " + item.title} width={300} height={300} className='m-auto'>
                </Image>
                <br />
                <p>
                    {item.content}
                </p>
                <br />
                <div>
                    Created by {item.created_by}
                </div>

            </div>
        </div>
        </>
        
    )
}