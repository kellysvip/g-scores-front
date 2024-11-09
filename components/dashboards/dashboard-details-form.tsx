import React, { useState } from 'react';


type ErrorsType = Record<keyof 'search', string>;

export default function DashboardDetailsForm() {
  const [errors, setErrors] = useState<ErrorsType>({} as ErrorsType);

  return (
    <div>
      <form>
        Dash board
      </form>
    </div>
  );
}
