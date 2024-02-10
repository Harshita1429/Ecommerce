import { Route, Routes } from 'react-router';
import { CustomerRouters } from './Routers/CustomerRouters';

import { AdminRouters } from './Routers/AdminRouters';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
        <Route path='/admin/*' element={<AdminRouters />}></Route>
      </Routes>

    </div>
  );
}

export default App;
