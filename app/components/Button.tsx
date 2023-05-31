import React from 'react'
import clsx from "clsx"
type ButtonProps = {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    disabled?: boolean;
    danger?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    type, fullWidth, children, onClick, secondary, danger, disabled
}) => {
  return (
    <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(`
        flex
        justify-center
        rounded-md
        px-3
        py-2
        align-middle
        text-center
        text-sm
        font-semibold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
        `, 
        disabled && 'opacity-50 cursor-default',
        fullWidth && 'w-full',
        secondary ? 'text-gray-300 hover:bg-gray-300/10 border-gray-100' : 'text-white',
        danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
        !secondary && !danger && 'bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-600'
        )}
    >
        {children}
    </button>
  )
}

export default Button