import { Dispatch, Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

interface DrawerProps {
  open: boolean | undefined;
  setOpen: Dispatch<SetStateAction<boolean | undefined>>;
}

const DrawerData = [
  {
    id: 1,
    title: 'Planning',
    altText: 'Planning',
    imgSrc: '/img/Module_Planning.svg'
  },
  {
    id: 2,
    title: 'Absences',
    altText: 'Absences',
    imgSrc: '/img/Module_Absences.svg'
  },
  {
    id: 3,
    title: 'Heures',
    altText: 'Heures',
    imgSrc: '/img/Module_Heures.svg'
  },
  {
    id: 4,
    title: 'Note de frais',
    altText: 'Note de frais',
    imgSrc: '/img/Module_NotedeFrais.svg'
  },
  {
    id: 5,
    title: 'Présence',
    altText: 'Présence',
    imgSrc: '/img/Module_Présence.svg'
  },
  {
    id: 6,
    title: 'Compétences',
    altText: 'Compétences',
    imgSrc: '/img/Module_Compétences.svg'
  },
  {
    id: 7,
    title: 'Salaire et paie',
    altText: 'Salaire et paie',
    imgSrc: '/img/Module_SalaireetPAie.svg'
  },
  {
    id: 8,
    title: 'Entretiens',
    altText: 'Entretiens',
    imgSrc: '/img/Module_Entretiens.svg'
  },
  {
    id: 9,
    title: 'Matériels',
    altText: 'Matériels',
    imgSrc: '/img/Module_Matériels.svg'
  },
  {
    id: 10,
    title: 'Documents',
    altText: 'Documents',
    imgSrc: '/img/Module_Documents.svg'
  },
  {
    id: 11,
    title: 'RH',
    altText: 'RH',
    imgSrc: '/img/Module_RH.svg'
  }
];

export default function Drawer({ open, setOpen }: DrawerProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <div className="fixed inset-0 left-[200px] bg-[#CECECE]/40 backdrop-blur-sm" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-[200px] flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-y-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-[800px]">
                  <div className="flex h-full flex-col bg-white shadow-xl rounded-r-[40px]">
                    <div className="flex w-full items-center py-28">
                      <div className="flex w-full justify-center">
                        <Image
                          alt="manatime logo"
                          width={350}
                          height={72.5}
                          src="/img/Logo.svg"
                        />
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <div className="grid grid-cols-4 gap-[6px] px-12 font-poppins">
                        {DrawerData.map((value, index) => {
                          return (
                            <div
                              key={index}
                              className="flex flex-col w-[170px] h-[170px] border border-[#D4D4D4] bg-white rounded-[10px] px-10 items-center justify-center text-manatime_darker_grey hover:text-manatime_light_blue hover:border-manatime_light_blue"
                            >
                              <Image
                                alt={value.altText}
                                width={89}
                                height={83}
                                src={value.imgSrc}
                              />
                              <span className="text-xl">{value.title}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
