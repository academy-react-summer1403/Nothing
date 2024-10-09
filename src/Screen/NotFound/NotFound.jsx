import { Link } from "react-router-dom";
import NotFoundLogo from "../../components/Icons/NotFound-Logo";

const NotFound = () => {
  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%] h-[150px] bg-[#E1E1E1] flex flex-col justify-center items-center">
        <div>
          <h1 className="text-[40px] text-[#161439] font-bold">صفحه خطا</h1>
        </div>
        <div className="flex justify-center items-center gap-[5px]">
          <Link to="/">صفحه اصلی</Link>
          <div className="pt-[7px]">
          <span> > </span>
          </div>
          <Link to="/*">صفحه خطا</Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[25px] pt-[25px] pb-[25px]">
        <div className="w-[650px] h-[320px]">
          <NotFoundLogo />
        </div>
        <div>
          <h1 className="text-[40px] text-[#161439] font-bold">صفحه خطا</h1>
          <h1 className="text-[40px] text-[#161439] font-bold">
            متاسفم! این صفحه در دسترس نیست!
          </h1>
        </div>
        <div>
          <button className="bg-[#5751E1] text-[#fff] rounded-[50px] w-[230px] h-[50px]">
            به صفحه اصلی بروید
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
