import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useGlobalContext } from '../Context/store';

export default function Form({ addData }) {
  const { openForm, setOpenForm } = useGlobalContext();
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState({
    utilisateurs: null,
    categorie: null,
    periode: null,
    solde_actuel: null,
    solde_pris: null,
    solde_futur: null
  });

  const handleChange = (event, key) => {
    setErrorMessage('');
    let updatedValue = {};
    updatedValue = {
      [key]: event.target.value
    };
    setData(current => ({
      ...current,
      ...updatedValue
    }));
  };

  const addNewData = () => {
    Object.values(data).every(value => {
      if (value === null || value === undefined || value === '') {
        setErrorMessage('Please fill in all the fields.');
        return;
      } else {
        let temp_data = {
          id: `${data.utilisateurs}.${data.categorie}.${
            data.periode
          }.${Math.random()}`,
          utilisateurs: data.utilisateurs,
          categorie: data.categorie === 'true',
          periode: data.periode && data.periode.substring(0, 4),
          solde_actuel: data.solde_actuel,
          solde_pris: data.solde_pris,
          solde_futur: data.solde_futur
        };
        addData(temp_data);
        setOpenForm(false);
        setData({
          utilisateurs: null,
          categorie: null,
          periode: null,
          solde_actuel: null,
          solde_pris: null,
          solde_futur: null
        });
      }
    });
  };

  return (
    <Transition.Root show={openForm} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenForm}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all">
                <div className="sm:flex sm:items-start font-roboto">
                  <div className="mt-3 text-center">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Ajouter un solde
                    </Dialog.Title>
                    <div className="mt-2">
                      <form className="mt-11">
                        <div className="flex items-center space-x-9 mt-8">
                          <div className="w-full bg-white border rounded border-gray-200 py-2.5 px-3">
                            <select
                              className="text-sm text-gray-500 w-full focus:outline-none"
                              onChange={e => handleChange(e, 'utilisateurs')}
                            >
                              <option selected disabled value="">
                                Utilisateur
                              </option>
                              <option value="Darléne Menson Dujon">
                                Darléne Menson Dujon
                              </option>
                              <option value="Marlon Brandon">
                                Marlon Brandon
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="flex items-center space-x-9 mt-8">
                          <div className="w-full bg-white border rounded border-gray-200 py-2.5 px-3">
                            <select
                              className="text-sm text-gray-500 w-full focus:outline-none"
                              onChange={e => handleChange(e, 'categorie')}
                            >
                              <option selected disabled value="">
                                Catégorie
                              </option>
                              <option value="true">Congés payés</option>
                              <option value="false">RTT</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex items-center space-x-9 mt-8">
                          <input
                            placeholder="Période"
                            type="month"
                            className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                            onChange={e => handleChange(e, 'periode')}
                          />
                          <input
                            placeholder="Solde actuel"
                            type="number"
                            min={0}
                            className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                            onChange={e => handleChange(e, 'solde_actuel')}
                          />
                        </div>
                        <div className="flex items-center space-x-9 mt-8">
                          <input
                            placeholder="Solde pris"
                            type="number"
                            min={0}
                            className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                            onChange={e => handleChange(e, 'solde_pris')}
                          />
                          <input
                            placeholder="Solde futur"
                            type="number"
                            min={0}
                            className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                            onChange={e => handleChange(e, 'solde_futur')}
                          />
                        </div>
                      </form>
                      {errorMessage !== '' && (
                        <div className="p-4">
                          <p className="text-red-400 font-poppins text-sm">
                            {errorMessage && errorMessage}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-8 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => addNewData()}
                  >
                    Ajouter
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpenForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
