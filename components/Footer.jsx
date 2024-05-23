import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Wrapper from "./Wrapper";

    const Footer = () => {
    return (
        <footer id="footer" className="bg-black text-white pt-7 pb-7">
            <Wrapper className="flex justify-center flex-col items-center">
                <div className = "text-xs leading-5 text-center max-w-5xl mb-5">
                    Made with <span className = "text-red-500 text-[18px]">{'\u2665'} </span> <br/> Prashant Shukla <br/>   Contact no. 7800736965
                </div>
                    
                        <Link href = "https://www.linkedin.com/in/prashant-shukla-1117031b1/" target="_blank">
                        <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center text-blue-900 hover:bg-black/[0.5] cursor-pointer transition-all duration-300 ease-in-out hover:shadow-[0_0_0.625em_white] hover:text-white">
                        <FaLinkedinIn />
                        </div>
                        </Link>
                   

            </Wrapper>
        </footer>
    );
};

export default Footer;
