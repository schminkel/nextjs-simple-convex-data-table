/* eslint-disable react/prop-types */

"use client";
import { useEffect, useState } from "react";

import { InputCell } from "@/components/ui/input-cell";

const EditableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <InputCell
      value={value}
      onBlur={onBlur}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
export default EditableCell;
