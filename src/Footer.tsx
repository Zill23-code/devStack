
import Logo from './B14-A05-DevStack/assets/logo-text.png'
const Footer = () => {
    return ( <footer className="w-full bg-[#FFFFFF] mt-24 py-12 border-t border-slate-200">
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
            
            <div>
              <h3 className="text-base-black font-bold   mb-4">
                Product
              </h3>
              <ul className="space-y-2.5 text-base font-medium text-[#64748B]">
                <li><a href="#" className="">Home</a></li>
                <li><a href="#" className="">Technologies</a></li>
                <li><a href="#" className="">Projects</a></li>
                
              </ul>
            </div>
  
           
            <div>
              <h3 className="text-base-black font-bold ] mb-4">
                Company
              </h3>
              <ul className="space-y-2 text-base font-medium text-[#64748B]">
                <li><a href="#" className="">About</a></li>
                <li><a href="#" className="">Contact</a></li>
                <li><a href="#" className="">Careers</a></li>
               
                
              </ul>
            </div>
  
           
            <div>
              <h3 className="text-base font-bold text-black">
                Legal
              </h3>
              <ul className="space-y-2.5 text-base font-medium text-[#64748B]">
                <li><a href="#" className="">Privacy Policy</a></li>
                <li><a href="#" className="">Terms of Service</a></li>
               
              </ul>
            </div>
  
          </div>
  
          
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
            <p>© 2026 DevStack. All rights reserved.</p>
            <div className='flex justify-between gap-2'>
          <p> Privacy </p>
          <p>Terms</p>
          </div>
          </div>
          
        </div>
      </footer>
        
    );
};

export default Footer;