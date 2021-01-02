import './styles.css';
import { ISpinner } from './interface';

export default function Spinner({ isLoading }: ISpinner) {
  return (
    <>
      {isLoading && (
        <div className='spinner' aria-label='loader'>
          <svg className='svg' viewBox='0 0 50 50'>
            <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
          </svg>
        </div>
      )}
    </>
  );
}
