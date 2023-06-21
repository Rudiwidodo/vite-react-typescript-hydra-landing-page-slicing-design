import InputProps from '../interface/input-interface';

export default function Input({ ...props }: InputProps) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="w-full px-10 py-7 outline-none ring-2 ring-white bg-transparent rounded-full text-white max-sm:py-4 max-sm:px-7"
      name={props.name}
    />
  );
}
