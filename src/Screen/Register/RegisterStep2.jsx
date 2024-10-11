import PageEnation from "../../components/PageEnation/PageEnation";

const RegisterStep2 = ()=> {
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
          <div className="w-[80%] h-[90%] flex flex-col items-center justify-center gap-[20px]">
            <div className="w-[100%] h-[120px]">
              <h1 className="text-[#161439] text-[40px]">دریافت کد</h1>
              <p className="text-[#6D6C80] text-[20px]">کدی که برای شما ارسال شد را اینجا وارد کنید</p>
            </div>
            <div className="w-[100%] h-[200px]"></div>
            <div>
              <PageEnation index={2} />
            </div>
          </div>
        </div>
      );
}

export default RegisterStep2;