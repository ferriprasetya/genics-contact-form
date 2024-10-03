interface LoadingProps {
  size?: number;
}
export default function Loading({ size = 20 }: LoadingProps) {
  return (
    <div
      className='border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin'
      style={{ width: size, height: size }}
    ></div>
  );
}
