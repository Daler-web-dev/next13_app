import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavMenuProps {}

const NavMenu: React.FC<NavMenuProps> = () => {
	return (
		<nav className="flex bg-blue-500 text-white h-[70px] justify-between items-center p-3">
			<Link href={"/"}>
				<Image
					src="/vercel.svg"
					alt="NextSpace logo"
					width={216}
					height={30}
				/>
			</Link>
			<ul className="flex gap-2.5 items-center " >
				<li>
					<Link href={"/about"}>About</Link>
				</li>
				<li>
					<Link href={"/blog"}>Blog</Link>
				</li>
				<li>
					<Link href={"/users"}>Users</Link>
				</li>
				<li>
					<button>sign in</button>
				</li>
			</ul>
		</nav>
	);
};

export default NavMenu;
