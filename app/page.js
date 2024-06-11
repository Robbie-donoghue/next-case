"use client";
import { useState } from "react";
import Modal from "./components/Modal";
import WorkflowIdForm from "./components/WorkflowIdForm";
export default function Home() {
  return (
    <main>
      <div>
        <WorkflowIdForm />
      </div>
    </main>
  );
}
