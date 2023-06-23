import ServiceProps from '../interface/service-interface';
import Button from './button';

export default function ServiceCrad({ ...props }: ServiceProps) {
  return (
    <>
      <div className="px-6 py-10 bg-gradient-to-b from-radial-two via-radial-one to-radial-two rounded-[40px] max-sm:w-4/5 max-sm:mx-auto max-[456px]:w-full">
        <div className="flex justify-center">
          <div className="bg-service-image bg-no-repeat bg-contain p-2 object-center">
            <img src={props.path} alt="peoples service images" />
          </div>
        </div>
        <div className="mt-5 text-center">
          <h5 className="text-2xl text-white font-montserrat-bold">
            {props.title}
          </h5>
          <hr className="mt-4 w-[154px] mx-auto" />
        </div>
        <div className="mt-6">{props.children}</div>
        <div className="flex justify-center mt-8">
          <Button
            textColor="text-primary"
            textSize="text-sm"
            height="h-[48px]"
            width="w-[154px]"
            bgColor="bg-gradient-to-r from-linear-one to-linear-two"
          >
            TRY IT NOW
          </Button>
        </div>
      </div>
    </>
  );
}
