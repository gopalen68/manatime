'use client';

import { useState } from 'react';
import Table from './components/Table';
import Form from './components/Form';

export type ManatimeDataProps = {
  id: number;
  utilisateurs: string;
  categorie: boolean;
  periode: string;
  solde_actuel: string;
  solde_pris: string;
  solde_futur: string;
};

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

export default function Home() {
  const [data, setData] = useState(ManatimeData);

  const addData = (newData: ManatimeDataProps) => {
    setData(current => [...current, newData]);
  };

  const removeData = (id: number) => {
    setData(current => current.filter(item => item.id !== id));
  };
  return (
    <div className="p-7 sm:ml-52">
      <div className="mt-14">
        <Table data={data} removeData={removeData} />
        <Form addData={addData} />
      </div>
    </div>
  );
}
