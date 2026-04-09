/**
 * Central wireframe page registry.
 *
 * Add a new wireframe by adding an entry here and creating the matching
 * page file at app/(wireframes)/<id>/page.tsx. Everything else — the
 * index, top bar badges, and scope lookups — derives from this array.
 */

export type ReviewStatus = "wip" | "review" | "with-client" | "approved";

export interface WireframePage {
	id: string;
	title: string;
	description: string;
	status: ReviewStatus;
}

export const pages: WireframePage[] = [
	{
		id: "example",
		title: "Example Page",
		description: "A starter wireframe page showing the template components",
		status: "wip",
	},
];

export const STATUS_LABELS: Record<ReviewStatus, string> = {
	wip: "WIP",
	review: "Review",
	"with-client": "With client",
	approved: "Approved",
};

export const STATUS_STYLES: Record<ReviewStatus, string> = {
	wip: "border-gray-300 text-gray-400",
	review: "border-amber-400 text-amber-600",
	"with-client": "border-blue-400 text-blue-600",
	approved: "border-green-400 text-green-600",
};
