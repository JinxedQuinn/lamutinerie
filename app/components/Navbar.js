"use state";
import Link from 'next/link';

export default function Infos() {
    return (
        <div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-black bg-white">
                        <li><Link href='/'>La Mutinerie</Link></li>
                        <li><Link href='/charte'>Charte</Link></li>
                        <li><Link href='/programme'>Programme</Link></li>
                        <li><Link href='/carte'>La Carte</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                        <li><Link href='/soutien'>Nous soutenir</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black">
                    <li><Link href='/'>La Mutinerie</Link></li>
                    <li><Link href='/charte'>Charte</Link></li>
                    <li><Link href='/programme'>Programme</Link></li>
                    <li><Link href='/carte'>La Carte</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><Link href='/soutien'>Nous soutenir</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">FR / EN</a>
            </div>
        </div>
    );
};