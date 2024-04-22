import { Route, Routes } from 'react-router-dom';
import './style/App.css';
import { Suspense, lazy } from 'react';
import Loading from '../components/Loading/Loading';

const MainPageLazy = lazy(() => import('../pages/MainPage/MainPage'));
const DetailCardsLazy = lazy(() => import('../components/Cards/DetailCards'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="testMTK/" element={<MainPageLazy />} />
        <Route path="testMTK/:id" element={<DetailCardsLazy />} />
      </Routes>
    </Suspense>
  );
}

export default App;
