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
    <button
      className='bg-blue-500 text-white border-none rounded-md p-3 font-medium w-full cursor-pointer hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-200 disabled:cursor-not-allowed transition-colors'
      {...rest}
    >
      {children ? children : label}
    </button>
  );
}
