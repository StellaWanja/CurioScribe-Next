import React from "react";

type InputProps = {
  type: string;
  id: string;
  label: string;
  value: string;
  onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ type, id, label, value, onChangeFn }: InputProps) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label htmlFor={id} className="text-lg">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChangeFn}
        placeholder={label}
        className="input rounded-md p-2"
        required
      />
    </div>
  );
}

export default Input;
