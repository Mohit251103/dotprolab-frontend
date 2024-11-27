import { useState } from "react"

const FaqItem = ({ item }: { item: any }) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className="flex-col p-4 relative">
            <div className="flex gap-6">
                <p className="text-xl ml-5">{item.ques}</p>
                {!show && <button className="absolute right-5 bg-[#D9D9D91A]/10 w-[30px] h-[30px] rounded-full mx-auto my-auto" onClick={() => setShow(prev => !prev)}>+</button>}
                {show && <button className="absolute right-5 bg-[#D9D9D91A]/10 w-[30px] h-[30px] rounded-full mx-auto my-auto" onClick={() => setShow(prev => !prev)}>^</button>}
            </div>
            {show && <p className="text-sm mt-2 ml-6 text-[#F0F0F0B2] ">{item.ans}</p>}
        </div>
    )
}

const Faq = () => {
    const faq = [
        {
            ques: "How do I get a Referral Code?",
            ans: "You receive your rewards in ETH instantly once someone you refer makes a transaction!"
        },
        {
            ques: "Do I get rewarded in tokens or ETH when I refer buyers?",
            ans: "You receive your rewards in ETH instantly once someone you refer makes a transaction!"
        },
        {
            ques: "How do I get a Referral Code?",
            ans: "You receive your rewards in ETH instantly once someone you refer makes a transaction!"
        }

    ]
    return (
        <div className="my-40 bg-[rgba(255,255,255,0.1)] backdrop-blur-xl flex-col divide-y max-w-[60vw] mx-auto rounded-xl">
            <p className="text-yellow text-4xl font-bold text-center font-neuemachina p-4">FAQs</p>
            {faq.map((item, index) => {
                return (
                    <FaqItem item={item}/>
                )
            })}
        </div>
    )
}

export default Faq;