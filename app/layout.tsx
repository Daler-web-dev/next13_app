import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";
import AuthProvider from "./api/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next - 13 App",
	description: "Generated by Daler",
};
interface Props {
	children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<AuthProvider>
			<html lang="en">
				<body className={inter.className}>
					<NavMenu />
					{children}
				</body>
			</html>
		</AuthProvider>
	);
}
