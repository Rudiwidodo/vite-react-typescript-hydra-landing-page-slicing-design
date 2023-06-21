import SectionHeaderProps from '../interface/section-header-interface';

export default function SectionHeader({ ...props }: SectionHeaderProps) {
  return (
    <>
      <div className="col-span-6 max-md:col-span-full">
        <div>
          <h3 className="text-4xl font-montserrat-bold text-white max-md:text-center">
            {props.title}
          </h3>
          <div className="flex items-center gap-7 max-md:justify-center">
            <span className="text-4xl text-slate-300 font-light">
              {props.subtitle}
            </span>
            <a href="#" className="max-md:hidden">
              <img
                src={props.path}
                alt="heydra arrow right large icon"
                className="h-12 w-56"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-6 max-md:hidden">
        <p className="text-sm text-white font-light">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>
    </>
  );
}
