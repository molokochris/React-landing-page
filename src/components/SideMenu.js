import Account from "./Account";
// import { useState } from "react";

export default function SideMenu() {
    // const [isOpen, setIsOpen] = useState(true);
    // const openMenu = () => {
    //     setIsOpen(!isOpen);
    // }
    // const closeMenu = () => {
    //     setIsOpen(!isOpen);
    // }

    return (
        <div className="sidemenu-container">
            <div className="sidemenu">
                <img src="/close-icon.svg" alt="" />
                <ul>
                    <li className="sidemenu-item">Products</li>
                    <li className="sidemenu-item">App</li>
                    <li className="sidemenu-item">About</li>
                    <li className="sidemenu-item">FAQ</li>
                </ul>
            </div>

            <Account />
        </div>
    );
}
// export default function Sandwich() {
//     return (
//         <div className="sandwich" onClick={openMenu}>
//             <img src="/sandwich-menu.png" alt="" />
//         </div>
//     );
// }