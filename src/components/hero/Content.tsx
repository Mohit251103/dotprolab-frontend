const Content = () => {
    return (
        <div className="w-full flex-col justify-start px-[7%] mt-64">
            <div className="flex flex-col justify-center items-start w-[70%]">
                <p className="font-neuemachina text-7xl font-extrabold">Trusted Multi-Chain {" "}<span className="text-yellow">DEX</span> Platform</p>
                <p className="text-[#9E9E9E] text-2xl font-light font-neuemachina my-4">Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
            </div>
            <div className="flex w-[25%] justify-between items-center font-raleway mt-10">
                <div className="rounded-full px-6 py-3 gradient-yellow-white transition-all duration-300 hover:scale-110">
                    <p className="text-black text-sm text-[#111111] font-extrabold">Connect Wallet</p>
                </div>
                <div className="rounded-full px-6 py-3 transition-all duration-300 hover:scale-110 bg-none border-[#EDD955] border-2">
                    <p className="text-sm text-[#EDD955] font-extrabold">Trade Crypto</p>
                </div>
            </div>
        </div>
    )
}

export default Content;