import { useEffect, useState } from "react";

import FavoriteCart from "./FavoriteCart";


const Favorite = () => {
    const [favorite,setFavorite]=useState([])
    const [notFound,setNotFound]=useState(false)
    const[isShow,setIsShow]=useState(false)
    const [total,setTotal]=useState()
    useEffect(() =>{
        const favoriteItem=  JSON.parse(localStorage.getItem('favorite'))
        if(favoriteItem){
            setFavorite(favoriteItem)
            const total=favoriteItem.reduce((perValue,currentItem)=>perValue+ currentItem.price,0)
            setTotal(total)
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
             <div>
             <div>
                    <h2 className="mt-8 mb-3">Total Price :{total}</h2>
                </div>
             </div>
            {notFound?<p className="h-[50vh] flex justify-center items-center text-3xl">{notFound}</p>:
            <div className="grid grid-cols-2 gap-2">
               
                {
                   isShow?  
                   favorite.map(phone=><FavoriteCart key={phone.id} phone={phone}></FavoriteCart>):
                   favorite.slice(0,4).map(phone=><FavoriteCart key={phone.id} phone={phone}></FavoriteCart>)
                }
                 
                 {favorite.length>4 &&  <button  onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto mb-3 mt-5">
                   {isShow?"See Less":"See More"}
                    </button> }
                 
                </div>
               
              
              
                }
               
        </div>
    );
};

export default Favorite;