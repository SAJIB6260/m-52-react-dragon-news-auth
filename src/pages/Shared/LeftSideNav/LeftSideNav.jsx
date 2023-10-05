import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSideNav.css"


const LeftSideNav = () => {

    const [categories, setCategoris] = useState([])

    useEffect( ()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategoris(data))
    }, [])

    return (
        <div className="space-y-4 font-poppins">
            <h2 className="text-xl text-[#403F3F] font-semibold">All Caterogy</h2>
            {
                categories.map(category => <Link 
                    className="block text-lg text-[#9F9F9F] font-medium px-12 py-4 active:bg-[#E7E7E7] active:text-[#403F3F]" 
                    key={category.id}
                    to={`/category/${category.id}`}>
                    {category.name}
                    </Link>)
            }
        </div>
    );
};

export default LeftSideNav;