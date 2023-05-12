import { useGlobalState } from '../context/UseGlobalState';

const Balance = () => {
  const { transactions } = useGlobalState();
  const amouns = transactions.map(({ amount }) => Number(amount));
  const total = amouns.reduce((acc, item) => (acc += item), 0);
  return (
    <div className='flex justify-between'>
      <h3>Your Balance: </h3>
      <h1 className='text-2xl font-bold'>{total}</h1>
    </div>
  );
};

export default Balance;
