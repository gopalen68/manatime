import Image from 'next/image';

export default function Table() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-[4px]">
      <table className="w-full text-sm text-left">
        <thead className="text-base text-manatime_darker_grey bg-white font-roboto">
          <tr>
            <th scope="col" className="px-4 py-4 w-[450px] h-[38px]">
              Utilisateurs
            </th>
            <th scope="col" className="px-4 py-4 w-[450px] h-[38px]">
              Catégorie
            </th>
            <th scope="col" className="px-4 py-4 w-[120px] h-[38px]">
              Période
            </th>
            <th scope="col" className="px-4 py-4 w-[120px] h-[38px]">
              Solde actuel
            </th>
            <th scope="col" className="px-4 py-4 w-[120px] h-[38px]">
              Solde pris
            </th>
            <th scope="col" className="px-4 py-4 w-[120px] h-[38px]">
              Solde futur
            </th>
            <th scope="col" className="px-4 py-4 w-[270px] h-[38px]" />
          </tr>
        </thead>
        <tbody className="font-roboto text-base">
          <tr className="bg-manatime_mid_grey border-b">
            <td className="px-4 py-4">Darléne Menson Dujon</td>
            <td className="px-4 py-4">
              <div className="flex flex-row items-center">
                <div className="h-3 w-3 rounded-full bg-[#FF8851]" />
                <span className="pl-4">Congés payés</span>
              </div>
            </td>
            <td className="px-4 py-4">2020-2021</td>
            <td className="px-4 py-4">16</td>
            <td className="px-4 py-4">10</td>
            <td className="px-4 py-4">34</td>

            <td className="px-4 py-[3px]">
              <div className="flex flex-row mx-10 space-x-10">
                <Image alt="" width={32} height={32} src="/img/Ajuster.svg" />
                <Image
                  alt=""
                  width={32}
                  height={32}
                  src="/img/Transferer.svg"
                />
                <Image alt="" width={32} height={32} src="/img/Solder.svg" />
              </div>
            </td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-4 py-4">Darléne Menson Dujon</td>
            <td className="px-4 py-4">
              <div className="flex flex-row items-center">
                <div className="h-3 w-3 rounded-full bg-[#A851FF]" />
                <span className="pl-4">Congés payés</span>
              </div>
            </td>
            <td className="px-4 py-4">2020-2021</td>
            <td className="px-4 py-4">16</td>
            <td className="px-4 py-4">10</td>
            <td className="px-4 py-4">34</td>

            <td className="px-4 py-[3px]">
              <div className="flex flex-row mx-10 space-x-10">
                <Image alt="" width={32} height={32} src="/img/Ajuster.svg" />
                <Image
                  alt=""
                  width={32}
                  height={32}
                  src="/img/Transferer.svg"
                />
                <Image alt="" width={32} height={32} src="/img/Solder.svg" />
              </div>
            </td>
          </tr>
          <tr className="bg-manatime_mid_grey border-b">
            <td className="px-4 py-4">Darléne Menson Dujon</td>
            <td className="px-4 py-4">
              <div className="flex flex-row items-center">
                <div className="h-3 w-3 rounded-full bg-[#FF8851]" />
                <span className="pl-4">Congés payés</span>
              </div>
            </td>
            <td className="px-4 py-4">2020-2021</td>
            <td className="px-4 py-4">16</td>
            <td className="px-4 py-4">10</td>
            <td className="px-4 py-4">34</td>

            <td className="px-4 py-[3px]">
              <div className="flex flex-row mx-10 space-x-10">
                <Image alt="" width={32} height={32} src="/img/Ajuster.svg" />
                <Image
                  alt=""
                  width={32}
                  height={32}
                  src="/img/Transferer.svg"
                />
                <Image alt="" width={32} height={32} src="/img/Solder.svg" />
              </div>
            </td>
          </tr>
          <tr className="border-b bg-white">
            <td className="px-4 py-4">Darléne Menson Dujon</td>
            <td className="px-4 py-4">
              <div className="flex flex-row items-center">
                <div className="h-3 w-3 rounded-full bg-[#A851FF]" />
                <span className="pl-4">Congés payés</span>
              </div>
            </td>
            <td className="px-4 py-4">2020-2021</td>
            <td className="px-4 py-4">16</td>
            <td className="px-4 py-4">10</td>
            <td className="px-4 py-4">34</td>

            <td className="px-4 py-[3px]">
              <div className="flex flex-row mx-10 space-x-10">
                <Image alt="" width={32} height={32} src="/img/Ajuster.svg" />
                <Image
                  alt=""
                  width={32}
                  height={32}
                  src="/img/Transferer.svg"
                />
                <Image alt="" width={32} height={32} src="/img/Solder.svg" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
