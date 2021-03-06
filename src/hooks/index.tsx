import React, { useState, useContext } from "react";
import { ColorContext } from "../contexts/ColorProvider";

type UseInputReturnType = [
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  },
  () => void
];

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  // return object to pass in the input as props and function to set to the initialValue.
  const result: UseInputReturnType = [
    {
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];

  return result;
};

export const useColors = () => useContext(ColorContext);

