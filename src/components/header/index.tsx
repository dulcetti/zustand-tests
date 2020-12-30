import './styles.css';
import logo from '../../assets/images/logo192.png';
import Button from '../button';
import getAddress from '../../services/address';
import { useStoreAddress } from '../../stores/address';
import { useStoreCep } from '../../stores/cep';
import { useStoreLoading } from '../../stores/loading';

export default function Header() {
  const [cep, setCep] = useStoreCep((state) => [state.cep, state.setCep]);
  const setAddress = useStoreAddress((state) => state.setAddress);
  const setLoading = useStoreLoading((state) => state.setLoading);

  const getAddressResult = async () => {
    setLoading(true);
    await getAddress({ cep }).then((result) => {
      setCep(result.cep);
      setAddress(result);
      setLoading(false);
    });
  };

  return (
    <header className='header'>
      <img src={logo} className='logo' alt='logo' />
      <Button label='Update Content state' method={getAddressResult} />
    </header>
  );
}
