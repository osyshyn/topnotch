import Logo from '../../assets/img/TopNotch-logo-no-tagline 1.png';
import { Navigation } from './Navigation';
import ArrowUp from '../../assets/icon/carbon_arrow-up-right.svg';
import { Button } from '../../page-components/Button';
import { ButtonVariants } from '../../@types/button';
import { useRef, useState } from 'react';
import OpenMenu from '../../assets/icon/open-menu.svg';
import CloseMenu from '../../assets/icon/close-menu.svg';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS, navItems } from './constants';

export const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | number | null>(null);

  return (
    <header
      className={`${isMobileNav ? 'bg-white' : 'bg-brand-black'} lg:bg-brand-black w-full`}
    >
      <div
        ref={headerRef}
        className="mx-auto flex items-center justify-between border-b-[1px] border-[#ECECEC] px-5 py-4 md:px-10 lg:w-full lg:border-none xl:container"
      >
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={Logo} className="h-8 w-auto md:h-10" alt="TopNotch Logo" />
        </a>

        <div className="flex w-full flex-row items-center justify-end gap-6 self-end lg:hidden">
          <Button
            className="hidden rounded-full sm:flex"
            variant={ButtonVariants.PRIMARY}
          >
            Contact Us
            <img
              src={ArrowUp}
              className="ml-2 h-4 w-4"
              alt=""
              aria-hidden="true"
            />
          </Button>
          <img
            className="h-[34px] w-[34px] cursor-pointer p-2"
            src={`${isMobileNav ? CloseMenu : OpenMenu}`}
            onClick={() => setIsMobileNav(!isMobileNav)}
            alt=""
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center lg:flex lg:space-x-4 xl:space-x-8">
          <Navigation headerRef={headerRef} />
          <Button className="rounded-full" variant={ButtonVariants.PRIMARY}>
            Contact Us
            <img
              src={ArrowUp}
              className="ml-2 h-4 w-4"
              alt=""
              aria-hidden="true"
            />
          </Button>
        </nav>
      </div>
      {/* Mobile Navigation */}
      <nav
        className={`${isMobileNav ? 'flex' : 'hidden'} flex-col bg-white px-5 pb-6 lg:hidden`}
      >
        <ul className="font-brand mr-8 flex flex-col gap-4 py-4 text-[18px] text-[#252423]">
          {NAVIGATION_LINKS.map(({ id, label }) => {
            const hasSubmenu = navItems.find((item) => item.label === label);
            if (label === 'Home') return <></>;

            return (
              <li key={id} className="relative">
                <p
                  className="cursor-pointer text-2xl font-semibold hover:text-[#f06e19]"
                  onClick={() => setOpenSubmenu(openSubmenu === id ? null : id)}
                >
                  {label}
                </p>
                {hasSubmenu && openSubmenu === id && (
                  <div className="mt-16px px-4 py-4 text-[#252423]">
                    <ul>
                      {hasSubmenu.submenu.map((subItem) => (
                        <li key={subItem.path} className="py-1">
                          <Link
                            to={subItem.path}
                            className="block text-lg hover:text-[#f06e19]"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <Button
          className="flex w-full max-w-none rounded-full sm:hidden sm:w-auto sm:max-w-[200px]"
          variant={ButtonVariants.PRIMARY}
        >
          Contact Us
          <img
            src={ArrowUp}
            className="ml-2 h-4 w-4"
            alt=""
            aria-hidden="true"
          />
        </Button>
      </nav>
    </header>
  );
};
