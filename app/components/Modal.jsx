"use client";
import { useEffect } from "react";

export default function Modal({ dates, sum }) {
  return (
    <div>
      <h1>dates:{dates}</h1>
      <h2>sum:{sum}</h2>
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
