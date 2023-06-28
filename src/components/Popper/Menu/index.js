import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import MenuItem from "./MenuItem";
import { Wrapper as PopperWapper } from "../../Popper";
import Header from "./Header";

const cx = classNames.bind(styles);
const defaultFn = (item) => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      placement="top"
      delay={[200, 500]}
      render={(attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
          <PopperWapper className={cx("menu-popper")}>
            <Header
              title="Languge"
              onBack={() => {
                console.log(history.length);
                history.length > 1 &&
                  setHistory((prev) => prev.slice(0, prev.length - 1));
              }}
            />
            {renderItems()}
          </PopperWapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
