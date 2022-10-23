import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingPlaces = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  const booking = useLoaderData();
  const { name, desc } = booking;
  return (
    <div className="flex mx-10 items-center">
      <div className="px-8">
        <h1 className="text-3xl font-bold text-center mb-4 font-sans">{name}</h1>
        <p className="text-lg font-mono text-amber-700">{desc}</p>
      </div>
      <div>
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-6 py-4">
            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
              Booking
            </h2>
            <form>
              <div className="w-full mt-4">
                <label className="text-white" htmlFor="origin">Origin</label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="origin"
                  aria-label="origin"
                  required
                />
              </div>

              <div className="w-full mt-4">
              <label className="text-white" htmlFor="destination">Destination</label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  placeholder="destination"
                  defaultValue={name}
                  aria-label="destination"
                  required
                />
              </div>

              <div className="flex mt-2">
                <div className="mr-3">
                    <label className="text-white" htmlFor="from">From</label>
                <DatePicker placeholderText="mm/dd/yyyy" className="py-2 w-[150px] px-3 mt-2 text-white placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()}
                showYearDropdown scrollableMonthYearDropdown required></DatePicker>
                </div>
                <div>
                <label className="text-white" htmlFor="to">To</label>
                <DatePicker placeholderText="mm/dd/yyyy" className="py-2 w-[150px] px-3 mt-2 text-white placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" selected={endDate} onChange={date => setEndDate(date)} minDate={new Date()}
                showYearDropdown scrollableMonthYearDropdown required></DatePicker>
                </div>    
              </div>

              <div className="flex items-center justify-between mt-4">
                <Link className=" w-full" to='/hotels'><button
                  className="px-4 py-2 leading-5 w-full text-white transition-colors duration-300 transform bg-orange-400 hover:bg-orange-500 focus:outline-none"
                  type="button"
                >
                  Book Now
                </button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPlaces;
