"use client";
import { useState } from "react";
import Modal from "./components/Modal";
import WorkflowIdForm from "./components/WorkflowIdForm";
export default function Home() {
  const [sum, setSum] = useState(0);
  const [dates, setDates] = useState([]);
  return (
    <main>
      <div>
        <WorkflowIdForm setSum={setSum} setDates={setDates} />
        <Modal dates={dates} sum={sum} />
      </div>
    </main>
  );
}
