"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ScopeToggle from "@/components/wireframe/ScopeToggle";
import { MvpBadge, StatusBadge } from "@/components/wireframe/StatusBadge";
import { pages } from "@/lib/pages";
import { isPageMvp } from "@/lib/scope";
import { t } from "@/lib/strings";

export default function WireframeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const pageId = pathname.replace(/^\//, "").split("/")[0];
	const page = pages.find((p) => p.id === pageId);

	return (
		<>
			<header className="relative z-50 flex items-center justify-between border-b border-gray-300 bg-white px-[var(--margin-xl)] py-2">
				<Link
					href="/"
					className="font-mono text-body text-gray-500 underline hover:text-gray-600"
				>
					&larr; {t("nav.backToIndex")}
				</Link>
				<div className="flex items-center gap-2">
					<ScopeToggle />
					{page ? (
						<>
							{isPageMvp(page.id) && <MvpBadge />}
							<StatusBadge status={page.status} />
						</>
					) : (
						<span className="font-mono text-label uppercase text-gray-500">
							{t("nav.wireframe")}
						</span>
					)}
				</div>
			</header>

			<main className="flex-1">{children}</main>

			<footer className="border-t border-gray-300">
				<div className="px-[var(--margin-xl)] py-8">
					<div className="flex items-center justify-between">
						<div>
							<span className="font-mono text-body font-bold uppercase tracking-wide">
								{t("footer.name")}
							</span>
							<p className="mt-1 font-mono text-meta text-gray-500">
								{t("footer.tagline")}
							</p>
						</div>
						<p className="font-mono text-meta text-gray-500">
							{t("footer.disclaimer")}
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
