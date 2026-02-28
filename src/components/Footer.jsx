import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black border-t border-gray-900 text-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center items-center gap-6">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} SRIRAM. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
