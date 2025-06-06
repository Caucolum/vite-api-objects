import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import HelloPage from './pages/hello';
import DataPage from './pages/data';
import './App.css';

type RendererProps<T> = {
  Component: React.ComponentType<T>;
};

const Renderer = <T,>({ Component }: RendererProps<T>) => {
  const { state } = useLocation();

  //@ts-ignore
  return <Component {...(state as T)} />;
};

function withStateProps<T>(Component: React.ComponentType<T>) {
  return <Renderer Component={Component} />;
}

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={withStateProps(DataPage)} />
      <Route path="/data" element={withStateProps(HelloPage)} />
    </Routes>
  </BrowserRouter>
}

export default App;