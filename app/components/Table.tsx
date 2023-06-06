'use client';

import Image from 'next/image';

const ManatimeDataHeader = [
  {
    titre: 'Utilisateurs',
    width: '450px'
  },
  {
    titre: 'Catégorie',
    width: '450px'
  },
  {
    titre: 'Période',
    width: '120px'
  },
  {
    titre: 'Solde actuel',
    width: '120px'
  },
  {
    titre: 'Solde pris',
    width: '120px'
  },
  {
    titre: 'Solde futur',
    width: '120px'
  },
  {
    titre: ' ',
    width: '270px'
  }
];

export default function Table({ data, removeData }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-[4px]">
      <table className="w-full text-sm text-left">
        <thead className="text-base text-manatime_darker_grey bg-white font-roboto">
          <tr>
            {ManatimeDataHeader.map((value, index) => {
              return (
                <th
                  key={index}
                  scope="col"
                  className={`border-table w-[${value.width}] h-[38px]`}
                >
                  {value.titre}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="font-roboto text-base">
          {data.map((value, index) => {
            return (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-manatime_mid_grey' : 'bg-white'
                } border-b`}
              >
                <td className="px-4 py-4 w-[450px] border border-[#C4C4C4]">
                  {value.utilisateurs}
                </td>
                <td className="px-4 py-4 w-[450px] border border-[#C4C4C4]">
                  <div className="flex flex-row items-center">
                    {value.categorie ? (
                      <>
                        <div className="h-3 w-3 rounded-full bg-[#FF8851]" />
                        <span className="pl-4">Congés payés</span>
                      </>
                    ) : (
                      <>
                        <div className="h-3 w-3 rounded-full bg-[#A851FF]" />
                        <span className="pl-4">RTT</span>
                      </>
                    )}
                  </div>
                </td>
                <td className="w-[120px] border-table">{value.periode}</td>
                <td className="w-[120px] border-table">{value.solde_actuel}</td>
                <td className="w-[120px] border-table">{value.solde_pris}</td>
                <td className="w-[120px] border-table">{value.solde_futur}</td>

                <td className="px-4 py-[3px] w-[270px] border border-[#C4C4C4]">
                  <div className="flex flex-row mx-10 space-x-10">
                    <Image
                      alt=""
                      className="cursor-pointer"
                      width={32}
                      height={32}
                      src="/img/Ajuster.svg"
                    />
                    <Image
                      alt=""
                      className="cursor-pointer"
                      width={32}
                      height={32}
                      src="/img/Transferer.svg"
                    />
                    <Image
                      alt=""
                      className="cursor-pointer"
                      width={32}
                      height={32}
                      src="/img/Solder.svg"
                      onClick={() => removeData(value.id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
