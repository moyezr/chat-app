"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const MessageInput: React.FC<MessageInputProps> = ({
  id,
  placeholder,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="text-white font-light py-2 px-4 bg-gray-900 w-full rounded-full focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;
