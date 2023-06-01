import { useState } from "react";
// import SideMenu from "./SideMenu";

export default function Sandwich() {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => {
        setIsOpen(true);
    }
    const closeMenu = () => {
        setIsOpen(!isOpen);
    }

    if (!isOpen) {
        return (
            <div className="sandwich">
                <img src="/sandwich-menu.png" alt="" onClick={
                    openMenu
                }/>
            </div>
        );
    } else {
        return (
            <div className="sidemenu-container">
                <div className="sidemenu">
                    <img src="/close-icon.svg" alt="" onClick={
                        closeMenu
                    }/>
                    <ul>
                        <li className="sidemenu-item">Products</li>
                        <li className="sidemenu-item">App</li>
                        <li className="sidemenu-item">About</li>
                        <li className="sidemenu-item">FAQ</li>
                    </ul>
                </div>
            </div>
        );
    }
    
}