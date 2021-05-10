import './App.css';
import TodoList from './components/TodoList';

function App() {

  const todayNew = new Date();
  const todayDay = todayNew.getDay();
  const todayDate = todayNew.getDate();
  const todayMonth = todayNew.getMonth();
  const todayYear = todayNew.getFullYear();

  let todayDayStr = '';

  switch(todayDay) {
    case 0:
      todayDayStr = 'Sun';
      break;
    case 1:
      todayDayStr = 'Mon';
      break;
    case 2:
      todayDayStr = 'Tue';
      break;
    case 3:
      todayDayStr = 'Wed';
      break;
    case 4:
      todayDayStr = 'Thu';
      break;
    case 5:
      todayDayStr = 'Fri';
      break;
    case 6:
      todayDayStr = 'Sat';
      break;
    default:
      break;
  }
  
  let todayMonthStr = '';

  switch(todayMonth) {
    case 0:
      todayMonthStr = 'Jan';
      break;
    case 1:
      todayMonthStr = 'Feb';
      break;
    case 2:
      todayMonthStr = 'Mar';
      break;
    case 3:
      todayMonthStr = 'Apr';
      break;
    case 4:
      todayMonthStr = 'May';
      break;
    case 5:
      todayMonthStr = 'Jun';
      break;
    case 6:
      todayMonthStr = 'Jul';
      break;
    case 7:
      todayMonthStr = 'Aug';
      break;
    case 8:
      todayMonthStr = 'Sep';
      break;
    case 9:
      todayMonthStr = 'Oct';
      break;
    case 10:
      todayMonthStr = 'Nov';
      break;
    case 11:
      todayMonthStr = 'Dec';
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <h1 className="appTitle">To-Do List</h1>
      <h3 className="appTitle">{`${todayDayStr} ${todayMonthStr} ${todayDate}, ${todayYear}`}</h3>
      <TodoList />
    </div>
  );
}

export default App;
