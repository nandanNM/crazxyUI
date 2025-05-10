import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-fit pt-10">
      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={date => {
            setSelectedDate(date);
            setIsOpen(false);
          }}
          dateFormat="dd-MM-yyyy"
          placeholderText="Select a date"
          className="border-2 border-black px-2 py-2 text-sm rounded-xl w-64"
          open={isOpen}
          onClickOutside={() => setIsOpen(false)}
          onSelect={() => setIsOpen(false)}
          readOnly
        />
        <SlCalender
          onClick={() => setIsOpen(prev => !prev)} // Toggle calendar
          className="absolute top-2 right-4 size-5 text-black cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
