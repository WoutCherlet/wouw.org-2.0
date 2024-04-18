import { Inter } from "next/font/google";
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-6 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Navigation></Navigation>
      </div>
      <p className= "text-center lg:max-w-5xl lg:w-full">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce finibus felis at ligula molestie, in dapibus urna varius. Etiam eget libero egestas, molestie diam in, molestie urna. Donec sagittis lacus vel ex congue egestas. Duis consectetur elementum vehicula. Nam bibendum ante sed velit facilisis, vel pulvinar dui ultricies. Nunc consequat risus ac justo efficitur efficitur. Nulla facilisi. Phasellus quam erat, scelerisque sed nulla et, sagittis porttitor sapien. Etiam molestie facilisis diam nec rhoncus. Duis tellus nulla, ullamcorper blandit ipsum vel, commodo fermentum ipsum. Mauris lacus tellus, convallis in sapien a, eleifend fermentum risus. Nulla aliquam, eros non semper convallis, magna mauris ultrices metus, a fermentum ante dolor eget erat. Donec nec mi iaculis, laoreet nibh nec, euismod justo.

Sed vitae volutpat lorem. Aenean ac urna quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas fermentum, lorem quis luctus euismod, augue mauris vehicula massa, pellentesque vulputate ligula lectus aliquet nisl. Ut ut dui nunc. Mauris orci arcu, aliquet ac libero et, auctor consectetur dolor. Duis tristique nulla nulla, nec fermentum nulla consequat id. Duis vehicula purus ac ex sollicitudin accumsan.

Phasellus vel arcu in quam mattis finibus. Quisque ac ante libero. Pellentesque condimentum orci a elit placerat laoreet. Morbi id fermentum lorem. Nulla ullamcorper arcu nunc, eget porta nisi gravida volutpat. Pellentesque vel purus faucibus, sodales felis id, luctus purus. Morbi a bibendum urna. Suspendisse porta dolor eu bibendum tempus. Nam eu orci ac ex vestibulum luctus sed in est.

Maecenas pellentesque sagittis auctor. Suspendisse finibus lectus id arcu bibendum, et dapibus tellus fringilla. Ut turpis nunc, tincidunt et aliquam vitae, venenatis id neque. Donec dignissim arcu sed sapien molestie, et molestie mauris rhoncus. Nullam sed justo sit amet turpis luctus iaculis. Aliquam ac tortor nisl. Sed pulvinar ex sollicitudin urna semper, ut suscipit ipsum rhoncus. Sed sed laoreet nibh. Quisque varius leo erat, eget congue neque faucibus in. Etiam cursus purus vitae condimentum iaculis. Nullam rutrum et nisi a congue. Maecenas imperdiet ex nec ante ultricies ultrices. Proin id turpis et nulla pretium consectetur vitae vitae mauris.

Duis tincidunt enim nisi, viverra vulputate nisl egestas vitae. Sed placerat eget lacus vel gravida. Suspendisse nec iaculis sapien. Quisque fermentum ligula eu euismod rhoncus. Aenean non massa lobortis, elementum sem interdum, consequat quam. Quisque consectetur vitae sem eu fermentum. Pellentesque ullamcorper justo et orci euismod iaculis. Maecenas bibendum purus ligula, id rutrum lectus ornare sit amet. Ut a sodales libero. Etiam mi metus, lobortis eget velit id, maximus interdum mauris.
      </p>
    </main>
  );
}
