import { Link } from "react-router-dom";


const Eorror = () => {
    return (
        <div className="w-[25%] mx-auto mt-[70px]">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="/imgs/false-2061131_1280.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title  text-center">NO Data Found!</h2>
    <Link to="/">
    
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Go Home</button>
    </div>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Eorror;