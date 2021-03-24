import React,{useState} from 'react'
import './App.css';
import AlertDismissibleExample from './components/WarningSign'
function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <AlertDismissibleExample  show={show} setShow={setShow}  msg='this is an alert'/>
    </div>
  );
}

export default App;
