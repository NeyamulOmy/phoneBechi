import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ categories }) => {

    return (
        <div className="navbar bg-cyan-900 text-white lg:px-5">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">Phone Bechi</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">

                    <li tabIndex={0}>
                        <Link>
                            Categories
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>

                        <ul className="p-2 bg-cyan-900 z-50">
                            {
                                categories.map(category => {
                                    return (
                                        <li key={category._id}><Link>{category.name}</Link></li>
                                    )
                                })
                            }

                        </ul>
                    </li>
                    <li><Link>Log in</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;