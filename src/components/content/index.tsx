import './styles.css';
import { useStoreAddress } from '../../stores/address';
import { useStoreCep } from '../../stores/cep';

export default function Content() {
  const address = useStoreAddress((state) => state.address);
  const cep = useStoreCep((state) => state.cep);

  return (
    <main className='content'>
      <p>O CEP do state é esse: {cep}</p>
      <p>O endereço é esse:</p>
      <ul className='list'>
        <li>
          <strong>CEP:</strong> {address.cep}
        </li>
        <li>
          <strong>City:</strong> {address.city}
        </li>
        <li>
          <strong>Neighborhood:</strong> {address.neighborhood}
        </li>
        <li>
          <strong>State:</strong> {address.state}
        </li>
        <li>
          <strong>Street:</strong> {address.street}
        </li>
      </ul>
    </main>
  );
}
