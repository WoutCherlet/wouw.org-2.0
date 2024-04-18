import { Inter } from "next/font/google";
import { useRouter } from 'next/router'
import Activiteit from '@/components/Activiteit'
import Navigation from '@/components/Navigation'
import UserInfo from '@/components/UserInfo'

const inter = Inter({ subsets: ["latin"] });

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
        className={`flex min-h-screen flex-col items-center justify-between p-6 ${inter.className}`}
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Navigation></Navigation>
        </div>
        <div className="flex items-center m-auto">
            <div className="w-1/3 ">
                <UserInfo user = { user }></UserInfo>
            </div>
            <div className="w-2/3">
                <Activiteit activiteit={ id }></Activiteit>
            </div>
        </div>
      </main>
    )
}
