import React, { useEffect, useState } from 'react'
import { MENU_URL } from './constants';

function useRestaurantMenu(resId) {

    const [ resInfo , setResInfo ]= useState(null);

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async () => {
        try {
            
            const response = await fetch(MENU_URL + resId);
            const json = await response.json();
            
            setResInfo(json);

        } 
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    return resInfo;
}

export default useRestaurantMenu;