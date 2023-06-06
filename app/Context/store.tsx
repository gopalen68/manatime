'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState
} from 'react';

type DataType = {
  firstName: string;
};

interface ContextProps {
  openForm: boolean;
  setOpenForm: Dispatch<SetStateAction<boolean>>;
  formData: DataType[];
  setFormData: Dispatch<SetStateAction<DataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  openForm: false,
  setOpenForm: (): boolean => false,
  formData: [],
  setFormData: (): DataType[] => []
});

export const GlobalContextProvider = ({ children }) => {
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState<[] | DataType[]>([]);

  return (
    <GlobalContext.Provider
      value={{ openForm, setOpenForm, formData, setFormData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
