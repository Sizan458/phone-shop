import { Link } from "react-router-dom";



const Phones = ({phone}) => {

  const{id,image,phone_name,brand_name,price,rating}=phone
  
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} className="h-[350px] mt-4 p-3" /></figure>
  <div className="card-body">
    <h2 className="text-2xl text-center">{phone_name}</h2>
    <h2 className="text-2xl text-center">{brand_name}</h2>
    <h2 className="text-2xl text-center">Price:{price}$</h2>
    <Link to={`/phones/${id}`}>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full bg-slate-400 ">Add to Favorite</button>
    </div>
    </Link>
  </div>
</div>
    </div>
  );
};

export default Phones;