import './styles.css';
import logo from '../../assets/images/logo192.png';
import Button from '../button';
import getAddress from '../../services/address';
import { useStore } from '../../stores/index';

export default function Header() {
  const states = useStore();
  const cep = useStore((state) => state.cep);
  const address = useStore((state) => state.address);

  const getAddressResult = async () => {
    states.setLoading(true);
    await getAddress({ cep }).then((result) => {
      states.setCep(result.cep);
      states.setAddress(result);
      states.setLoading(false);
    });
  };

  return (
    <header className='header'>
      <img src={logo} className='logo' alt='logo' />
      <Button label='Update Content state' method={getAddressResult} />
    </header>
  );
}
