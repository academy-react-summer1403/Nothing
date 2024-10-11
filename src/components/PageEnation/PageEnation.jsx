const PageEnation = ({index}) => {
  return(
    <div className="w-[440px] h-[100px] flex justify-center items-center">
        <div className="w-[60px] h-[55px] rounded-full flex justify-center items-center bg-slate-500" style={index === 1 ? {background: '#FFC224'} : {background: '#5751E1'}}>
            <span>1</span>
        </div>
        <div className="w-[150px] h-[7px] bg-[#D9D9D9]"></div>
        <div className="w-[60px] h-[55px] rounded-full flex justify-center items-center" style={index === 2 ? {background: '#FFC224'} : {background: '#5751E1'}}>
            <span>2</span>
        </div>
        <div className="w-[150px] h-[7px] bg-[#D9D9D9]"></div>
        <div className="w-[60px] h-[55px] rounded-full flex justify-center items-center" style={index === 3 ? {background: '#FFC224'} : {background: '#5751E1'}}>
            <span>3</span>
        </div>
    </div>
  )
}

export default PageEnation