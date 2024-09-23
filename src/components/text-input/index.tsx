import React from "react";
import "./index.css";

export default function TextInput({
  type = "text",
  ...rest
}: React.ComponentPropsWithRef<"input">) {
  return <input type={type} {...rest} />;
}
