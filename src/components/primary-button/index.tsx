// import React from "react"

import "./index.css";

interface PrimaryButtonProps {
  label?: string;
  children?: React.ReactNode;
}

export default function PrimaryButton({
  label,
  children,
  ...rest
}: PrimaryButtonProps & React.ComponentPropsWithRef<"button">) {
  return (
    <button className='primary-button' {...rest}>
      {children ? children : label}
    </button>
  );
}
