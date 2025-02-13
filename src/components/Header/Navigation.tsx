import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS, navItems } from './constants';

interface INavigationProps {
  headerRef: React.RefObject<HTMLDivElement | null>;
}

export const Navigation = ({ headerRef }: INavigationProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);
  const [headerWidth, setHeaderWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        const headerWidth = headerRef.current.offsetWidth;
        console.log(headerWidth);

        let paddingLeft = 16;
        let paddingRight = 16;

        if (headerWidth >= 1024) {
          paddingLeft = 32;
          paddingRight = 32;
        }

        const widthWithoutPadding = headerWidth - paddingLeft - paddingRight;

        setHeaderWidth(widthWithoutPadding);
      }
    };

    if (headerRef.current) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [headerRef]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300);
  };

  return (
    <nav>
      <ul className="font-brand mr-8 flex items-center py-4 text-[18px] text-white lg:gap-8 xl:mr-[200px] xl:gap-10">
        {NAVIGATION_LINKS.map(({ id, label, href }) => {
          const hasSubmenu = navItems.find((item) => item.label === label);

          return (
            <li
              key={id}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={href} className="hover:text-[#f06e19]">
                {label}
              </Link>

              {/* Dropdown for "Services" */}
              {hasSubmenu && isDropdownOpen && (
                <div
                  style={{ width: headerWidth }}
                  className={`fixed left-1/2 mt-7 -translate-x-1/2 transform rounded-[20px] border border-[#f06e19] bg-white px-8 py-8 text-black shadow-lg`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-4 gap-x-20 gap-y-10">
                    {hasSubmenu.submenu.map((subItem) => (
                      <div key={subItem.path} className="text-left">
                        <Link
                          to={subItem.path}
                          className="block text-lg font-bold hover:text-[#f06e19]"
                        >
                          {subItem.label}
                        </Link>
                        <p className="mt-1 text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur. Felis
                          ullamcorper nunc vel tincidunt ultrices.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
