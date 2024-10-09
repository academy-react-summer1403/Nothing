import Admin from "../../components/Icons/Admin";
import ChangeMode from "../../components/Icons/ChangeMode";
import Home from "../../components/Icons/Home";
import LearnLogo from "../../components/Icons/Learn-Logo";
import LFRImage from "../../components/Icons/LFRImage";
import { useState } from "react";
import ForgetPassStep1 from "./ForgetPassStep1";
import ForgetPassStep2 from "./ForgetPassStep2";
import ForgetPassStep3 from "./ForgetPassStep3";

const ForgetPass = () => {
  const pageHeight = window.innerHeight;
  const [stepCounter, setStepCounter] = useState(1);
  return (
    <div
      className="w-[100%] bg-[#5751E1] flex justify-center items-center"
      style={{ height: pageHeight }}
    >
      <div className="w-[1300px] h-[600px] rounded-[20px] bg-[#FFFFFF80] flex justify-between items-center">
        <div className="w-[40%] h-[100%] bg-white rounded-[20px]">
          {stepCounter === 1 && (
            <ForgetPassStep1 setStepCounter={setStepCounter} />
          )}
          {stepCounter === 2 && (
            <ForgetPassStep2 setStepCounter={setStepCounter} />
          )}
          {stepCounter === 3 && (
            <ForgetPassStep3 setStepCounter={setStepCounter} />
          )}
        </div>

        <div className="w-[50%] h-[90%] mx-auto">
          <div className="w-[100%] h-[100%]">
            <div className="w-[100%] flex justify-start items-center flex-row-reverse gap-[15px]">
              <div>
                <Home />
              </div>
              <div>
                <Admin />
              </div>
              <div>
                <ChangeMode />
              </div>
            </div>
            <div className="w-[90%]">
              <div className="flex justify-start items-center">
                <p className="text-[40px] text-[#161439] font-bold">هرگز از</p>
                <LearnLogo />
              </div>
              <div>
                <p className="text-[40px] text-[#161439] font-bold">
                  دست نکشید زندگی هرگز از آموزش دست نمی کشد
                </p>
              </div>
            </div>
            <div className="w-[550px] h-[500px] absolute top-[200px] left-[120px]">
              <LFRImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
