// Components
import Logo from "./Logo";
import Links from "./Links";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <div className="sticky w-[275px] top-0 py-1 px-4 flex flex-col h-screen ">
      <Logo />
      <Links />
      <Footer />
    </div>
  );
};

export default Sidebar;
