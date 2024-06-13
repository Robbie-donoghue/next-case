"use client";
import { useState } from "react";
import Modal from "./components/Modal";
import WorkflowIdForm from "./components/WorkflowIdForm";
export default function Home() {
  const [sum, setSum] = useState(0);
  const [dates, setDates] = useState([]);
  const [open, setOpen] = useState(false);
  return (
    <main>
      <div>
        <WorkflowIdForm setSum={setSum} setDates={setDates} setOpen={setOpen} />
        <Modal
          dates={dates}
          sum={sum}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </main>
  );
}
