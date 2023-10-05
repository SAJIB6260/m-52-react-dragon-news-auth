import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-4 mt-7 mb-5">
            <button className="font-medium text-xl bg-[#D72050] text-white px-6 py-[10px]">Latest</button>
            <Marquee className="text-lg text-[#403F3F] font-semibold" speed={100}>
                <Link className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened   !</Link>
                <Link className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened   !</Link>
                <Link className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened   !</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;