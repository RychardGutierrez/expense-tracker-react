const TransactionItem = ({ id, description, amount, handleDelete }) => {
  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'>
      <p className='text-sm'>{description}</p>
      <div className='flex justify-between gap-2'>
        <span>${amount}</span>
        <button
          onClick={() => handleDelete(id)}
          className='bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-0 px-1 border border-white hover:border-transparent rounded'
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
