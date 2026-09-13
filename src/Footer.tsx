import React from 'react';
import Logo from './B14-A05-DevStack/assets/logo-text.png'
const Footer = () => {
    return ( <footer className="w-full bg-[#F1F5F9] mt-24 py-12 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            
            
            <div className="flex flex-col gap-3">
              <img className="w-[130px] h-[32px] object-contain" src={Logo} alt="DevStack Logo" />
              <p className="text-base text-[#64748B] ">
              Curated tools, technologies, and resources for developers building
              modern software.
              </p>
              <div className="flex gap-6">
              <a href="#" className=''>Twitter</a>
              <a href="#" className="">GitHub</a>
              <a href="#" className="">Discord</a>
            </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h3 className="text-base-black font-bold   mb-4">
                Product
              </h3>
              <ul className="space-y-2.5 text-base font-medium text-[#64748B]">
                <li><a href="#" className="">Technologies</a></li>
                <li><a href="#" className="">Stack Builder</a></li>
                <li><a href="#" className="">Integrations</a></li>
                <li><a href="#" className="">Changelog</a></li>
              </ul>
            </div>
  
            {/* Company Links */}
            <div>
              <h3 className="text-base-black font-bold ] mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-base font-medium text-[#64748B]">
                <li><a href="#" className="">About Us</a></li>
                <li><a href="#" className="">Careers</a></li>
                <li><a href="#" className="">Blog</a></li>
                <li><a href="#" className="">Contact</a></li>
              </ul>
            </div>
  
            {/* Legal Links */}
            <div>
              <h3 className="text-base font-bold text-black">
                Legal
              </h3>
              <ul className="space-y-2.5 text-base font-medium text-[#64748B]">
                <li><a href="#" className="">Privacy Policy</a></li>
                <li><a href="#" className="">Terms of Service</a></li>
                <li><a href="#" className="">Cookie Settings</a></li>
                <li><a href="#" className="">Security</a></li>
              </ul>
            </div>
  
          </div>
  
          
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
            <p>© 2026 DevStack. All rights reserved.</p>
            
          </div>
        </div>
      </footer>
        
    );
};

export default Footer;