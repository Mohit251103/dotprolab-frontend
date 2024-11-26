import Background from "./Background"
import Content from "./Content"
import Navbar from "./Navbar"

const Hero = () => {
    return (
        <div className="py-14 relative z-50">
            <Background />
            <Navbar />
            <Content />
        </div>
    )
}

export default Hero