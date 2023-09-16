import React from "react";
import StudentsList from "./StudentsContext";

export default function Context({ children }) {
  return (
    <React.Fragment>
      <StudentsList>{children}</StudentsList>
    </React.Fragment>
  );
}
