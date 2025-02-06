
import Logo from "../../assets/icons/TopNotch-logo-no-tagline 1.png";
import { Navigation } from "./Navigation";
import ArrowUp from '../../assets/carbon_arrow-up-right.svg';

export const Header = () => {
    return (
        <header className="w-full bg-brand-black">
            <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
              
                <a href="/" className="flex-shrink-0">
                    <img 
                        src={Logo} 
                        className="h-8 md:h-10 w-auto" 
                        alt="TopNotch Logo" 
                    />
                </a>
                
                <div className="hidden lg:flex items-center space-x-8">
                    <Navigation />
                    <a 
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-[#F15A29] hover:bg-[#d94d1f] transition-colors rounded-full text-white font-semibold text-base"
                    >
                        Contact Us
                        <img 
                            src={ArrowUp} 
                            className="ml-2 w-4 h-4" 
                            alt=""
                            aria-hidden="true"
                        />
                    </a>
                </div>
                
                {/* Mobile menu button - you'll need to implement the mobile menu functionality */}
                <button className="lg:hidden p-2">
                    <span className="sr-only">Open menu</span>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;