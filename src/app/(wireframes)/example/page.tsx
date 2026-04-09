"use client";

import {
	ImagePlaceholder,
	ScopeMark,
	SectionLabel,
	WireframeSection,
} from "@/components/wireframe";
import { t } from "@/lib/strings";
import { ScopePage } from "@/providers/ScopeProvider";

export default function ExamplePage() {
	return (
		<ScopePage id="example">
			<div className="min-h-screen bg-white">
				{/* Hero */}
				<WireframeSection
					label="Hero"
					className="border-b border-gray-300 px-[var(--margin-xl)] py-12"
				>
					<div className="mx-auto max-w-[var(--container-xl)]">
						<SectionLabel>{t("example.subtitle")}</SectionLabel>
						<h1 className="mt-2 font-mono text-page font-semibold leading-[1.15] tracking-tight">
							{t("example.heroHeading")}
						</h1>
						<p className="mt-4 max-w-[var(--container-md)] font-mono text-body text-gray-600">
							{t("example.heroText")}
						</p>
						<ImagePlaceholder
							aspect="21/9"
							label="[Hero image]"
							className="mt-8 border border-gray-300"
						/>
					</div>
				</WireframeSection>

				{/* Features */}
				<WireframeSection
					label="Features"
					className="mx-auto max-w-[var(--container-xl)] px-[var(--margin-xl)] py-12"
				>
					<h2 className="mb-8 font-mono text-section font-medium">
						{t("example.featuresHeading")}
					</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
						{[
							{
								title: t("example.feature1Title"),
								desc: t("example.feature1Desc"),
							},
							{
								title: t("example.feature2Title"),
								desc: t("example.feature2Desc"),
							},
							{
								title: t("example.feature3Title"),
								desc: t("example.feature3Desc"),
							},
						].map((feature) => (
							<div key={feature.title} className="border border-gray-300 p-5">
								<h3 className="font-mono text-card font-medium">
									{feature.title}
								</h3>
								<p className="mt-2 font-mono text-meta text-gray-500">
									{feature.desc}
								</p>
							</div>
						))}
					</div>
				</WireframeSection>

				{/* Contact form — post-MVP example */}
				<WireframeSection
					label="Contact form"
					className="border-t border-gray-300 px-[var(--margin-xl)] py-12"
				>
					<div className="mx-auto max-w-[var(--container-md)]">
						<ScopeMark label="Contact form">
							<h2 className="mb-4 font-mono text-section font-medium">
								{t("example.contactHeading")}
							</h2>
							<p className="font-mono text-body text-gray-600">
								{t("example.contactText")}
							</p>
							<div className="mt-6 flex h-48 items-center justify-center border border-dashed border-gray-300">
								<span className="font-mono text-meta text-gray-500">
									[Form placeholder]
								</span>
							</div>
						</ScopeMark>
					</div>
				</WireframeSection>
			</div>
		</ScopePage>
	);
}
