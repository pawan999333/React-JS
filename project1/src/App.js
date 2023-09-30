import ExpenseItem from "./components/ExpenseItem";

function App() {

  let expenses = [
    {
      title: "Food",
      date: new Date(2023, 9, 17),
      amount: 200,
    },

    {
      title: "Shopping",
      date: new Date(2023, 9, 7),
      amount: 600,
    },

    {
      title: "Home",
      date: new Date(2023, 9, 21),
      amount: 700,
    },

    {
      title: "Travling",
      date: new Date(2023, 7, 11),
      amount: 900,
    },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      >
      </ExpenseItem>

      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      >
      </ExpenseItem>

      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      >
      </ExpenseItem>

      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      >
      </ExpenseItem>
    </div>
  );
}

export default App;
