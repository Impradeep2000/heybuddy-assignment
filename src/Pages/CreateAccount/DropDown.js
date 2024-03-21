import React, { useState } from 'react';
import './styles.css'; 

const DateDropdown = () => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const daysOptions = [];
  for (let i = 1; i <= 31; i++) {
    daysOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const monthsOptions = [];
  for (let i = 1; i <= 12; i++) {
    monthsOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const currentYear = new Date().getFullYear();
  const yearsOptions = [];
  for (let i = currentYear - 100; i <= currentYear; i++) {
    yearsOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="date-dropdown-container">
      <select className="date-dropdown" value={month} onChange={handleMonthChange}>
        <option value="">Month</option>
        {monthsOptions}
      </select>
      <select className="date-dropdown" value={day} onChange={handleDayChange}>
        <option value="">Day</option>
        {daysOptions}
      </select>
      <select className="date-dropdown" value={year} onChange={handleYearChange}>
        <option value="">Year</option>
        {yearsOptions}
      </select>
    </div>
  );
};

export default DateDropdown;
