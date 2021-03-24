import React,{useState} from 'react'
import './App.css';
import AlertDismissibleExample from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <AlertDismissibleExample  show={show} setShow={setShow}  msg='this is an alert'/>
      <MyBadge text="Random" color="red"/>
      <SingleBook />
    </div>
  );
}

export default App;
