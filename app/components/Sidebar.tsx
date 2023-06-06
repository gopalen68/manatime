'use client';

import { useState } from 'react';
import Image from 'next/image';
import Drawer from './Drawer';
import Link from 'next/link';
import { useGlobalContext } from '../Context/store';

export default function Sidebar() {
  const [open, setOpen] = useState<boolean | undefined>(false);
  const { openForm, setOpenForm } = useGlobalContext();
  return (
    <>
      <Drawer open={open} setOpen={setOpen} />
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-50 w-[200px] h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full pb-4 overflow-y-auto bg-gradient-to-b from-manatime_dark_blue to-manatime_mid_blue">
          <ul>
            <li>
              <div className="h-16 flex w-[200px] items-center justify-center bg-white">
                <Image
                  src="/img/Burgerbutton.svg"
                  width={32}
                  height={32}
                  alt="Burger Menu"
                  onClick={() => setOpen(!open)}
                />
              </div>
            </li>
            <li className="bg-manatime_light_blue pl-5 border-b-2 border-manatime_border_grey">
              <Link href="#" className="flex h-16 items-center p-2 text-white">
                <Image
                  src="/img/Accueil.svg"
                  className="h-8 mr-3"
                  width={22}
                  height={22}
                  alt="Accueil"
                />
                <span className="ml-3 font-poppins text-lg">Accueil</span>
              </Link>
            </li>
            <li className="bg-manatime_light_blue pl-5 border-b-2 border-manatime_border_grey">
              <Link
                href="/"
                className="flex h-16 items-center p-2 text-white"
                onClick={() => setOpenForm(!openForm)}
              >
                <Image
                  src="/img/Add.svg"
                  className="h-8 mr-3"
                  width={22}
                  height={22}
                  alt="Ajouter"
                  // onClick={() => setOpenForm(!openForm)}
                />
                <span className="ml-3 font-poppins text-lg">Ajouter</span>
              </Link>
            </li>
            <li className="pl-5 border-b-2 border-manatime_border_blue">
              <Link href="#" className="flex h-16 items-center p-2 text-white">
                <Image
                  src="/img/Monespace.svg"
                  width={22}
                  height={22}
                  alt="Mon espace"
                />
                <span className="ml-3 font-poppins text-base">Mon espace</span>
                <Image
                  src="/img/Stripe.svg"
                  className="absolute right-0 mr-3"
                  width={11}
                  height={7}
                  alt="Stripe Icone"
                />
              </Link>
            </li>
            <li className="pl-5 border-b-2 border-manatime_border_blue">
              <Link href="#" className="flex h-16 items-center p-2 text-white">
                <Image
                  src="/img/Validation.svg"
                  width={22}
                  height={22}
                  alt="Validation"
                />
                <span className="ml-3 font-poppins text-base">Validation</span>
                <Image
                  src="/img/Stripe.svg"
                  className="absolute right-0 mr-3"
                  width={11}
                  height={7}
                  alt="Stripe Icone"
                />
              </Link>
            </li>
            <li className="pl-5 border-b-2 border-manatime_border_blue">
              <Link href="#" className="flex h-16 items-center p-2 text-white">
                <Image
                  src="/img/Indicateurs.svg"
                  width={22}
                  height={22}
                  alt="Indicateurs"
                />
                <span className="ml-3 font-poppins text-base">Indicateurs</span>
                <Image
                  src="/img/Stripe.svg"
                  className="absolute right-0 mr-3"
                  width={11}
                  height={7}
                  alt="Stripe Icone"
                />
              </Link>
            </li>
            <li className="pl-5 bg-white border-b-2 border-manatime_border_blue">
              <Link href="#" className="flex h-16 items-center p-2 text-white">
                <Image
                  src="/img/Soldes_Rev.svg"
                  width={22}
                  height={22}
                  alt="Soldes"
                />
                <span className="ml-3 font-poppins text-base text-manatime_dark_blue">
                  Soldes
                </span>
                <Image
                  src="/img/Stripe_Down.svg"
                  className="absolute right-0 mr-3 rotate-180"
                  width={11}
                  height={7}
                  alt="Stripe Icone"
                />
              </Link>
              <ul id="dropdown" className=" py-2 space-y-2 bg-white">
                <li>
                  <Link
                    href="/"
                    className="flex w-full p-2 text-manatime_mid_blue text-base font-roboto transition duration-75"
                  >
                    Gestion des soldes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex w-full p-2 text-manatime_dark_grey text-base font-roboto transition duration-75"
                  >
                    Ajuster un solde
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex w-full p-2 text-manatime_dark_grey text-base font-roboto transition duration-75"
                  >
                    Compteurs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex w-full p-2 text-manatime_dark_grey text-base font-roboto transition duration-75"
                  >
                    Historique
                  </Link>
                </li>
              </ul>
            </li>
            <li className="pl-5 border-b-2 border-manatime_border_blue">
              <Link href="#" className="flex h-16 items-center p-2 text-white">
                <Image
                  src="/img/Recherche.svg"
                  width={22}
                  height={22}
                  alt="Recherche"
                />
                <span className="ml-3 font-poppins text-base">Recherche</span>
                <Image
                  src="/img/Stripe.svg"
                  className="absolute right-0 mr-3"
                  width={11}
                  height={7}
                  alt="Stripe Icone"
                />
              </Link>
            </li>
          </ul>
          <div className="absolute bottom-0 left-0 h-72 pb-4">
            <Image src="/img/Graphic.svg" fill={true} alt="Graphic Manatime" />
          </div>
        </div>
      </aside>
    </>
  );
}
