interface ContactChildProps {
  path: string;
  alt: string;
  children: React.ReactNode;
}

export default function ContactChild({
  path,
  alt,
  children,
}: ContactChildProps) {
  return (
    <>
      <div className={`flex items-center justify-center`}>
        <img src={path} alt={alt} className="w-[70px] h-[70px] mr-1" />
        <p className="text-sm font-normal text-white sm:text-2xl sm:font-bold">
          {children}
        </p>
      </div>
    </>
  );
}
