import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { client } from './api-query-objects/factory';

import HelloPage from './pages/hello';
import DataPage from './pages/data';

import './App.css';

function App() {
  const { makeRequest, data } = client.imagesList();

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<DataPage makeRequest={makeRequest} />} />
      <Route path='/data' element={<HelloPage data={data}/>} />
    </Routes>
  </BrowserRouter>
}

export default App;