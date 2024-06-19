import NavLinks from "./NavLinks";

interface MenuOverlayProps {
  links: LinkItem[];
}

interface LinkItem {
  path: string;
  title: string;
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLinks href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
