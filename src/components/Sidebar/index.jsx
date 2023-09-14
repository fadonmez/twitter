// Components
import Logo from "./Logo";
import Links from "./Links";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className="w-[275px] h-screen py-1 px-0.5 flex flex-col">
      <Logo />
      <Links />
      <Footer />
    </div>
  );
};

export default Sidebar;
