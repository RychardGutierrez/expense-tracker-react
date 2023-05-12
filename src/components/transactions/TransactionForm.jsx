import { useState } from 'react';
import { useGlobalState } from '../../context/UseGlobalState';

const TransactionForm = () => {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({ id: window.crypto.randomUUID(), description, amount });
    setAmount(0);
    setDescription('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter a Description'
          onChange={handleDescription}
          className='bg-zinc-600 text-white px-3  py-2 rounded-lg block mb-2 w-full'
          value={description}
        />
        <input
          type='number'
          step='0.01'
          placeholder='Enter a Amount'
          onChange={handleAmount}
          className='bg-zinc-600 text-white px-3  py-2 rounded-lg block mb-2 w-full'
          value={amount}
        />
        <button className='bg-indigo-700 text-white px-3 py-2 block mb-2 w-full rounded-lg'>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
