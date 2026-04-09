import type { Metadata } from "next";
import { ScopeProvider } from "@/providers/ScopeProvider";
import "./globals.css";

export const metadata: Metadata = {
	title: {
		template: "%s | Wireframes",
		default: "Wireframes",
	},
	description: "Interactive wireframes for stakeholder review",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full antialiased">
			<body className="flex min-h-full flex-col font-mono">
				<ScopeProvider>{children}</ScopeProvider>
			</body>
		</html>
	);
}
