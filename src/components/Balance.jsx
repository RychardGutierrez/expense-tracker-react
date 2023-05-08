import { useGlobalState } from '../context/UseGlobalState';

const Balance = () => {
  const data = useGlobalState();
  
  return (
    <div>
      Balance
      <p> {JSON.stringify(data)} </p>
    </div>
  );
};

export default Balance;
