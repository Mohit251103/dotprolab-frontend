const Features = () => {
    const content = [
        {
            head: "Manage Portfolio",
            desc: "Buy and sell popular digital currencies, keep track of them in the one place."
        },
        {
            head: "Manage Portfolio",
            desc: "Buy and sell popular digital currencies, keep track of them in the one place."
        },
        {
            head: "Manage Portfolio",
            desc: "Buy and sell popular digital currencies, keep track of them in the one place."
        },
        {
            head: "Manage Portfolio",
            desc: "Buy and sell popular digital currencies, keep track of them in the one place."
        }
    ]
    return (
        <div className="flex-col font-neuemachina items-start max-w-[90vw] mx-auto">
            <p className="text-5xl font-bold text-center">Our <span className="text-yellow">Features</span></p>
            <div className="w-full flex justify-center items-center gap-8 my-12 p-4">
                {content.map((item, index) => {
                    return (
                        <div key={index} className="flex-col items-start w-[296px] h-[281px] rounded-md bg-[rgba(255,255,255,0.1)] backdrop-blur-xl p-4">   
                            <div className="w-[80px] h-[80px]"><img src="/card.png"></img></div>
                            <div className="font-raleway flex-col mt-10">
                                <p className="text-2xl font-semibold">{item.head}</p>
                                <p className="text-md text-[#F0F0F0B2] mt-4">{item.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Features;