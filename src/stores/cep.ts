import create from 'zustand';

import { TStoreCep } from './types';

export const useStoreCep = create<TStoreCep>((set) => ({
  cep: '20541145',
  setCep: (newCep: string) => set(() => ({ cep: newCep })),
}));
