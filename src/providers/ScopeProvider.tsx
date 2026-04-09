"use client";

import { createContext, type ReactNode, useContext, useState } from "react";

interface ScopeContextValue {
	showScope: boolean;
	setShowScope: (show: boolean) => void;
}

const ScopeContext = createContext<ScopeContextValue>({
	showScope: false,
	setShowScope: () => {},
});

export function ScopeProvider({ children }: { children: ReactNode }) {
	const [showScope, setShowScope] = useState(false);
	return (
		<ScopeContext.Provider value={{ showScope, setShowScope }}>
			{children}
		</ScopeContext.Provider>
	);
}

export function useScope() {
	return useContext(ScopeContext);
}

const ScopePageContext = createContext<string | undefined>(undefined);

export function ScopePage({
	id,
	children,
}: {
	id: string;
	children: ReactNode;
}) {
	return (
		<ScopePageContext.Provider value={id}>{children}</ScopePageContext.Provider>
	);
}

export function useScopePageId() {
	return useContext(ScopePageContext);
}

// ── Variation context ────────────────────────────────────────────────

import type { Variation } from "@/components/wireframe/VariationToggle";

interface VariationContextValue {
	variations: readonly Variation[];
	setVariations: (v: readonly Variation[]) => void;
}

const VariationContext = createContext<VariationContextValue>({
	variations: [],
	setVariations: () => {},
});

export function VariationProvider({ children }: { children: ReactNode }) {
	const [variations, setVariations] = useState<readonly Variation[]>([]);
	return (
		<VariationContext.Provider value={{ variations, setVariations }}>
			{children}
		</VariationContext.Provider>
	);
}

export function useVariationContext() {
	return useContext(VariationContext);
}
