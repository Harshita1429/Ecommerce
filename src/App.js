import { Route, Routes } from 'react-router';
import { CustomerRouters } from './Routers/CustomerRouters';
import Footer from './customer/Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
