import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import FoodMenuPage from './module/menu/page/menu.page';
import LayoutPage from './component/layout/LayoutPage.component';
import MenuRoute from './module/MenuRoute.config';
import IngredientRoute from './module/ingredient/IngredientRoute.config';

const App: React.FC = () => {
  
  return (
    <Routes>
      <Route path="/*" element={<LayoutPage Page={<MenuRoute />}/>} /> 
      <Route path="/ingredient/*" element={<LayoutPage Page={<IngredientRoute />} />} />
    {/* <Route path="/login" element={<LoginPage />} /> */}
    {/* <Route path="/register" element={<RegisterPage />} /> */} 
    </Routes>
  );
};

export default App;