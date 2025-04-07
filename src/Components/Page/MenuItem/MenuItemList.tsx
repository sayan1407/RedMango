import React from 'react'
import { useState,useEffect } from 'react';
import { menuItemModel } from '../../../Interface';
import MenuItemCard from './MenuItemCard';
import { useGetMenuItemsQuery } from '../../../Apis/MenuItemApi';
import { useDispatch } from 'react-redux';
import { setMenuItem } from '../../../Storage/Redux/menuItemSlice';
import { devToolsEnhancer } from '@reduxjs/toolkit/dist/devtoolsExtension';
import MainLoader from '../Common/MainLoader';

function MenuItemList() {
    //const [menuItems,setMenuItems] = useState<menuItemModel[]>([])
    const {data,isLoading} = useGetMenuItemsQuery(null);
    const dispatch = useDispatch();
  useEffect(() => {
    if(!isLoading)
    {
          dispatch(setMenuItem(data.result))
    }
    
    }
  ,[isLoading])
  if(isLoading){
    return (<div><MainLoader /></div>)
  }
 return (
   <div className='container row'>
        
        {data.result.length > 0 && data.result.map((menuItem : menuItemModel,index : number) => (
              <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  )
}

export default MenuItemList