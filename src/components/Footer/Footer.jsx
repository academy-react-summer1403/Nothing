import AppleStoreLink from "../Icons/AppleStore-Link";
import FaceBookLogo from "../Icons/FaceBook-Logo";
import GooglePlayLink from "../Icons/GooglePlay-Link";
import InstagramLogo from "../Icons/Instagram-Logo";
import N1Logo from "../Icons/N1-Logo";
import WhatsAppLogo from "../Icons/WhatsApp-Logo";
import XLogo from "../Icons/X-Logo";
import YouTubeLogo from "../Icons/YouTube-Logo";

const Footer = () => {
  return (
    <div className="w-[100%] h-[580px]">
      <div className="w-[100%] h-[80%] bg-[#06042E] flex justify-center items-center gap-[20px]">
        <div className="w-[20%] h-[80%] pt-[25px]">
          <div className="flex items-center gap-[5px]">
            <div>
              <N1Logo />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#FFFFFF] text-[20px]">نامبر وان</h2>
              <span className="text-[#FFFFFF] text-[10px]">همیشه بهترین</span>
            </div>
          </div>
          <div className="w-[75%] text-[#B2BBCC] flex flex-col gap-[10px] mt-[25px]">
            <p>
              هنگامی که یک چاپگر ناشناخته گالی از را تایپ کرده و آن را درهم
              می‌زنید تا نمونه‌ای بسازد کتابت دارد.
            </p>
            <span>استان مازندران، علیوک، جاده فرح آباد، H3X7+5V3، ایران</span>
            <span>+98 9999999999</span>
          </div>
        </div>

        <div className="w-[20%] h-[80%] pt-[25px] flex flex-col gap-[10px]">
          <div>
            <h2 className="text-[#FFFFFF] text-[22px]">لینک های مفید</h2>
          </div>
          <div className="w-[40px] border-[4px] border-[#5751E1] rounded-[4px] mt-[5px] mb-[5px]"></div>
          <div>
            <ul className="flex flex-col gap-[15px]">
              <li>
                <p className="text-[#B2BBCC] text-[16px]">ارزش های ما</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[16px]">هیئت مشاوران ما</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[16px]">شرکای ما</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[16px]">شریک شدن</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[16px]">
                  در Future Learn کار کنید
                </p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[16px]">Quizlet Plus</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[20%] h-[80%] pt-[25px] flex flex-col gap-[10px]">
          <div>
            <h2 className="text-[#FFFFFF] text-[22px]">شرکت ما</h2>
          </div>
          <div className="w-[40px] border-[4px] border-[#5751E1] rounded-[4px] mt-[5px] mb-[5px]"></div>
          <div>
            <ul className="flex flex-col gap-[15px]">
              <li>
                <p className="text-[#B2BBCC] text-[16px]">با ما تماس بگیرید</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[16px]">معلم شوید</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[16px]">وبلاگ</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[16px]">مربی</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[16px]">مناسبت ها</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[20%] h-[80%] pt-[25px] flex flex-col gap-[10px]">
          <div>
            <h2 className="text-[#FFFFFF] text-[22px]">در تماس باشید</h2>
          </div>
          <div className="w-[40px] border-[4px] border-[#5751E1] rounded-[4px] mt-[5px] mb-[5px]"></div>
          <div className="w-[75%] flex flex-col gap-[20px]">
            <p className="text-[#B2BBCC] text-[16px]">
              هنگامی که یک چاپگر ناشناس گرفت نوع گالی و درهم
            </p>
            <ul className="flex gap-[10px]">
              <li className="w-[20px] h-[20px]">
                <YouTubeLogo />
              </li>
              <li className="w-[20px] h-[20px]">
                <InstagramLogo />
              </li>
              <li className="w-[20px] h-[20px]">
                <WhatsAppLogo />
              </li>
              <li className="w-[20px] h-[20px]">
                <XLogo />
              </li>
              <li className="w-[20px] h-[20px]">
                <FaceBookLogo />
              </li>
            </ul>
          </div>
          <div className="flex justify-start gap-[10px] mt-[30px]">
            <div className="w-[160px] h-[50px]">
              <AppleStoreLink />
            </div>
            <div className="w-[160px] h-[50px]">
              <GooglePlayLink />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[20%] bg-[#1C1A4A] pt-[40px]">
        <p className="text-center text-[#8C9AB4]">
          {" "}
          © تمامی حقوق این سایت متعلق به تیم نامبر وان می باشد.
        </p>
      </div>
    </div>
  );
};

export default Footer;
