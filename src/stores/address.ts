import create from 'zustand';
import { persist } from 'zustand/middleware';

import { TAddress, TStoreAddress } from './types';

export const useStoreAddress = create<TStoreAddress>(
  persist(
    (set) => ({
      address: {
        cep: '20541145',
        city: 'Rio de Janeiro',
        neighborhood: 'Andaraí',
        state: 'RJ',
        street: 'Rua Uruguai',
      },
      setAddress: (newAddress: TAddress) => {
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
    }),
    {
      name: 'ADDRESS',
      storage: sessionStorage,
    }
  )
);
