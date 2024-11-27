const Footer = () => {
    return (
        <div id="footer" className="w-full mt-24 bg-[#051422] p-6 font-raleway">
            <div className="w-[90%] flex justify-between items-center p-4 mx-auto">
                <img src="/footer.png" alt="" className="w-[155px] h-[155px]"/>
                <div className="flex font-extrabold text-lg gap-20">
                    <a href="#about" className="scale-up">About Us</a>
                    <a href="#" className="scale-up">Roadmap</a>
                    <a href="#faq" className="scale-up">FAQs</a>
                    <a href="#footer" className="scale-up">Contact Us</a>
                </div>
                <div className="flex flex-col justify-start items-center h-full">
                    <p className="text-3xl font-bold">Contact <span className="text-yellow">Us</span></p>
                    <div className="flex justify-between items-center gap-6 mt-4">
                        <img src="/telegram.png" className="w-[25px] h-[25px]" alt="" />
                        <img src="/reddit.png" className="w-[25px] h-[25px]" alt="" />
                        <img src="/twitter.png" className="w-[25px] h-[25px]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;