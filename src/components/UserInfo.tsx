import Image from 'next/image'

export default function UserInfo({ user }) { 

    return (
        <>
            <div className="">
                    <Image src={user.img_url} alt={"Picture of " + user.name} width={100} height={100} className='m-auto'>
                    </Image>
            </div>
            <div className='m-auto text-center'>
                Geschreven door {user.totem} op TODO: datum van activiteit here.
            </div>
        </>
        
    )
}