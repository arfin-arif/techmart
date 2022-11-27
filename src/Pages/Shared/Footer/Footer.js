import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png'

const Footer = () => {
    return (
        <footer className='bg-base-200 ' >
            <div className="footer p-10 text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p className='ml-3'>Tech Mart<br />Providing reliable second hand products</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Reseal </Link>
                    <Link className="link link-hover">Buy </Link>
                    <Link className="link link-hover">Second Hand </Link>
                    <Link className="link link-hover">Reseal </Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <p className="text-sm text-center text-black">© Copyright 2022. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;