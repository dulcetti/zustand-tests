export type TAddress = {
  cep: string;
  city: string;
  neighborhood: string;
  state: string;
  street: string;
};

export type TStore = {
  address: TAddress;
  cep: string;
  loading: boolean;
  setAddress: (address: TAddress) => void;
  setCep: (cep: string) => void;
  setLoading: (isLoading: boolean) => void;
};
