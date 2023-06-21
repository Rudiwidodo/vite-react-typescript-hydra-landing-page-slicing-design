import ProcessProps from '../interface/process-interface';

export default function ProcessCard({ ...props }: ProcessProps) {
  return (
    <>
      <div className={`flex flex-col items-center ${props.hidden}`}>
        <div className="bg-process-bg-icon-1 bg-no-repeat bg-cover h-44 w-44 p-2">
          <div className="bg-process-bg-icon-2 bg-no-repeat bg-cover h-40 w-40 flex justify-center items-center">
            <h3 className="text-6xl font-montserrat-bold text-primary">
              {props.process}
            </h3>
          </div>
        </div>
        <button type="button" className="flex mt-6">
          <img
            src={props.path}
            alt="hydra arrow small right icon"
            className="h-16 w-16 max-md:hidden"
          />
          <p className="text-2xl text-white font-montserrat-bold w-[187px]">
            {props.title}
          </p>
        </button>
      </div>
    </>
  );
}
