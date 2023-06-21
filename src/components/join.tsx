import Button from './button';
import Input from './input';

export default function Join() {
  return (
    <section className="mt-28">
      <div className="bg-gradient-to-b from-radial-two via-radial-one to-radial-two rounded-[100px] flex justify-center items-center flex-col py-[90px] px-24 max-sm:px-5 max-sm:rounded-[40px] max-sm:py-11">
        <div className="text-center">
          <h3 className="text-4xl text-white font-montserrat-bold max-sm:text-2xl">
            JOIN HYDRA
          </h3>
          <hr className="w-[414px] mx-auto bg-gradient-to-r from-linear-two via-linear-one to-linear-two mt-7 max-sm:w-[114px] max-sm:mt-5" />
          <p className="text-4xl text-slate-300 font-light mt-5 max-sm:text-2xl">
            Let's Build <span className="max-sm:block">Your VR Experience</span>
          </p>
        </div>
        <div className="mt-14 w-full max-sm:mt-9">
          <form action="#" method="post">
            <div className="grid grid-cols-12 gap-[10px] max-md:mt-0 max-md:gap-0">
              <div className="col-span-6 max-md:col-span-full max-md:mt-5">
                <Input type="text" placeholder="First Name" name="firstName" />
              </div>
              <div className="col-span-6 max-md:col-span-full max-md:mt-5">
                <Input type="text" placeholder="Last Name" name="lastName" />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-[10px] mt-9 max-md:mt-0 max-md:gap-0">
              <div className="col-span-6 max-md:col-span-full max-md:mt-5">
                <Input type="email" placeholder="Email" name="email" />
              </div>
              <div className="col-span-6 max-md:col-span-full max-md:mt-5">
                <Input
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                />
              </div>
            </div>

            <div className="mt-9 max-md:mt-5">
              <Input type="text" placeholder="Subject" name="subject" />
            </div>

            <textarea
              cols={30}
              rows={3}
              className="w-full px-10 py-7 outline-none ring-2 ring-white bg-transparent rounded-[40px] mt-9 text-white max-md:mt-5"
              placeholder="Tell Us Something..."
            ></textarea>

            <div className="mt-12 text-center">
              <Button
                textColor="text-primary"
                textSize="text-xs"
                bgColor="bg-gradient-to-r from-linear-one to-linear-two"
                width="w-[214px]"
                height="h-[48px]"
              >
                SEND TO HYDRA
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
