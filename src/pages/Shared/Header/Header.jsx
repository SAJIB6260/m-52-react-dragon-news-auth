import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="logo" />
            <p className='text-lg text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium text-[#403F3F]'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;