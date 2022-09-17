import Navbar from "./Navbar/Navbar";

const Header = (props) => {
  const down = props.down;
  return (
    <header>
      <Navbar down={down} />
    </header>
  );
};

export default Header;
