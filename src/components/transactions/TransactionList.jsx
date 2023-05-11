import { useGlobalState } from '../../context/UseGlobalState';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();
  const handleDelete = (id) => {
    deleteTransaction(id)
    console.log(id);
  };
  return (
    <div>
      {transactions.map(({ id, description, amount }) => (
        <div key={id}>
          <p>{description}</p>
          <span>{amount}</span>
          <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
