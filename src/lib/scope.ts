/**
 * Centralised scope annotations for wireframe sections and components.
 *
 * Each entry maps a "pageId/label" key to its MVP status, optional notes,
 * and an optional issue tracker URL. WireframeSection and ScopeMark look
 * up their annotations automatically via the ScopePage context.
 */

export interface ScopeEntry {
	mvp: boolean;
	note?: string;
	issueUrl?: string;
}

/**
 * Helper to build issue tracker URLs. Replace with your own tracker.
 * Examples:
 *   const linear = (id: string) => `https://linear.app/team/issue/${id}`;
 *   const jira = (id: string) => `https://yourorg.atlassian.net/browse/${id}`;
 */
const issue = (id: string) => `https://linear.app/team/issue/${id}`;

export const scope: Record<string, ScopeEntry> = {
	// ── Example page ───────────────────────────────────────────────────
	"example/Hero": { mvp: true, issueUrl: issue("EX-1") },
	"example/Features": {
		mvp: true,
		note: "Content TBD",
		issueUrl: issue("EX-2"),
	},
	"example/Contact form": {
		mvp: false,
		note: "Form integration TBD",
		issueUrl: issue("EX-3"),
	},
};

export function getAnnotation(
	pageId: string | undefined,
	label: string,
): ScopeEntry | undefined {
	if (!pageId) return undefined;
	return scope[`${pageId}/${label}`];
}

/** A page is MVP if it has at least one section marked mvp: true. */
export function isPageMvp(pageId: string): boolean {
	const prefix = `${pageId}/`;
	return Object.entries(scope).some(
		([key, entry]) => key.startsWith(prefix) && entry.mvp,
	);
}
