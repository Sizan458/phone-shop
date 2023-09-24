import { useEffect, useState } from "react";

import FavoriteCart from "./FavoriteCart";


const Favorite = () => {
    const [favorite,setFavorite]=useState([])
    const [notFound,setNotFound]=useState(false)
    useEffect(() =>{
        const favoriteItem=  JSON.parse(localStorage.getItem('favorite'))
        if(favoriteItem){
            setFavorite(favoriteItem)
        }else{
setNotFound("No Data Available !")
        }
        
    },[])
    const handleRemove=() => {
        localStorage.clear()
        setFavorite([])
        setNotFound("No Data Available !")
    }
    
    return (
        <div>
{favorite.length>0 && <button onClick={handleRemove} className="px-5 bg-green-200 block mx-auto mb-3">Delete ALL Favorite</button>}
            {notFound?<p className="h-[50vh] flex justify-center items-center text-3xl">{notFound}</p>:
            <div className="grid grid-cols-2">
                {
                    favorite.map(phone=><FavoriteCart key={phone.id} phone={phone}></FavoriteCart>)
                }
                 <button  className="px-5 bg-green-200 block mx-auto mb-3">See More</button>
                </div>}
        </div>
    );
};

export default Favorite;