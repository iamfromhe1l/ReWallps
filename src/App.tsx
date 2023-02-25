import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import IPhone from './components/IPhone/IPhone';
import MacBook from './components/MacBook/MacBook';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<IPhone />} />
        <Route path='/macbook' element={<MacBook />} />
      </Routes>
    </>
  );
}

export default App;
