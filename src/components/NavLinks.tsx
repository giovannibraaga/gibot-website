import Link from "next/link";

interface NavLinksProps {
  href: string;
  title: string;
}

const NavLinks = ({ href, title }: NavLinksProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0"
    >
      {title}
    </Link>
  );
};

export default NavLinks;
