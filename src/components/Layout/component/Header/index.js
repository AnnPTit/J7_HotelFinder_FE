import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button as BootstrapBTN } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "../../../Popper/Menu";
import images from "../../../../assets/images";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Room",
    to: "/room",
    type: "link",
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const handleMenuChange = (menuItem) => {
    console.log(menuItem.type);
    // switch (menuItem.type) {
    //   case "language":
    //     break;
    //   case "link":

    //   default:
    // }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("slider")}>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: 700 }}
              className={cx("d-block w-100 slider-img")}
              src="https://smartslider3.com/wp-content/uploads/slider/cache/2246430895b9002bd1db7616d566b283/slide2.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 700 }}
              className={cx("d-block w-100 slider-img")}
              src="https://www.millenniumparkpanchgani.com/mobile/images/folder/slider-5.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: 700 }}
              className={cx("d-block w-100 slider-img")}
              src="https://www.millenniumparkpanchgani.com/mobile/images/folder/slider-1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={cx("header-body")}>
        <div className={cx("menu-list")}>
          <div className={cx("menu-item")}> Home</div>
          <div className={cx("menu-item")}> Room</div>
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <div className={cx("menu-item")}> Service</div>
          </Menu>
          <div className={cx("menu-item")}> About</div>
          <div className={cx("menu-item")}> Contact</div>
        </div>
        <div className={cx("header-logo")}>
          <img src={images.logo} alt="logo" className={cx("logo")} />
        </div>
        <div className={cx("header-item")}>
          <BootstrapBTN>BOOK NOW</BootstrapBTN>
        </div>
      </div>
    </div>
  );
}

export default Header;
