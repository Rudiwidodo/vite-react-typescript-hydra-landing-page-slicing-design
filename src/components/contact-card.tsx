import ContactProps from '../interface/contact-interface';

export default function ContactCard({ ...props }: ContactProps) {
  return (
    <>
      <div className={`flex items-center justify-center`}>
        <img
          src={props.path}
          alt={props.alt}
          className="w-[70px] h-[70px] mr-1"
        />
        {props.children}
      </div>
    </>
  );
}
