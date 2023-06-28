import classNames from "classnames/bind";
import Header from "../component/Header";
import styles from "./HaftLayout.module.scss";

const cx = classNames.bind(styles);

function HaftLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("wrapper")}>{children}</div>
    </div>
  );
}

export default HaftLayout;
