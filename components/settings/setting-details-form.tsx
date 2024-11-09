import React, { useState } from "react";

type ErrorsType = Record<keyof "search", string>;

export default function SettingDetailsForm() {
  const [errors, setErrors] = useState<ErrorsType>({} as ErrorsType);

  return (
    <div>
      <form>Setting</form>
    </div>
  );
}
