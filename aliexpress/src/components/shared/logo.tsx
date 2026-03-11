import { FC } from "react";
import Image from "next/image";
import logoImg from "../../../public/assets/icons/logo-5-removebg-preview.png";

interface LogoProps {
    width : string;
    height : string;
}



const Logo: FC<LogoProps> = ({width, height }) => {
    return (
        <div className="z-50" style={{width : width, height:height}}>
            <Image 
            src = {logoImg}
            alt="Daya Store"
            className="w-full h-full object-cover overflow-visible"
            />
        </div>
    )
}

export default Logo;