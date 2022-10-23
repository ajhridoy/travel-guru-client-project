import React from "react";
import { Link } from "react-router-dom";

const Destination = ({ destination }) => {
  const { img, name, id } = destination;
  return (
    <Link to={`/booking/${id}`}>
        <div className="max-w-xs p-2 rounded-md shadow-lg bg-gray-600 text-gray-50 relative">
        <img
            src={img}
            alt=""
            className="object-cover object-center w-full rounded-md h-96"
        />
        <div className="absolute bottom-10 ml-3">
            
            <h2 className="text-2xl font-bold tracking-wide hover:text-rose-500">
                {name}
            </h2>
            
        </div>
        </div>
    </Link>
  );
};

export default Destination;
