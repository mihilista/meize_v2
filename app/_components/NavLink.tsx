import Link from "next/link";

import type { ReactNode } from "react";

interface NavLinkProps {
	href: string;
	children: ReactNode;
	className?: string;
}

export default function NavLink({
	href,
	children,
	className = "",
	...rest
}: NavLinkProps) {
	return (
		<Link
			href={href}
			className={`uppercase font-bold hover:text-primary transition-colors duration-200 ${className}`}
			{...rest}
		>
			{children}
		</Link>
	);
}
