import React, { useState, useEffect } from "react";

const Calendar = ({ onDateSelect }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [calendarData, setCalendarData] = useState([]);

  const [selectedDate, setSelectedDate] = useState(today);

  useEffect(() => {
    updateCalendar(currentMonth, currentYear);
    // eslint-disable-next-line
  }, [currentMonth, currentYear,]);

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  const updateCalendar = (targetMonth, targetYear) => {
    const today = new Date();

    const firstDay = new Date(targetYear, targetMonth, 1);
    const daysInMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
    const startDay = firstDay.getDay();

    const calendarDays = [];

    for (let i = 0; i < startDay; i++) {
      calendarDays.push({
        date: "",
        isCurrentMonth: false,
        isDisabled: true,
      });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(targetYear, targetMonth, day);
      calendarDays.push({
        date: day,
        isCurrentMonth: true,
        isDisabled: dayDate < today && !isSameDate(dayDate, today),
      });
    }

    setCalendarData(calendarDays);
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Helper function to compare two dates for equality
  function isSameDate(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  return (
    <>
      <section>
        <div className="calendar mx-auto">
          <div className="calendar-header flex justify-between bg-slate-950 text-white px-4 py-2 md:text-xl border-b">
            <button onClick={prevMonth}>Previous</button>
            <h2>{`${months[currentMonth]} ${currentYear}`}</h2>
            <button onClick={nextMonth}>Next</button>
          </div>
          <div className="grid grid-cols-7 text-center bg-black text-white md:text-xl text-sm font-bold w-full">
            {weekdays.map((day, index) => {
              return (
                <div className="md:ms-5 ms-2 py-2" key={index}>
                  {day}
                </div>
              );
            })}
          </div>

          <div className="calendar-grid grid grid-cols-7">
            {calendarData.map((day, index) => (
              <div
                key={index}
                className={`cursor-pointer calendar-day md:px-1 md:py-6 grid place-content-center border ${day.isDisabled ? "disabled text-gray-400" : ""
                  } ${day.isCurrentMonth ? "" : "prev-day"
                  } ${selectedDate &&
                    selectedDate.getDate() === day.date &&
                    selectedDate.getMonth() === currentMonth &&
                    selectedDate.getFullYear() === currentYear &&
                    day.isCurrentMonth
                    ? "bg-green-600 text-white"
                    : ""
                  }`}
                onClick={() => {
                  if (!day.isDisabled && day.isCurrentMonth) {
                    selectDate(new Date(currentYear, currentMonth, day.date));
                    onDateSelect(
                      `${months[currentMonth]} ${day.date}, ${currentYear}`
                    );
                  }
                }}
              >
                {day.date}
              </div>
            ))}
          </div>
        </div>
        <div className="my-8">
        </div>
      </section>
    </>
  );
};

export default Calendar;
