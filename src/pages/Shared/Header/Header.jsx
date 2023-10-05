import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="logo" />
            <p className='text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;