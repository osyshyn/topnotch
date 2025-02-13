import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS, navItems } from './constants';
import {
  NavigationList,
  DropdownContainer,
  DropdownGrid,
  DropdownLink,
  DropdownItemTitle,
  DropdownItemDescription,
} from './Sidebar.components';

export const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | undefined>(undefined);
  const [headerWidth, setHeaderWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (headerRef?.current) {
        const headerWidth = headerRef?.current.offsetWidth;
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

    if (headerRef?.current) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [headerRef]);

  const handleMouseEnter = (label: string) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => 
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  return (
    <nav>
      <NavigationList>
        {NAVIGATION_LINKS.map(({ id, label = '', href }) => {
          const submenuData = navItems.find((item) => item.label === label);
          const hasSubmenu = Boolean(submenuData);

          return (
            <li
              key={id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={href || '#'} className="hover:text-[#f06e19]">
                {label}
              </Link>
              {hasSubmenu && activeDropdown === label && (
                <DropdownContainer
                  style={{ width: headerWidth }}
                  className={`fixed left-1/2 mt-7 -translate-x-1/2 transform rounded-[20px] border border-[#f06e19] bg-white px-8 py-8 text-black shadow-lg`}
                  onMouseEnter={() => handleMouseEnter(label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <DropdownGrid>
                    {submenuData?.submenu.map((subItem) => (
                      <div key={subItem.path}>
                        <DropdownLink to={subItem.path}>
                          <DropdownItemTitle>{subItem.label}</DropdownItemTitle>
                        </DropdownLink>
                        <DropdownItemDescription>
                          Lorem ipsum dolor sit amet consectetur. Felis
                          ullamcorper nunc vel tincidunt ultrices.
                        </DropdownItemDescription>
                      </div>
                    ))}
                  </DropdownGrid>
                </DropdownContainer>
              )}
            </li>
          );
        })}
      </NavigationList>
    </nav>
  );
};
