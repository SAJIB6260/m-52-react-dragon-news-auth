import { FcGoogle } from 'react-icons/fc';
import { RxGithubLogo } from 'react-icons/rx';
import { GrFacebookOption } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const RightSIdeNav = () => {
    return (
        <div>
            <div className='p-2'>
                <h2 className="text-2xl mb-5 font-semibold text-[#403F3F]">Login With</h2>
                <button className="text-lg border-2 border-blue-500 text-blue-700 flex justify-center text-center items-center w-full gap-2 py-2 font-semibold rounded-lg">
                    <FcGoogle></FcGoogle>
                    Login With Google
                </button>
                <button className="text-lg border-2 border-[#403F3F] text-[#403F3F] flex justify-center text-center items-center w-full gap-2 py-2 font-semibold rounded-lg my-2">
                    <RxGithubLogo></RxGithubLogo>
                    Login With Github
                </button>
            </div>
            <div className='p-2'>
                <h2 className="text-2xl mb-5 font-semibold text-[#403F3F]">Find Us On</h2>
                <a className="border-2 border-b-0 border-[#E7E7E7] flex items-center w-full gap-2 p-4 font-semibold rounded-t-lg" href="">
                    <span className='text-[#3B599C] text-xl bg-[#F3F3F3] p-2 rounded-full'><GrFacebookOption></GrFacebookOption></span>
                    <span className='text-[#706F6F] text-lg'>Facebook</span>
                </a>
                <a className="border-2 border-[#E7E7E7] text-[#403F3F] flex items-center w-full gap-2 p-4 font-semibold" href="">
                    <span className='text-[#58A7DE] text-xl bg-[#F3F3F3] p-2 rounded-full'><FaTwitter></FaTwitter></span>
                    <span className='text-[#706F6F] text-lg'>Twitter</span>
                </a>
                <a className="border-2 border-t-0 border-[#E7E7E7] text-[#403F3F] flex items-center w-full gap-2 p-4 font-semibold rounded-b-lg" href="">
                    <span className='text-[#EA6A6A] text-xl bg-[#F3F3F3] p-2 rounded-full'><FiInstagram></FiInstagram></span>
                    <span className='text-[#706F6F] text-lg'>Instagram</span>
                </a>
            </div>
            {/* Q - Zone */}
            <div className='p-4 bg-[#F3F3F3] my-5'>
                <h2 className="text-2xl mb-5 font-semibold text-[#403F3F]">Q - Zone</h2>
                <img src={qzone1} alt="qzone1" />
                <img src={qzone2} alt="qzone2" />
                <img src={qzone3} alt="qzone3" />
            </div>
            <div className="hero mb-5" style={{ backgroundImage: 'url(https://i.ibb.co/QN623ds/bg1.png)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content px-9 py-16">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Create an Amazing Newspaper</h1>
                        <p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className="font-medium text-xl bg-[#D72050] text-white px-5 py-4">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSIdeNav;