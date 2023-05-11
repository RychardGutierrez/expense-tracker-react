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
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter a Description'
          onChange={handleDescription}
        />
        <input
          type='number'
          step='0.01'
          placeholder='Enter a Amount'
          onChange={handleAmount}
        />
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
