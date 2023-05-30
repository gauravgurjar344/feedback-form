import logo from './logo.svg';
import './App.css';
import ParentForm from './components/ParentForm';

function App() {
  const mystyle = {
    color: "black",
    backgroundColor: "rgb(173,224,196)",
    padding: "10px",
    fontFamily: "Arial",
    width:'100%',height:'100%'
  };
  return (
  <>
  <div style={mystyle}>

  <ParentForm/>
  </div>
  </>
  );
}

export default App;
