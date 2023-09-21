import React from 'react';
import { Route } from 'react-router-dom';
import StorePage from './Pages/StorePage';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import MainHeader from './Links/MainHeader';
import ContactPage from './Pages/ContactPage';

const App=()=>{

  // const router=createBrowserRouter([
  //   {path:'/',element:<Root/>,children:[
  //     {path:'/About',element:<AboutPage />},
  //      {path:'/Store',element:<StorePage />},
  //      {path:'/',element:<HomePage />},
  //   ]}


  //    ])
  return (
    //<RouterProvider router={router}/>
    <div>
      <MainHeader/>
      <main>
        <Route path="/home">
          <HomePage/>
        </Route>
        <Route path="/store">
          <StorePage/>
        </Route>
        <Route path="/about">
          <AboutPage/>
        </Route>
        <Route path="/contact">
          <ContactPage/>
        </Route>
      </main>
    </div>
  );
};

export default App;