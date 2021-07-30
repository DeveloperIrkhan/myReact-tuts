import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { EmployeeRecord } from './Pages/EmployeeRecord';
import { Guest } from './Pages/Guest';
function App() {
  return (
    <div className="App">
      {/* <Guest/> */}
      <EmployeeRecord/>
    </div>

  );
}

export default App;
