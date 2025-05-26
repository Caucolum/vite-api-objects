import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApiProvider, useApi } from './core/context';

import './App.css';
import DataPage from './pages/data';
import HelloPage from './pages/hello';

function App() {
  const { client: { imagesList } } = useApi();
  const { makeRequest, data } = imagesList();

  return <ApiProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataPage makeRequest={makeRequest} />} />
        <Route path='/data' element={<HelloPage data={data}/>} />
      </Routes>
    </BrowserRouter>
  </ApiProvider>
}

export default App;