// import { ErrorMessage, Field, Form, Formik } from "formik";

import PageEnation from "../../components/PageEnation/PageEnation";

const RegisterStep1 = () => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center">
      <div className="w-[80%] h-[90%] flex flex-col items-center justify-center gap-[20px]">
        <div className="w-[100%] h-[120px]">
          <h1 className="text-[#161439] text-[40px]"> ثبت نام</h1>
          <p className="text-[#6D6C80] text-[20px]">
            جهت دریافت کد یک بار مصرف شماره تماس خود را وارد کنید
          </p>
        </div>
        <div className="w-[100%] h-[200px]"></div>
        <div>
          <PageEnation index={1} />
        </div>
      </div>
    </div>
  );
};

export default RegisterStep1;
