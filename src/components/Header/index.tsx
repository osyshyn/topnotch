import Logo from '../../assets/img/TopNotch-logo-no-tagline 1.png';
import { Navigation } from './Navigation';
import ArrowUp from '../../assets/icon/carbon_arrow-up-right.svg';
import { Button } from '../../page-components/Button';
import { ButtonVariants } from '../../@types/button';
import { useRef } from 'react';

export const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  return (
    <header className="bg-brand-black w-full">
      <div
        ref={headerRef}
        className="mx-auto flex items-center justify-between px-5 py-4 md:px-10 lg:w-full xl:container"
      >
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={Logo} className="h-8 w-auto md:h-10" alt="TopNotch Logo" />
        </a>

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
    </header>
  );
};
