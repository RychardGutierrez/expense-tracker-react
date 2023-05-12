import { GlobalProvider } from './context/GlobalState';

import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import ExpenseChart from './components/ExpenseChart';

const App = () => {
  return (
    <GlobalProvider>
      <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
        <div className='container mx-auto w-3/6 flex justify-center items-center flex-col'>
          <h1 className='text-5xl font-bold my-5'>Expense Tracker</h1>
          <div className='bg-zinc-800 p-10 rounded-lg flex gap-8'>
            <div>
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col'>
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
