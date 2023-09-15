// Components
import Logo from "./Logo";
import Links from "./Links";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className="w-[275px] relative">
      <div className="fixed py-1 px-0.5 flex flex-col h-screen">
        <Logo />
        <Links />
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
