import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const NavLink = ({
  to,
  children,
  className = "",
  onClick,
}: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative text-gray-300 hover:text-purple-500 transition-colors ${className}`}
      onClick={onClick}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
        />
      )}
    </Link>
  );
};
