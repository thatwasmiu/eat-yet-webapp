import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import FoodMenuPage from './module/menu/page/menu.page';
import LayoutPage from './component/LayoutPage.component';
import MenuRouting from './module/MenuRouting.config';

const App: React.FC = () => {
  
  return (
    <Routes>
      <Route path="/*" element={<LayoutPage Page={<MenuRouting />}/>} /> 
    
    {/* <Route path="/login" element={<LoginPage />} /> */}
    {/* <Route path="/register" element={<RegisterPage />} /> */} 
    </Routes>
  );
};

export default App;