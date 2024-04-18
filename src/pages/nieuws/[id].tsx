import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import NieuwsPage from '@/components/NieuwsPage'

export default function NieuwsInfo() {

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
    const item = {
        created_by: "Slechtvalk",
        img_url: "https://wouw.org/sites/default/files/nieuws/52294898527_8c4a777d10_o%20%283%29_0.jpg",
        title: "TEST nieuwsitem: lentefeest",
        content: "Zaterdag 4 mei vindt het Lentefeest plaats. Dit zal een niet te missen dag worden voor zowel ouders als kinderen! Eerst is er vergadering tot 16u, Vanaf 16u zijn er activiteiten rond duurzaamheid. Tegelijk kunnen de liefhebbers genieten van enkele cocktails en mocktails in onze bar. Zoals gewoonlijk kan je van 18u tot 20u smullen van onze overheerlijke kamppasta of spaghetti. Schrijf je zeker in als je wilt blijven eten via onderstaande link. Inschrijven kan tot 29 april. We zijn nog opzoek naar helpende handen voor het eten die dag. Zou jij graag komen helpen? Laat het dan zeker weten in het inschrijvingsformulier."
    }

    return (
        <main
        className="flex min-h-screen flex-col items-center justify-between p-6"
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Navigation></Navigation>
        </div>
        <div className="flex items-center m-auto">
            <NieuwsPage user = { user } item = { item }></NieuwsPage>
        </div>
      </main>
    )
}