import Header from "../component/Header";
import classNames from "classnames/bind";

import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header classNames={cx("header")} />
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
