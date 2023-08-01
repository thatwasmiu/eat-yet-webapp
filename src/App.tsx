import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import FoodMenuPage from './module/menu/page/menu.page';
import LayoutPage from './component/layout/LayoutPage.component';
import MenuRoute from './module/food/MenuRoute.config';
import IngredientRoute from './module/ingredient/IngredientRoute.config';
import MarketRoute from './module/market/MarketRoute.config';

const App: React.FC = () => {
  
  return (
    <Routes>
      <Route path='/' element={<LayoutPage />} /> 
      <Route path="/foods/*" element={<LayoutPage Page={<MenuRoute />}/>} /> 
      <Route path="/ingredients/*" element={<LayoutPage Page={<IngredientRoute />} />} />
      <Route path="/markets/*" element={<LayoutPage Page={<MarketRoute />} />} />
    {/* <Route path="/login" element={<LoginPage />} /> */}
    {/* <Route path="/register" element={<RegisterPage />} /> */} 
    </Routes>
  );
};

export default App;