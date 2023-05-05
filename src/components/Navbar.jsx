import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import linkedIn from "../assets/socialMedia/LinkedIn.png"
import github from "../assets/github.png"
import instagram from "../assets/socialMedia/instagram.png"

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-3 pt-5 fixed top-0 z-[999] ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            &nbsp;
            
          </p>
        </Link>

        

        <ul className='list-none hidden sm:flex flex-row gap-5'>
        <span>
          <div className="social-icon sm:flex flex-row gap-5">
            <a href="https://www.linkedin.com/in/prithvi-raj-959a95201/" target={"_blank"}><img src={linkedIn} alt="linkedIn" className="w-7 h-7"/></a>
            <a href="https://www.github.com/prithvi206" target={"_blank"}><img src={github} alt="github" className="w-7 h-7" /></a>
            <a href="https://www.instagram.com/prithvi.raj.20/" target={"_blank"}><img src={instagram} alt="instagram" className="w-7 h-7s" /></a>
          </div>
          </span>
          <div className="navbar-text">
            <HashLink smooth to='#contact'>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
            </HashLink>
          </div>
          
          {navLinks.map((nav) => (
            <HashLink smooth to={`/#${nav.id}`}>
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <span>{nav.title}</span>
            </li>
            </HashLink>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
