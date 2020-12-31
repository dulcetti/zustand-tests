import { useForm } from 'react-hook-form';

import './styles.css';
import { ICep } from '../../services/address/interface';
import { IFormCep } from './interface';
import Button from '../button';
import { useStoreCep } from '../../stores/cep';

export default function FormCep({ buttonLabel }: IFormCep) {
  const [cep, setCep] = useStoreCep((state) => [state.cep, state.setCep]);
  const { errors, handleSubmit, register } = useForm();
  const onSubmit = (data: ICep) => {
    setCep(data.cep);
  };

  return (
    <form className='form-cep' onSubmit={handleSubmit(onSubmit)}>
      <label>
        Digite o CEP:
        <input
          aria-label='cep-input'
          className='input-text'
          defaultValue={cep}
          minLength={6}
          maxLength={8}
          name='cep'
          type='text'
          ref={register({ minLength: 8, required: true })}
        />
      </label>
      {errors.cep && <p className='error'>Required</p>}
      <Button label={buttonLabel} type='submit' />
    </form>
  );
}
