import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import InteractiveRatingComponent from './challenges/interactive-rating-component-main';
import OrderSummaryComponent from './challenges/order-summary-component-main';
import React from 'react';

function App() {

  const challengesInfo = [
    {
      element: {
        type: InteractiveRatingComponent
      },
      info: {
        name: 'Interactive rating component',
        url: "/interactive-rating-component"
      }
    },
    {
      element: {
        type: OrderSummaryComponent
      },
      info: {
        name: 'Order summary component',
        url: "/order-summary-component"
      }
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home challengesInfo={challengesInfo} />} />


        {
          challengesInfo.map(
            (challenge, index) =>
              <Route
                key={index}
                path={challenge.info.url}
                element={
                  React.createElement(challenge.element.type,
                    {
                      challenge: {
                        name: challenge.info.name,
                      }
                    })
                }
              />
          )
        }

      </Routes>
    </BrowserRouter>
  );
}

export default App;