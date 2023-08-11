import { useState } from "react";
import "./admin-add-word.css";
import { AdminWordForm } from "../admin-word-form/admin-word-form";

export function AdminAddWord() {
  return (
    <div className="admin-add-word-block">
      <AdminWordForm />
    </div>
  );
}
