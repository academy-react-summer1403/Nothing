import PageEnation from "../../components/PageEnation/PageEnation";

const RegisterStep3 = ()=> {
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
          <div className="w-[80%] h-[90%] flex flex-col items-center justify-center gap-[20px]">
            <div className="w-[100%] h-[120px]">
              <h1 className="text-[#161439] text-[40px]">ایمیل و پسورد خود را وارد کنید</h1>
            </div>
            <div className="w-[100%] h-[200px]"></div>
            <div>
              <PageEnation index={3} />
            </div>
          </div>
        </div>
      );
}

export default RegisterStep3;