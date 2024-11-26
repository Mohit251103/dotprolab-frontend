
const Navbar = () => {
    return (
        <div className="flex justify-between items-center font-raleway max-w-[90vw] mx-auto">
            <div className="">
                <img src="/logo.png" alt="Logo" className="w-[194px] h-[73px]"/>
            </div>
            <div className="flex font-extrabold text-lg gap-20">
                <a href="#" className="text-yellow scale-up">Home</a>
                <a href="#about" className="scale-up">About Us</a>
                <a href="#" className="scale-up">Roadmap</a>
                <a href="#faq" className="scale-up">FAQs</a>
                <a href="#contact" className="scale-up">Contact Us</a>
            </div>
            <div className="rounded-full px-6 py-3 gradient-yellow-white transition-all duration-300 hover:scale-110">
                <p className="text-black text-sm text-[#111111] font-extrabold">Connect Wallet</p>
            </div>
        </div>
    )
}

export default Navbar;