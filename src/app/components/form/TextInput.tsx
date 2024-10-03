export default function TextInput({
  type = "text",
  ...rest
}: React.ComponentPropsWithRef<"input">) {
  return (
    <input
      className='block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors'
      type={type}
      {...rest}
    />
  );
}
