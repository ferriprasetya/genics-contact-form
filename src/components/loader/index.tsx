import "./index.css";

interface LoaderProps {
  size?: number;
}
export default function Loader({ size = 20 }: LoaderProps) {
  return <div className='loader' style={{ width: size, height: size }}></div>;
}
