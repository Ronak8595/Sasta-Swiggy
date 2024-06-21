import { Link } from "react-router-dom";
import Gen from "../items/Gen.png";

const Title = () => (
  <div className="">
    <Link to="/">
      <img
        data-testid="logo"
        className="w-[12rem] mt-3 sm:w-[22rem] sm:mt-0"
        alt="logo"
        src={Gen}
      />
    </Link>
  </div>
);

export default Title;
