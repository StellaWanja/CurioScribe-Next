import React from "react";

type InputProps = {
  type: string;
  id: string;
  label: string;
  value: string;
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

function Input({
  type,
  id,
  label,
  value,
  onChangeFn,
  required = false,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={id} className="text-lg text-darkgrey dark:text-white">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChangeFn}
        placeholder={label}
        className="input rounded-md p-2 dark:bg-white dark:border-2 dark:border-black text-darkgrey"
        required={required}
      />
    </div>
  );
}

export default Input;
