import React from 'react';
import { Footer, Header } from '../Components/Layout';
import { useState,useEffect } from 'react';
import { menuItemModel } from '../Interface';


function App() {
  const [menuItems,setMenuItems] = useState<menuItemModel[]>([])
  useEffect(() => {
    fetch("https://localhost:44307/api/MenuItem")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setMenuItems(data);
    })
  },[])
  return (
    <div className="text-primary">
       <Header/>
          Main Component
       <Footer/>
    </div>
  );
}

export default App;
