import React from 'react';
import footer from "../../assets/logo2.svg"
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
     
                    <footer className='bg-[#244D3F] pb-8'>
                            <div className='container mx-auto text-center'>
                                <div className="footer-area flex flex-col items-center text-center text-white pt-32 pb-20">
                                    
                                    <div className='footer-logo mb-4'>
                                    <a href='/'>
                                        <img src={footer} alt='logo' className="mx-auto" />
                                    </a>
                                    </div> 

                                    <p className="">
                                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                                    </p>

                                </div>
                                  <h6 className="footer-title text-white">Social Links</h6>
                                <div className='social-links flex gap-2 items-center justify-center'>
                                    <a href='https://www.instagram.com/' className='p-3 bg-white rounded-3xl'><FaInstagram /></a>
                                    <a href='https://www.facebook.com/' className='p-3 bg-white rounded-3xl'><FaFacebookF /></a>
                                    <a href='https://x.com/' className='p-3 bg-white rounded-3xl'><FaXTwitter /></a>
                                    </div>
                </div>
                <aside className='text-[#FAFAFA] text-center sm:flex max-w-7xl mx-auto justify-between'>
                    <p className='leading-6'> © 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex gap-10'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Cookies</a></li>
                    </ul>
                </aside>
            </footer>
  );
};

export default Footer;