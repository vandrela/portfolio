import { NavLink } from "react-router-dom";

interface NavigationLink {
  to: string;
  text: string;
}

interface HeaderProps {
  navigationLinks: NavigationLink[];
}

export const Header = ({ navigationLinks }: HeaderProps) => {
  return (
    <header className="w-full h-20 bg-slate-400 px-20 flex justify-end items-center">
      <nav>
        <ul className="flex gap-10 text-2xl font-semibold">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to} className="cursor-pointer hover:text-white">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
