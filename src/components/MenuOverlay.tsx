import NavLinks from "./NavLinks";

interface MenuOverlayProps {
  links: LinkItem[];
  extra: any;
}

interface LinkItem {
  path: string;
  title: string;
}

const MenuOverlay = ({ links, extra }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center bg-white dark:bg-[#020817] bg-opacity-90 dark:bg-opacity-90">
      {links.map((link, index) => (
        <li key={index}>
          <NavLinks href={link.path} title={link.title} />
        </li>
      ))}
      {extra && <li>{extra}</li>}
    </ul>
  );
};

export default MenuOverlay;
