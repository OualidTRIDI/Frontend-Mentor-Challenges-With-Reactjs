import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import InteractiveRatingComponent from './challenges/interactive-rating-component-main';

function App() {

  const challengesInfo = [
    {
      name: 'Interactive rating component',
      url: "/interactive-rating-component"
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home challengesInfo={challengesInfo} />} />
        <Route path={challengesInfo[0].url} element={<InteractiveRatingComponent challenge={challengesInfo[0]} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
