import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotels from './pages/hotel/Hotels';
import List from './pages/list/List';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels' element={<List />} />
      <Route path='/hotels/:id' element={<Hotels />} />
     </Routes>
    </div>
  );
}

export default App;
