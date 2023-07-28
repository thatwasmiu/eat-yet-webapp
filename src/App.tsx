import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import FoodMenuPage from './module/menu/page/menu.page';
import LayoutPage from './component/LayoutPage.component';
import MenuRouting from './module/MenuRouting.config';

const App: React.FC = () => {
 
  return (
    <Routes>
      <Route path="/*" element={<LayoutPage Page={<MenuRouting />}/>} /> 
      {/* <p>Tessssss Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium, ab repellat mollitia nihil aspernatur dolorem aliquid magnam earum saepe dolor iusto. Similique numquam dicta voluptas quasi error nam reiciendis!  </p> */}
        {/* <Route path="" element={<Home />} /> */}
        {/* <Route path="menu" element={<FoodMenuPage />} /> */}
    
    {/* <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
     */}
  </Routes>
  );
};

export default App;