import React from "react";
import { FaStar } from "react-icons/fa";

const Hotel = ({ hotel }) => {
  const { img, name, rating, totalRating, price, Acom } = hotel;
  return (
    <div className="max-w-lg ml-5 mb-5 p-4 sm:flex sm:space-x-6 rounded-lg bg-gray-900 text-gray-100">
      <div className="flex-shrink-0 w-full h-full sm:h-32 sm:w-32 sm:mb-0">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full h-full rounded bg-gray-500"
        />
      </div>
      <div className="flex flex-col w-full space-y-4 peer-focus-visible:w-full">
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <span className="text-sm text-gray-400">{Acom}</span>
        </div>
        <div className="flex justify-between">
            <div className="flex items-center">
                <FaStar className="text-orange-400"></FaStar>
                <p className="ml-2">{rating}</p>
                <span className="ml-2">({totalRating})</span>
            </div>
            <p>${price}/night</p>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
