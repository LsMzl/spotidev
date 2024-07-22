import { Header } from "../components/Header";
import { ListItem } from "../components/ListItem";

export default function Home() {
   return (
      <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
         <Header>
            <div className="mb-2">
               <h1 className="text-white text-3xl font-semibold">Bienvenue</h1>
               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2x:grid-cols-4 gap-3 mt-4">
                  <ListItem
                     image="/img/like.png"
                     name="Musiques likées"
                     href="#"
                  />
               </div>
            </div>
         </Header>
         <div className="mt-2 mb-7 px-6">
            <div className="flex justify-between items-center">
               <h2 className="text-white text-2xl font-semibold">Nouveautés</h2>
            </div>
            <div>Liste</div>
         </div>
      </div>
   );
}
