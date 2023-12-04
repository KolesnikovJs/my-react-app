import { NavLink } from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="menu__nav">
                <NavLink to='/products' className="menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.7698 8.85C19.7325 8.47872 19.5582 8.13467 19.2808 7.88504C19.0034 7.63541 18.643 7.49813 18.2698 7.5H16.4998C16.4998 4.185 14.4748 1.5 11.9998 1.5C9.52483 1.5 7.49983 4.185 7.49983 7.5H5.74483C5.37168 7.49813 5.01123 7.63541 4.73387 7.88504C4.4565 8.13467 4.28214 8.47872 4.24483 8.85L2.99983 20.85C2.9788 21.0592 3.00199 21.2705 3.0679 21.4702C3.13381 21.6699 3.24096 21.8534 3.3824 22.009C3.52384 22.1646 3.69641 22.2887 3.88892 22.3733C4.08143 22.4579 4.28956 22.5011 4.49983 22.5H19.4998C19.7101 22.5011 19.9182 22.4579 20.1107 22.3733C20.3032 22.2887 20.4758 22.1646 20.6173 22.009C20.7587 21.8534 20.8659 21.6699 20.9318 21.4702C20.9977 21.2705 21.0209 21.0592 20.9998 20.85L19.7698 8.85ZM11.9998 3.405C13.4998 3.405 14.6998 5.52 14.6998 7.5H9.29983C9.29983 5.52 10.4998 3.405 11.9998 3.405ZM5.32483 20.25L6.40483 9.75H17.5948L18.6748 20.25H5.32483Z" fill="black"/>
                </svg>
                <span className="menu__link">Продукты</span>
                </NavLink>
                <NavLink to='/users' className="menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 11.9997C10.9592 12.0116 9.93832 11.7138 9.0671 11.1442C8.19589 10.5746 7.51365 9.75887 7.10708 8.80067C6.7005 7.84247 6.58793 6.78503 6.78368 5.76271C6.97943 4.74039 7.47465 3.79933 8.20643 3.05909C8.93821 2.31885 9.87351 1.81284 10.8935 1.60536C11.9135 1.39788 12.9722 1.49828 13.935 1.89382C14.8978 2.28935 15.7213 2.96217 16.3009 3.82678C16.8805 4.69139 17.1899 5.70877 17.19 6.74966C17.194 7.43516 17.0629 8.11473 16.8042 8.74956C16.5455 9.3844 16.1643 9.96206 15.6823 10.4496C15.2004 10.9371 14.6272 11.3249 13.9953 11.5909C13.3635 11.8568 12.6855 11.9957 12 11.9997V11.9997ZM12 3.77966C11.4067 3.77966 10.8266 3.95561 10.3333 4.28525C9.83995 4.61489 9.45544 5.08343 9.22837 5.63161C9.00131 6.17979 8.9419 6.78299 9.05766 7.36493C9.17341 7.94687 9.45913 8.48142 9.87869 8.90098C10.2982 9.32054 10.8328 9.60626 11.4147 9.72202C11.9967 9.83777 12.5999 9.77836 13.1481 9.5513C13.6962 9.32424 14.1648 8.93972 14.4944 8.44637C14.8241 7.95302 15 7.373 15 6.77966C15 5.98401 14.6839 5.22095 14.1213 4.65834C13.5587 4.09573 12.7957 3.77966 12 3.77966V3.77966ZM15.375 22.4997H8.62501C7.09959 22.4041 5.66812 21.7301 4.62278 20.615C3.57743 19.5 2.99702 18.0281 3.00001 16.4997C3.00395 15.8047 3.28178 15.1393 3.77321 14.6479C4.26464 14.1564 4.93003 13.8786 5.62501 13.8747H18.375C19.07 13.8786 19.7354 14.1564 20.2268 14.6479C20.7182 15.1393 20.9961 15.8047 21 16.4997C21.003 18.0281 20.4226 19.5 19.3772 20.615C18.3319 21.7301 16.9004 22.4041 15.375 22.4997ZM5.62501 16.1247C5.52556 16.1247 5.43017 16.1642 5.35985 16.2345C5.28952 16.3048 5.25001 16.4002 5.25001 16.4997C5.23845 17.4345 5.57928 18.3393 6.20467 19.0342C6.83007 19.7291 7.69417 20.163 8.62501 20.2497H15.375C16.3059 20.163 17.17 19.7291 17.7953 19.0342C18.4207 18.3393 18.7616 17.4345 18.75 16.4997C18.75 16.4002 18.7105 16.3048 18.6402 16.2345C18.5699 16.1642 18.4745 16.1247 18.375 16.1247H5.62501Z" fill="black"/>
                </svg>
                <span className="menu__link">Пользователи</span>
                </NavLink>
                <li className="menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14.61 7.83025L10.95 3.48025C10.8034 3.32185 10.6243 3.19696 10.4249 3.11412C10.2256 3.03128 10.0107 2.99244 9.795 3.00025H3C2.60218 3.00025 2.22064 3.15828 1.93934 3.43959C1.65804 3.72089 1.5 4.10243 1.5 4.50025V19.5003C1.5 19.8981 1.65804 20.2796 1.93934 20.5609C2.22064 20.8422 2.60218 21.0003 3 21.0003H21C21.3978 21.0003 21.7794 20.8422 22.0607 20.5609C22.342 20.2796 22.5 19.8981 22.5 19.5003V9.33025C22.5 8.93242 22.342 8.55089 22.0607 8.26959C21.7794 7.98828 21.3978 7.83025 21 7.83025H14.61ZM3.75 5.20525H9.45L11.67 7.83025H3.75V5.20525ZM20.25 18.7053H3.75V10.0802H20.25V18.7053Z" fill="black"/>
                </svg>
                <span className="menu__link">Категории</span>
                </li>
                <li className="menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.035 3.21C21.8942 3.09057 21.7255 3.00869 21.5445 2.97198C21.3636 2.93526 21.1763 2.9449 21 3L16.185 4.83L9.13503 3C9.09022 2.99402 9.04483 2.99402 9.00003 3C8.89621 2.9777 8.78884 2.9777 8.68503 3V3L2.29503 4.92C2.06414 4.99084 1.86218 5.1341 1.71901 5.32859C1.57584 5.52309 1.49906 5.75849 1.50003 6V19.875C1.49884 20.0499 1.53899 20.2225 1.61719 20.3789C1.69539 20.5353 1.80943 20.671 1.95003 20.775C2.13738 20.9241 2.37062 21.0036 2.61003 21C2.70941 21.0157 2.81064 21.0157 2.91003 21L8.91003 19.215L15.975 21H16.23C16.3496 21.0145 16.4705 21.0145 16.59 21L21.75 19.125C21.9787 19.042 22.1749 18.8881 22.3098 18.6857C22.4448 18.4833 22.5114 18.243 22.5 18V4.125C22.4983 3.94696 22.4554 3.77174 22.3747 3.61301C22.2941 3.45429 22.1778 3.31636 22.035 3.21V3.21ZM10.035 5.565L15.195 6.885V18.435L10.035 17.115V5.565ZM7.77003 17.16L3.70503 18.375V6.84L7.77003 5.625V17.16ZM20.295 17.16L17.295 18.24V6.795L20.295 5.715V17.16Z" fill="black"/>
                </svg>
                <span className="menu__link">Города</span>
                </li>
                <li className="menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11.0002 6.06504L11.7352 8.45004L12.2152 10.04H16.5952L14.2852 11.81L13.0552 12.755L13.5052 14.255L14.3152 16.895L12.3652 15.395L11.0002 14.345L9.63517 15.395L7.68517 16.895L8.49517 14.255L8.94517 12.755L7.71517 11.81L5.40517 10.04H9.78517L10.2652 8.45004L11.0002 6.06504ZM11.0002 0.500039C10.8126 0.498271 10.6294 0.557197 10.478 0.668029C10.3266 0.778861 10.2151 0.93566 10.1602 1.11504L8.12017 7.79004H1.38517C1.21957 7.8073 1.0622 7.87092 0.931134 7.9736C0.80007 8.07628 0.700629 8.21385 0.644234 8.3705C0.587839 8.52716 0.576777 8.69654 0.61232 8.8592C0.647863 9.02185 0.728569 9.17119 0.845167 9.29004L6.33517 13.595L4.26517 20.375C4.22507 20.5058 4.21637 20.6442 4.23977 20.7789C4.26317 20.9137 4.31801 21.041 4.39983 21.1506C4.48166 21.2602 4.58817 21.3489 4.71072 21.4096C4.83327 21.4704 4.96841 21.5013 5.10517 21.5C5.29441 21.4949 5.47757 21.4321 5.63017 21.32L11.0002 17.18L16.3702 21.305C16.5164 21.4304 16.7025 21.4995 16.8952 21.5C17.0326 21.4989 17.1678 21.4657 17.2902 21.4033C17.4125 21.3408 17.5187 21.2507 17.6002 21.1401C17.6817 21.0294 17.7363 20.9014 17.7597 20.766C17.7832 20.6306 17.7748 20.4916 17.7352 20.36L15.6652 13.595L21.1552 9.36504C21.2718 9.24619 21.3525 9.09685 21.388 8.9342C21.4236 8.77154 21.4125 8.60216 21.3561 8.4455C21.2997 8.28885 21.2003 8.15128 21.0692 8.0486C20.9381 7.94592 20.7808 7.8823 20.6152 7.86504H13.8802L11.8402 1.11504C11.7852 0.93566 11.6737 0.778861 11.5223 0.668029C11.3709 0.557197 11.1878 0.498271 11.0002 0.500039V0.500039Z" fill="black"/>
                </svg>
                <span className="menu__link">Бренды</span>
                </li>
                <li className="menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V9C1.5 9.39782 1.65804 9.77936 1.93934 10.0607C2.22064 10.342 2.60218 10.5 3 10.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V10.5C21.3978 10.5 21.7794 10.342 22.0607 10.0607C22.342 9.77936 22.5 9.39782 22.5 9V4.5C22.5 4.10218 22.342 3.72064 22.0607 3.43934C21.7794 3.15804 21.3978 3 21 3V3ZM20.25 5.25V7.875H3.75V5.25H20.25ZM18.75 18.75H5.25V10.5H18.75V18.75ZM15 15H9C8.70163 15 8.41548 14.8815 8.2045 14.6705C7.99353 14.4595 7.875 14.1734 7.875 13.875C7.875 13.5766 7.99353 13.2905 8.2045 13.0795C8.41548 12.8685 8.70163 12.75 9 12.75H15C15.2984 12.75 15.5845 12.8685 15.7955 13.0795C16.0065 13.2905 16.125 13.5766 16.125 13.875C16.125 14.1734 16.0065 14.4595 15.7955 14.6705C15.5845 14.8815 15.2984 15 15 15Z" fill="black"/>
                </svg>
                <span className="menu__link">Протоколы</span>
                </li>
                <li className="menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.1748 3.99L19.7352 13.155L13.5067 19.695L3.96133 10.5V4.32L10.0998 3.945L10.1748 3.99ZM10.505 1.5H10.3849L3.27095 1.935C2.81823 1.96871 2.39456 2.17065 2.08342 2.50105C1.77229 2.83145 1.59625 3.26633 1.59 3.72L1.49995 10.89C1.49552 11.1111 1.53728 11.3307 1.62256 11.5347C1.70784 11.7387 1.83477 11.9228 1.99523 12.075L12.4111 22.065C12.7103 22.3398 13.1004 22.4947 13.5067 22.5C13.7493 22.4976 13.9888 22.4458 14.2108 22.3478C14.4327 22.2498 14.6323 22.1076 14.7974 21.93L22.0014 14.325C22.1594 14.1676 22.2847 13.9805 22.3701 13.7746C22.4556 13.5687 22.4996 13.3479 22.4996 13.125C22.4996 12.9021 22.4556 12.6813 22.3701 12.4754C22.2847 12.2695 22.1594 12.0824 22.0014 11.925L11.6006 1.935C11.3046 1.65512 10.9125 1.49942 10.505 1.5V1.5ZM8.25374 6.75C7.9569 6.75 7.66673 6.83798 7.41992 7.0028C7.1731 7.16762 6.98074 7.40189 6.86714 7.67598C6.75355 7.95007 6.72383 8.25167 6.78174 8.54264C6.83965 8.83361 6.98259 9.10088 7.19248 9.31066C7.40238 9.52044 7.6698 9.6633 7.96094 9.72118C8.25207 9.77906 8.55384 9.74935 8.82809 9.63582C9.10233 9.52229 9.33673 9.33003 9.50164 9.08336C9.66656 8.83668 9.75458 8.54667 9.75458 8.25C9.75458 7.85218 9.59646 7.47065 9.31499 7.18934C9.03353 6.90804 8.65179 6.75 8.25374 6.75Z" fill="black"/>
                </svg>
                <span className="menu__link">Заказы</span>
                </li>
                <li className="menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.25 5.25V18.75H3.75V5.25H20.25ZM21 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V19.5C1.5 19.8978 1.65804 20.2794 1.93934 20.5607C2.22064 20.842 2.60218 21 3 21H21C21.3978 21 21.7794 20.842 22.0607 20.5607C22.342 20.2794 22.5 19.8978 22.5 19.5V4.5C22.5 4.10218 22.342 3.72064 22.0607 3.43934C21.7794 3.15804 21.3978 3 21 3V3ZM18 14.52V13.98C17.9584 13.6204 17.7787 13.2911 17.4988 13.0616C17.2189 12.8321 16.8607 12.7204 16.5 12.75H7.5C7.13925 12.7204 6.78111 12.8321 6.50122 13.0616C6.22132 13.2911 6.0416 13.6204 6 13.98V14.52C6.0416 14.8796 6.22132 15.2089 6.50122 15.4384C6.78111 15.6679 7.13925 15.7796 7.5 15.75H16.5C16.8607 15.7796 17.2189 15.6679 17.4988 15.4384C17.7787 15.2089 17.9584 14.8796 18 14.52V14.52ZM16.5 9.645V9.105C16.5122 8.79315 16.401 8.48905 16.1903 8.25876C15.9797 8.02846 15.6867 7.89056 15.375 7.875H8.625C8.31329 7.89056 8.02031 8.02846 7.80968 8.25876C7.59904 8.48905 7.48776 8.79315 7.5 9.105V9.645C7.48776 9.95685 7.59904 10.2609 7.80968 10.4912C8.02031 10.7215 8.31329 10.8594 8.625 10.875H15.375C15.6867 10.8594 15.9797 10.7215 16.1903 10.4912C16.401 10.2609 16.5122 9.95685 16.5 9.645V9.645Z" fill="black"/>
                </svg>
                <span className="menu__link">Баннеры</span>
                </li>
                <li className="menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.8 12.8449H12.105C11.8768 12.8166 11.6669 12.7076 11.5148 12.5386C11.3627 12.3695 11.2788 12.1519 11.2788 11.9265C11.2788 11.7012 11.3627 11.4836 11.5148 11.3145C11.6669 11.1454 11.8768 11.0365 12.105 11.0082H16.8C17.0282 11.0365 17.2381 11.1454 17.3902 11.3145C17.5423 11.4836 17.6262 11.7012 17.6262 11.9265C17.6262 12.1519 17.5423 12.3695 17.3902 12.5386C17.2381 12.7076 17.0282 12.8166 16.8 12.8449V12.8449ZM17.73 15.7837C17.73 15.5407 17.6325 15.3074 17.4585 15.1342C17.2845 14.961 17.048 14.8618 16.8 14.858H7.035C6.80678 14.8863 6.59694 14.9952 6.44484 15.1643C6.29274 15.3334 6.20882 15.551 6.20882 15.7763C6.20882 16.0017 6.29274 16.2193 6.44484 16.3884C6.59694 16.5574 6.80678 16.6664 7.035 16.6947H16.8C17.0467 16.6947 17.2832 16.5987 17.4576 16.4279C17.632 16.257 17.73 16.0253 17.73 15.7837V15.7837ZM22.5 7.77551V19.5306C22.5 19.9203 22.342 20.2941 22.0607 20.5696C21.7794 20.8452 21.3978 21 21 21H3C2.60218 21 2.22064 20.8452 1.93934 20.5696C1.65804 20.2941 1.5 19.9203 1.5 19.5306V7.77551C1.5 7.3858 1.65804 7.01206 1.93934 6.7365C2.22064 6.46093 2.60218 6.30612 3 6.30612H4.935V4.10204C4.935 3.80976 5.05353 3.52945 5.26451 3.32278C5.47548 3.11611 5.76163 3 6.06 3C6.35837 3 6.64452 3.11611 6.8555 3.32278C7.06647 3.52945 7.185 3.80976 7.185 4.10204V6.30612H16.935V4.10204C16.935 3.80976 17.0535 3.52945 17.2645 3.32278C17.4755 3.11611 17.7616 3 18.06 3C18.3584 3 18.6445 3.11611 18.8555 3.32278C19.0665 3.52945 19.185 3.80976 19.185 4.10204V6.30612H21C21.3978 6.30612 21.7794 6.46093 22.0607 6.7365C22.342 7.01206 22.5 7.3858 22.5 7.77551ZM20.25 8.5102H3.75V18.7959H20.25V8.5102Z" fill="black"/>
                </svg>
                <span className="menu__link">Семинары</span>
                </li>
                <li className="menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 10.95H10C9.46957 10.95 8.96086 10.7287 8.58579 10.3349C8.21071 9.9411 8 9.40695 8 8.85C8 8.29305 8.21071 7.7589 8.58579 7.36508C8.96086 6.97125 9.46957 6.75 10 6.75H15C15.2652 6.75 15.5196 6.86062 15.7071 7.05754C15.8946 7.25445 16 7.52152 16 7.8C16 8.07848 16.1054 8.34555 16.2929 8.54246C16.4804 8.73937 16.7348 8.85 17 8.85C17.2652 8.85 17.5196 8.73937 17.7071 8.54246C17.8946 8.34555 18 8.07848 18 7.8C18 6.96457 17.6839 6.16335 17.1213 5.57261C16.5587 4.98187 15.7956 4.65 15 4.65H13V2.55C13 2.27152 12.8946 2.00445 12.7071 1.80754C12.5196 1.61062 12.2652 1.5 12 1.5C11.7348 1.5 11.4804 1.61062 11.2929 1.80754C11.1054 2.00445 11 2.27152 11 2.55V4.65H10C8.93913 4.65 7.92172 5.0925 7.17157 5.88015C6.42143 6.6678 6 7.73609 6 8.85C6 9.96391 6.42143 11.0322 7.17157 11.8198C7.92172 12.6075 8.93913 13.05 10 13.05H14C14.5304 13.05 15.0391 13.2712 15.4142 13.6651C15.7893 14.0589 16 14.593 16 15.15C16 15.707 15.7893 16.2411 15.4142 16.6349C15.0391 17.0287 14.5304 17.25 14 17.25H9C8.73478 17.25 8.48043 17.1394 8.29289 16.9425C8.10536 16.7455 8 16.4785 8 16.2C8 15.9215 7.89464 15.6545 7.70711 15.4575C7.51957 15.2606 7.26522 15.15 7 15.15C6.73478 15.15 6.48043 15.2606 6.29289 15.4575C6.10536 15.6545 6 15.9215 6 16.2C6 17.0354 6.31607 17.8366 6.87868 18.4274C7.44129 19.0181 8.20435 19.35 9 19.35H11V21.45C11 21.7285 11.1054 21.9955 11.2929 22.1925C11.4804 22.3894 11.7348 22.5 12 22.5C12.2652 22.5 12.5196 22.3894 12.7071 22.1925C12.8946 21.9955 13 21.7285 13 21.45V19.35H14C15.0609 19.35 16.0783 18.9075 16.8284 18.1198C17.5786 17.3322 18 16.2639 18 15.15C18 14.0361 17.5786 12.9678 16.8284 12.1802C16.0783 11.3925 15.0609 10.95 14 10.95V10.95Z" fill="black"/>
                </svg>
                <span className="menu__link">Промокоды</span>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;