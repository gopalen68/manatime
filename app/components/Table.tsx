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

const ManatimeData = [
  {
    id: 1,
    utilisateurs: 'Darléne Menson Dujon',
    categorie: true,
    periode: '2020-2021',
    solde_actuel: '16',
    solde_pris: '10',
    solde_futur: '34'
  },
  {
    id: 2,
    utilisateurs: 'Marlon Brandon',
    categorie: false,
    periode: '2020',
    solde_actuel: '3',
    solde_pris: '25',
    solde_futur: '20'
  },
  {
    id: 3,
    utilisateurs: 'Darléne Menson Dujon',
    categorie: true,
    periode: '2020-2021',
    solde_actuel: '16',
    solde_pris: '10',
    solde_futur: '34'
  },
  {
    id: 4,
    utilisateurs: 'Marlon Brandon',
    categorie: false,
    periode: '2020',
    solde_actuel: '3',
    solde_pris: '25',
    solde_futur: '20'
  },
  {
    id: 5,
    utilisateurs: 'Darléne Menson Dujon',
    categorie: true,
    periode: '2020-2021',
    solde_actuel: '16',
    solde_pris: '10',
    solde_futur: '34'
  },
  {
    id: 6,
    utilisateurs: 'Marlon Brandon',
    categorie: false,
    periode: '2020',
    solde_actuel: '3',
    solde_pris: '25',
    solde_futur: '20'
  },
  {
    id: 7,
    utilisateurs: 'Darléne Menson Dujon',
    categorie: true,
    periode: '2020',
    solde_actuel: '16',
    solde_pris: '10',
    solde_futur: '34'
  },
  {
    id: 8,
    utilisateurs: 'Marlon Brandon',
    categorie: false,
    periode: '2020',
    solde_actuel: '3',
    solde_pris: '25',
    solde_futur: '20'
  },
  {
    id: 9,
    utilisateurs: 'Darléne Menson Dujon',
    categorie: true,
    periode: '2020-2021',
    solde_actuel: '16',
    solde_pris: '10',
    solde_futur: '34'
  },
  {
    id: 10,
    utilisateurs: 'Marlon Brandon',
    categorie: false,
    periode: '2020',
    solde_actuel: '3',
    solde_pris: '25',
    solde_futur: '20'
  },
  {
    id: 11,
    utilisateurs: 'Darléne Menson Dujon',
    categorie: true,
    periode: '2020',
    solde_actuel: '16',
    solde_pris: '10',
    solde_futur: '34'
  },
  {
    id: 12,
    utilisateurs: 'Marlon Brandon',
    categorie: false,
    periode: '2020',
    solde_actuel: '3',
    solde_pris: '25',
    solde_futur: '20'
  }
];

export default function Table() {
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
                  className={`px-4 py-4 w-[${value.width}] h-[38px]`}
                >
                  {value.titre}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="font-roboto text-base">
          {ManatimeData.map((value, index) => {
            return (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-manatime_mid_grey' : 'bg-white'
                } border-b`}
              >
                <td className="px-4 py-4">{value.utilisateurs}</td>
                <td className="px-4 py-4">
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
                <td className="px-4 py-4">{value.periode}</td>
                <td className="px-4 py-4">{value.solde_actuel}</td>
                <td className="px-4 py-4">{value.solde_pris}</td>
                <td className="px-4 py-4">{value.solde_futur}</td>

                <td className="px-4 py-[3px]">
                  <div className="flex flex-row mx-10 space-x-10">
                    <Image
                      alt=""
                      width={32}
                      height={32}
                      src="/img/Ajuster.svg"
                    />
                    <Image
                      alt=""
                      width={32}
                      height={32}
                      src="/img/Transferer.svg"
                    />
                    <Image
                      alt=""
                      width={32}
                      height={32}
                      src="/img/Solder.svg"
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
