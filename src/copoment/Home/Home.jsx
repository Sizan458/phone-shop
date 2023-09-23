import { useLoaderData } from "react-router-dom";
import Phones from "../phones/Phones";




const Home = () => {
  const phones=useLoaderData()
  
 
    return (
        <div>
          <h2>phone:{phones.length}</h2>
           <h2 className="text-center text-2xl mt-4 text-black">All Category Phones</h2> 
           <div className="grid grid-cols-3 gap-2 w-[80%] mx-auto mt-4">
            {
              phones.map(phone=><Phones key={phone.id} phone={phone}></Phones>)
            }
           </div>
        </div>
    );
};

export default Home;