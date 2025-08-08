import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaDiscord, FaTwitter, FaFacebook, FaDribbble } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="h-12"
                                alt="Logo"
                            />
                        </Link>
                        <p className="text-gray-600 text-sm">
                            Building innovative solutions for the modern web.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <FaFacebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <FaTwitter className="h-5 w-5" />
                            </a>
                            <a href="https://github.com/vikassingh5522" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="text-gray-500 hover:text-gray-700">
                                <FaGithub className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <FaDiscord className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-700">
                                <FaDribbble className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            Support
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-600 hover:text-gray-900 text-sm">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/docs" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/privacy" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link to="/cookies" className="text-gray-600 hover:text-gray-900 text-sm">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Vikas Singh. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0">
                        <Link to="https://vikas-portfolio-s.vercel.app/" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-gray-900 text-sm">
                            vikassingh
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}