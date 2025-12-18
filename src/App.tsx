import React from 'react';
import Home from './pages/Home';
import './styles/app.css';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
       <ScrollToTop />  
      <div className='cont1'>
        <Home />
      </div>
    </>
  );
}

export default App;
