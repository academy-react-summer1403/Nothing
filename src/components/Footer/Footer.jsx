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
    <div className="w-[100%] h-[380px] md:h-[450px] lg:h-[500px] xl:h-[580px]">
      <div className="w-[100%] h-[85%] bg-[#06042E] flex justify-center items-center gap-[20px]">
        <div className="w-[20%] h-[80%] pt-[25px]">
          <div className="flex items-center gap-[5px]">
            <div className="w-[20px] h-[20px] xs:w-[25px] xs:h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[40px] xl:h-[40px]">
              <N1Logo />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[#FFFFFF] text-[12px] xs:text-[14px] md:text-[17px] lg:text-[20px] xl:text-[24px] 2xl:text-[26px] font-bold">نامبر وان</h2>
              <span className="text-[#FFFFFF] text-[5px] xs:text-[7px] md:text-[10px] lg:text-[13px] xl:text-[17px]">همیشه بهترین</span>
            </div>
          </div>
          <div className="w-[75%] text-[#B2BBCC] flex flex-col gap-[10px] mt-[25px]">
            <p className="text-[9px] xs:text-[11px] md:text-[14px] lg:text-[17px] xl:text-[20px]">
              هنگامی که یک چاپگر ناشناخته گالی از را تایپ کرده و آن را درهم
              می‌زنید تا نمونه‌ای بسازد کتابت دارد.
            </p>
            <span className="text-[9px] xs:text-[10px] md:text-[13px] lg:text-[16px] xl:text-[18px]">استان مازندران، علیوک، جاده فرح آباد، H3X7+5V3، ایران</span>
            <span className="text-[7px] xs:text-[10px] md:text-[13px] lg:text-[16px] xl:text-[18px]">+98 9999999999</span>
          </div>
        </div>

        <div className="w-[20%] h-[80%] pt-[25px] flex flex-col gap-[10px]">
          <div>
            <h2 className="text-[#FFFFFF] text-[12px] xs:text-[16px] md:text-[19px] lg:text-[24px] font-bold">لینک های مفید</h2>
          </div>
          <div className="w-[40px] border-[1px] md:border-[3px] xl:border-[4px] border-[#5751E1] rounded-[4px] mt-[2px] mb-[2px] xl:mt-[5px] xl:mb-[5px]"></div>
          <div>
            <ul className="flex flex-col gap-[15px]">
              <li>
                <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">ارزش های ما</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">هیئت مشاوران ما</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">شرکای ما</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">شریک شدن</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[7px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">
                  در Future Learn کار کنید
                </p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">Quizlet Plus</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[20%] h-[80%] pt-[25px] flex flex-col gap-[10px]">
          <div>
            <h2 className="text-[#FFFFFF] text-[14px] xs:text-[16px] md:text-[19px] lg:text-[24px] font-bold">شرکت ما</h2>
          </div>
          <div className="w-[40px] border-[1px] md:border-[3px] xl:border-[4px] border-[#5751E1] rounded-[4px] mt-[2px] mb-[2px] xl:mt-[5px] xl:mb-[5px]"></div>
          <div>
            <ul className="flex flex-col gap-[15px]">
              <li>
                <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">با ما تماس بگیرید</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">معلم شوید</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">وبلاگ</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">مربی</p>
              </li>
              <li>
                <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">مناسبت ها</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[20%] h-[80%] pt-[25px] flex flex-col gap-[10px]">
          <div>
            <h2 className="text-[#FFFFFF] text-[12px] xs:text-[16px] md:text-[19px] lg:text-[24px] font-bold">در تماس باشید</h2>
          </div>
          <div className="w-[40px] border-[1px] md:border-[3px] xl:border-[4px] border-[#5751E1] rounded-[4px] mt-[2px] mb-[2px] xl:mt-[5px] xl:mb-[5px]"></div>
          <div className="w-[75%] flex flex-col gap-[20px]">
            <p className="text-[#B2BBCC] text-[10px] xs:text-[12px] md:text-[15px] lg:text-[17px] xl:text-[20px]">
              هنگامی که یک چاپگر ناشناس گرفت نوع گالی و درهم
            </p>
            <ul className="flex items-center gap-[10px]">
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
              <li className="w-[20px] h-[12px] md:h-[20px]">
                <FaceBookLogo />
              </li>
            </ul>
          </div>
          <div className="flex justify-start gap-[10px] mt-[10px]">
            <div className="w-[20px] h-[10px] 2xs:w-[40px] 2xs:h-[30px] xs:w-[60px] xs:h-[50px] md:w-[100px] md:h-[70px] lg:w-[120px] xl:w-[170px] xl:h-[100px]">
              <AppleStoreLink />
            </div>
            <div className="w-[20px] h-[10px] 2xs:w-[40px] 2xs:h-[30px] xs:w-[60px] xs:h-[50px] md:w-[100px] md:h-[70px] lg:w-[120px] xl:w-[170px] xl:h-[100px]">
              <GooglePlayLink />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[15%] bg-[#1C1A4A] flex justify-center items-center">
        <p className="text-center text-[#8C9AB4] text-[12px] lg:text-[14px] xl:text-[16px]">
          {" "}
          © تمامی حقوق این سایت متعلق به تیم نامبر وان می باشد.
        </p>
      </div>
    </div>
  );
};

export default Footer;
