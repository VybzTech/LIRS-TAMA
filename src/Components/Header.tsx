import Logo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <header className="my-6">
      <div className="flex ">
        <img
          className="w-16 object-contain mr-4"
          src={Logo}
          alt="Company Logo"
        />
        <h1 className="headers">LAGOS STATE INTERNAL REVENUE SERVICE</h1>
      </div>
    </header>
  );
};

export default Header;
