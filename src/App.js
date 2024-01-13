import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import React from 'react';

//Challenges
import InteractiveRatingComponent from './challenges/interactive-rating-component-main';
import OrderSummaryComponent from './challenges/order-summary-component-main';
import IntroComponentWithSignupForm from './challenges/intro-component-with-signup-form-master';
import BlogPreviewCardMain from './challenges/blog-preview-card-main';

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
    },
    {
      element: {
        type: IntroComponentWithSignupForm
      },
      info: {
        name: 'Intro component with sign-up form',
        url: "/intro-component-with-signup-form"
      }
    },
    {
      element: {
        type: BlogPreviewCardMain
      },
      info: {
        name: 'Blog preview card main',
        url: "/blog-preview-card-main"
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