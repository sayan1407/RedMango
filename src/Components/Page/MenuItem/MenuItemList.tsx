import React from 'react'
import { useState,useEffect } from 'react';
import { menuItemModel } from '../../../Interface';
import MenuItemCard from './MenuItemCard';

function MenuItemList() {
    const [menuItems,setMenuItems] = useState<menuItemModel[]>([])
  useEffect(() => {
    fetch("https://localhost:44307/api/MenuItem")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setMenuItems(data.result);
    })
  },[])
  console.log(menuItems.length)
  return (
    
    <div>
        
        {menuItems.length > 0 && menuItems.map((menuItem,index) => (
              <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  )
}

export default MenuItemList