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
        <h1>dates:{dates}</h1>
        <h2>sum:{sum}</h2>
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
