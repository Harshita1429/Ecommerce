import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import { CustomerRouters } from './Routers/CustomerRouters';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
