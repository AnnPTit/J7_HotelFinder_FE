import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul>
      <Link to={"/admin"}>
        <li>Check in</li>
      </Link>
      <Link to={"/checkout"}>
        <li>Quan lí Khach Hang </li>
      </Link>
      <Link to={"/admin"}>
        <li>Quan li nhan vien</li>
      </Link>
      <Link to={"/admin"}>
        <li>Quan li hoa don </li>
      </Link>
    </ul>
  );
}

export default SideBar;
