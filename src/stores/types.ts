export type TAddress = {
  cep: string;
  city: string;
  neighborhood: string;
  state: string;
  street: string;
};

export type TStoreAddress = {
  address: TAddress;
  setAddress: (address: TAddress) => void;
};

export type TStoreCep = {
  cep: string;
  setCep: (cep: string) => void;
};

export type TStoreLoading = {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
};
