import { useGlobalState } from '../context/UseGlobalState';

const IncomeExpenses = () => {
  const { transactions } = useGlobalState();
  console.log(transactions);
  const amounts = transactions.map(({ amount }) => Number(amount));
  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts
      .filter((amount) => amount <= 0)
      .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <>
      <div>
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p>{expense}</p>
      </div>
    </>
  );
};

export default IncomeExpenses;
