import AboutProps from '../interface/about-interface';
import Button from './button';

export default function AboutContent({ ...props }: AboutProps) {
  return (
    <>
      <div className="col-span-6 max-md:col-span-full">
        <img
          src={props.path1}
          alt="heydra about image"
          className="relative max-md:w-4/5 max-md:mx-auto max-sm:min-w-full"
        />
        <img
          src={props.path2}
          alt="heydra image vector about"
          className="absolute top-1/3 max-md:hidden"
        />
        <img
          src={props.path3}
          alt="heydra image vector about"
          className="absolute top-3/4 max-md:hidden"
        />
      </div>
      <div className="col-span-6 flex flex-col justify-center max-md:col-span-full max-md:items-center">
        <h3 className="text-4xl text-white font-montserrat-bold max-md:hidden">
          {props.title}
        </h3>
        <small className="text-4xl font-light text-slate-300 max-md:hidden">
          {props.subtitle}
        </small>
        <div className="mt-10 mb-7 max-md:mt-0">
          <p className="text-sm text-white font-light">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
        </div>
        <Button
          textColor="text-primary"
          bgColor="bg-gradient-to-r from-linear-two to-linear-one"
          textSize="text-xs"
          height="h-[48px]"
          width="w-[214px]"
        >
          LET'S GET IN TOUCH
        </Button>
      </div>
    </>
  );
}
