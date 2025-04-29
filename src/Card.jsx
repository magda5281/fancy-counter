import { useEffect, useState } from 'react';
import Count from './Count';
import ButtonContainer from './ButtonContainer';
import ResetButton from './ResetButton';
import Title from './Title';
import CountButton from './CountButton';

export default function Card() {
  const [count, setCount] = useState(0);

  const limit = 5;
  const locked = count >= limit ? true : false;

  useEffect(() => {
    const handleKeydown = (e) => {
      console.log(e);
      if (e.code === 'Space') {
        e.preventDefault();
        locked ? setCount(limit) : setCount(count + 1);
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [count, locked]);

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton setCount={setCount} type='minus' locked={locked} />
        <CountButton setCount={setCount} type='plus' locked={locked} />
      </ButtonContainer>
    </div>
  );
}
