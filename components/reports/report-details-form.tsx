import React, { useState } from "react";

type ErrorsType = Record<keyof "search", string>;

export default function ReportDetailsForm() {
  const [errors, setErrors] = useState<ErrorsType>({} as ErrorsType);

  return (
    <div>
      <form>Report</form>
    </div>
  );
}
