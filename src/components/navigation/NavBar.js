import Logo from "./Logo";
import NavItem from "./NavItem";
import { Tab } from "@headlessui/react";

const navItems = [
  {
    name: "RECYCLE GO WHERE?",
    href: "/",
    image: "/static/pillarLogos/goWhereLogo.png",
  },
  {
    name: "RECYCLE CAN MEH?",
    href: "/recycle-can-meh",
    image: "/static/pillarLogos/canMehLogo.png",
  },
  {
    name: "RECYCLE HOW AH?",
    href: "/recycle-how-ah",
    image: "/static/pillarLogos/howAhLogo.png",
  },
];

export default function NavBar() {
  return (
    <header className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      <Logo />
      <div className="w-full px-2  sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-teal-900/20 p-1">
            {navItems.map((item) => (
              <NavItem item={item} key={item.name} />
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    </header>
  );
}
