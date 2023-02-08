import React from 'react';
import Blog from './Blog';
import Header from './Header';
import SideBar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
      <Blog/>
    </div>
  );
}

export default App;
