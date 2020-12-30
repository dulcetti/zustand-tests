import create from 'zustand';

import { TStoreLoading } from './types';

export const useStoreLoading = create<TStoreLoading>((set) => ({
  loading: false,
  setLoading: (isLoading: boolean) => set(() => ({ loading: isLoading })),
}));
