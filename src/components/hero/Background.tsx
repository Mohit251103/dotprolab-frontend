const Background = () => {
    return (
        <>
            <div className="absolute elipse-common elipse1">
            </div>
            <div className="absolute elipse-common elipse2">
            </div>
            <div className="absolute elipse-common elipse3"></div>
            <div className="absolute glow-elipse top-[58px] left-[-180px] blur-[130px] rotate-45"></div>
            <div className="absolute glow-elipse top-[530px] left-[950px] blur-[250px]"></div>
            <div className="rounded-full w-[259px] h-[259px] top-[263px] right-[110px] gradient-yellow-white absolute"></div>
            <div className="absolute top-[176px] left-[1269px]">
                <img src="/star-img.png" className="w-[54px] h-[46px]"/>
            </div>
            <div className="absolute top-[241px] left-[190px]">
                <img src="/star-img.png" className=" w-[61px] h-[60px]"/>
            </div>
            <div className="absolute top-[721px] left-[1256px]">
                <img src="/star-img.png" className=" w-[61px] h-[60px]"/>
            </div>
        </>
    )
}

export default Background;