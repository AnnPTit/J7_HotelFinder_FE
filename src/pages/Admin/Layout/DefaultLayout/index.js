import classNames from "classnames/bind";

import SideBar from "../components/sideBar";
import Header from "../components/Header";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Header />
      </div>
      <div className={cx("body")}>
        <div className={cx("sider-bar")}>
          <SideBar />
        </div>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
