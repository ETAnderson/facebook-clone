import React from 'react';
import './App.css';
import Login from './Login';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets';


function App() {
  // eslint-disable-next-line
  const  [{ user }, dispatch] = useStateValue();
  return (
    // BEM naming convention
    <div className="app">
      {!user ?  (
        <Login />
      ) : (
        <>
        <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
        )}
    </div>
  );
}

export default App;
