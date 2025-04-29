import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButton({ setCount, type, locked }) {
  const handleClick = () => {
    type === 'minus'
      ? setCount((prev) => (prev === 0 ? prev : prev - 1))
      : setCount((prev) => (prev === 5 ? prev : prev + 1));
  };
  return (
    <button className='count-btn' onClick={handleClick} disabled={locked}>
      {type === 'minus' ? (
        <MinusIcon className='count-btn-icon' />
      ) : (
        <PlusIcon className='count-btn-icon' />
      )}
    </button>
  );
}
