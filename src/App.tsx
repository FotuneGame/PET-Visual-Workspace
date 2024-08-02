import React from 'react';
import "./App.scss";

import { Outlet} from "react-router-dom";
import { Navbar, Footer} from '@widgets';

function App() {
  return (
    <div>
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
        <Footer />
    </div>
  );
}

export default App;
