import React, { useEffect, useState } from 'react';
import ChefsCard from '../../ChefsCard/ChefsCard';
import MenuItem from '../../MenuItem/MenuItem';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='py-5'>
            <div>
                <h2 className="mb-5 text-center">Our Chefs</h2>
                <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                    {
                        chefs.map(chef => <ChefsCard
                            key={chef.id}
                            chef={chef}
                        >

                        </ChefsCard>)

                    }
                </div>
            </div>
            <div>
                <h2 className="mb-5 text-center">Our Recipes</h2>
                <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
                    {
                        chefs.map(menu => <MenuItem
                            key={menu.id}
                            menu={menu}
                        >

                        </MenuItem>)

                    }
                </div>
            </div>
            <NewsLetter></NewsLetter>
        </div >
    );
};

export default Home;