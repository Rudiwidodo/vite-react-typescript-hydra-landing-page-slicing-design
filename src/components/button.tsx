import ButtonProps from '../interface/button-interface';

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
