interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  ring?: string;
  textColor: string;
  textSize: string;
  height: string;
  width: string;
}

export default function Button({ ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={`${props.ring} ${props.textColor} rounded-full ${props.bgColor} ${props.textSize} ${props.width} ${props.height} font-montserrat-bold`}
    >
      {props.children}
    </button>
  );
}
