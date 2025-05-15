import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { client } from './api-query-objects/factory';

import './App.css';

function App() {
  const { makeRequest, data, status } = client.imagesList();
  console.log(data, status === 'loaded');
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<>
        hello app
        <button onClick={makeRequest}>trigger</button>
      </>} />
      <Route path='/data' element={<>
        hello data
        {data && data.message}
      </>} />
    </Routes>
  </BrowserRouter>
}

export default App;