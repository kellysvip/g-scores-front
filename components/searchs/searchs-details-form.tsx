import React, { useState } from "react";

type ErrorsType = Record<keyof "search", string>;

export default function SearchDetailsForm() {
  const [errors, setErrors] = useState<ErrorsType>({} as ErrorsType);

  return (
    <div>
      <form>Search</form>
    </div>
  );
}
