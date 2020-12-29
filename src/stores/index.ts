import create from 'zustand';

import { TAddress, TStore } from './types';
const CEP_DEFAULT = '20541145';

export const useStore = create<TStore>((set) => ({
  address: {
    cep: CEP_DEFAULT,
    city: 'Rio de Janeiro',
    neighborhood: 'Andaraí',
    state: 'RJ',
    street: 'Rua Uruguai',
  },
  cep: CEP_DEFAULT,
  loading: false,
  setAddress: async (newAddress: TAddress) => {
    set(() => ({
      address: {
        cep: newAddress.cep,
        city: newAddress.city,
        neighborhood: newAddress.neighborhood,
        state: newAddress.state,
        street: newAddress.street,
      },
    }));
  },
  setCep: (newCep: string) => set(() => ({ cep: newCep })),
  setLoading: (isLoading: boolean) => set(() => ({ loading: isLoading })),
}));
