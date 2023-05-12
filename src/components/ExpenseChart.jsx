import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../context/UseGlobalState';

const ExpenseChart = () => {
  const { transactions } = useGlobalState();

  const totalIncome = transactions.reduce(
    (acc, transaction) =>
      (acc += transaction.amount > 0 ? transaction.amount : 0),
    0
  );

  const totalExpense =
    transactions.reduce(
      (acc, transaction) =>
        (acc += transaction.amount < 0 ? transaction.amount : 0),
      0
    ) * -1;

  const totalExpensesPercentage = Math.round(
    (totalExpense / totalIncome) * 100
  );

  const totalIncomePercentage = Math.round((totalIncome / totalExpense) * 100);

  return (
    <VictoryPie
      colorScale={['#e74c3c', '#2ecc71']}
      data={[
        { x: 'Expenses', y: totalExpensesPercentage },
        { x: 'Incomes', y: totalIncomePercentage },
      ]}
      animate={{ duration: 200 }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: 'white' }} />}
    />
  );
};

export default ExpenseChart;
