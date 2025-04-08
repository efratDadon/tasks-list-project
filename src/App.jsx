import { MyHome } from './components/home'
import { TaskList} from './components/TaskList'

import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyHome />
        <TaskList />

    </header>
    </div>);
}
export default App;
