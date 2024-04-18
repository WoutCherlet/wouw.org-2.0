
import Navigation from '@/components/Navigation'

export default function LeidingList() {
    return (
        <main
          className="flex min-h-screen flex-col items-center justify-between p-6"
        >
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <Navigation></Navigation>
          </div>
          <p className= "text-center lg:max-w-5xl lg:w-full m-auto">
            Lijst van leiding hier, vraag met getServerSideProps
          </p>
        </main>
      );
}