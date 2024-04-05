import './App.css';
import Form from './pages/Form';
import InputContextprovider from './stor/InputContextprovider';

function App() {
  return (
    <>
    <InputContextprovider>
    <Form/>
    console.log(Form);
    </InputContextprovider>
    </>
  );
}

export default App;
