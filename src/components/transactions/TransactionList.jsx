import { useGlobalState } from '../../context/UseGlobalState';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();
  const handleDelete = (id) => {
    deleteTransaction(id);
  };
  return (
    <div className='bg-zinc-900 p-4 my-2'>
      <h3 className='text-slate-300 text-xl font-bold my-2 text-center'>
        History
      </h3>
      <ul>
        {transactions.map(({ id, description, amount }) => (
          <TransactionItem
            id={id}
            description={description}
            amount={amount}
            handleDelete={handleDelete}
            key={id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
