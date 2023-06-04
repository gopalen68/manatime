import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-[200px] h-screen pt-16 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full pb-4 overflow-y-auto bg-gradient-to-b from-manatime_dark_blue to-manatime_mid_blue">
        <ul>
          <li className="bg-manatime_light_blue pl-5 border-b-2 border-manatime_border_grey">
            <a href="#" className="flex h-16 items-center p-2 text-white">
              <Image
                src="/img/Accueil.svg"
                className="h-8 mr-3"
                width={22}
                height={22}
                alt="Accueil Icone"
              />
              <span className="ml-3 font-poppins text-lg">Accueil</span>
            </a>
          </li>
          <li className="bg-manatime_light_blue pl-5 border-b-2 border-manatime_border_grey">
            <a href="#" className="flex h-16 items-center p-2 text-white">
              <Image
                src="/img/Add.svg"
                className="h-8 mr-3"
                width={22}
                height={22}
                alt="Accueil Icone"
              />
              <span className="ml-3 font-poppins text-lg">Ajouter</span>
            </a>
          </li>
          <li className="pl-5 border-b-2 border-manatime_border_blue">
            <a href="#" className="flex h-16 items-center p-2 text-white">
              <Image
                src="/img/Monespace.svg"
                width={22}
                height={22}
                alt="Accueil Icone"
              />
              <span className="ml-3 font-poppins text-base">Mon espace</span>
              <Image
                src="/img/Stripe.svg"
                className="absolute right-0 mr-3"
                width={11}
                height={7}
                alt="Stripe Icone"
              />
            </a>
          </li>
          <li className="pl-5 border-b-2 border-manatime_border_blue">
            <a href="#" className="flex h-16 items-center p-2 text-white">
              <Image
                src="/img/Validation.svg"
                width={22}
                height={22}
                alt="Accueil Icone"
              />
              <span className="ml-3 font-poppins text-base">Validation</span>
              <Image
                src="/img/Stripe.svg"
                className="absolute right-0 mr-3"
                width={11}
                height={7}
                alt="Stripe Icone"
              />
            </a>
          </li>
          <li className="pl-5 border-b-2 border-manatime_border_blue">
            <a href="#" className="flex h-16 items-center p-2 text-white">
              <Image
                src="/img/Indicateurs.svg"
                width={22}
                height={22}
                alt="Accueil Icone"
              />
              <span className="ml-3 font-poppins text-base">Indicateurs</span>
              <Image
                src="/img/Stripe.svg"
                className="absolute right-0 mr-3"
                width={11}
                height={7}
                alt="Stripe Icone"
              />
            </a>
          </li>
          <li className="pl-5 bg-white border-b-2 border-manatime_border_blue">
            <a href="#" className="flex h-16 items-center p-2 text-white">
              <Image
                src="/img/Soldes.svg"
                width={22}
                height={22}
                alt="Accueil Icone"
              />
              <span className="ml-3 font-poppins text-base text-manatime_dark_blue">Soldes</span>
              <Image
                src="/img/Stripe.svg"
                className="absolute right-0 mr-3 rotate-180"
                width={11}
                height={7}
                alt="Stripe Icone"
              />
            </a>
            <ul id="dropdown" className=" py-2 space-y-2 bg-white">
              <li>
                <a
                  href="#"
                  className="flex w-full p-2 text-manatime_mid_blue text-base font-roboto transition duration-75"
                >
                  Gestion des soldes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex w-full p-2 text-manatime_dark_grey text-base font-roboto transition duration-75"
                >
                  Ajuster un solde
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex w-full p-2 text-manatime_dark_grey text-base font-roboto transition duration-75"
                >
                  Compteurs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex w-full p-2 text-manatime_dark_grey text-base font-roboto transition duration-75"
                >
                  Historique
                </a>
              </li>
            </ul>
          </li>
          <li className="pl-5 border-b-2 border-manatime_border_blue">
            <a href="#" className="flex h-16 items-center p-2 text-white">
              <Image
                src="/img/Recherche.svg"
                width={22}
                height={22}
                alt="Accueil Icone"
              />
              <span className="ml-3 font-poppins text-base">Recherche</span>
              <Image
                src="/img/Stripe.svg"
                className="absolute right-0 mr-3"
                width={11}
                height={7}
                alt="Stripe Icone"
              />
            </a>
          </li>
        </ul>
        <div className="absolute bottom-0 left-0 h-72 pb-4 bg-red-400">
          <Image src="/img/Graphic.svg" fill={true} alt="Graphic Manatime" />
        </div>
      </div>
    </aside>
  );
}
