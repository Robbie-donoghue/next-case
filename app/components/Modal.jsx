"use client";
import { useEffect } from "react";

export default function Modal({ dates, sum, open, onClose }) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          X
        </button>
        <div>
          <h1 className="text-2xl font-bold mb-4">Data</h1>
          <h2 className="text-lg mb-2">Total Cost:</h2>
          <h3 className="text-lg mb-2">{sum}</h3>
          <h4 className="text-base mb-2">Dates:</h4>
          <ul className="list-disc pl-4">
            {dates.map((date, index) => (
              <li key={index} className="mb-1">
                {date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
// use state variables to display the modal
// use tailwind // https://tailwindcss.com/docs/display
// figure out how to toggle classList on react.
// write a modal component that's hidden (invisiable) by default then when the user submits it becomes visable
// add a close button.
// add an even listerner to the document body
// so when you click somewhere on the page that isn't the modal it closes it.
