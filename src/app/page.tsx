import { PostList } from "@/components/post-list";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { ScrollLink } from "@/components/scroll-link";
import { Eyebrow, Section } from "@/components/section";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { getSections } from "@/lib/sections";
import { cn, formatPeriod } from "@/lib/utils";
import { MapPinIcon } from "lucide-react";
import Image from "next/image";

export default async function Page() {
	const [posts, sections] = await Promise.all([getBlogPosts(), getSections()]);
	const section = Object.fromEntries(sections.map((s) => [s.id, s]));
	const { travel } = DATA.about;

	return (
		<main className="mx-auto max-w-[1344px] px-6 pb-20 leading-[normal]">

			<section className="px-2 pt-28">
				<div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_clamp(220px,30%,420px)]">
					<div>
						<div className="inline-flex items-center gap-2.5 rounded-full bg-lime px-3.5 py-2 font-mono text-[12px] font-medium uppercase tracking-[.14em] text-lime-foreground">
							<MapPinIcon aria-hidden className="size-[13px]" strokeWidth={2.2} />
							{DATA.location}
						</div>
						<h1 className="mt-9 text-balance text-[clamp(44px,6.6vw,120px)] font-bold uppercase leading-[.9] tracking-[-.05em]">
							Frontend
							<br />
							by instinct<span className="text-lime-ink">.</span>
						</h1>
						<p className="mt-10 max-w-[620px] text-pretty text-[22px] leading-[1.45] text-body">
							{DATA.hero.lead}
						</p>
						<div className="mt-10 flex flex-wrap gap-3">
							<ScrollLink
								href="/#work"
								className="inline-flex items-center gap-2.5 rounded-lg bg-foreground px-[22px] py-3.5 text-[15px] font-semibold text-background transition-colors hover:bg-lime hover:text-lime-foreground"
							>
								See the work <span aria-hidden>↓</span>
							</ScrollLink>
							<ScrollLink
								href="/#contact"
								className="inline-flex items-center gap-2.5 rounded-lg border border-line-strong px-[22px] py-3.5 text-[15px] font-semibold text-foreground transition-colors hover:border-lime-ink"
							>
								Say hello <span aria-hidden className="text-[12px]">↗</span>
							</ScrollLink>
						</div>
					</div>
					<figure className="relative aspect-[4/5] max-h-[420px] overflow-hidden rounded-2xl border bg-slot md:aspect-auto md:max-h-none md:min-h-[420px]">
						<Image
							src={DATA.avatarUrl}
							alt={DATA.name}
							fill
							priority
							sizes="(min-width: 768px) 420px, 100vw"
							className="object-cover"
						/>
					</figure>
				</div>

				<div className="pt-[72px]">
					<div className="flex items-baseline justify-between font-mono text-[11px] tracking-[.12em] text-dim">
						<span>THE PATH SO FAR</span>
						<span>2017 → NOW</span>
					</div>
					<ol className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-y-6">
						{DATA.path.map((step, i) => {
							const current = i === DATA.path.length - 1;
							return (
								<li
									key={step.name}
									className={cn(
										"flex flex-col gap-3.5 border-t pr-5",
										current ? "border-lime" : "border-line-strong"
									)}
								>
									<span
										aria-hidden
										className={cn(
											"-ml-px -mt-1.5 size-[15px] rounded-full border-2 border-background",
											current
												? "bg-lime shadow-[0_0_0_1px_#c8c800]"
												: "bg-background shadow-[0_0_0_1px_var(--dim)]"
										)}
									/>
									<span className="font-mono text-[11px] tracking-[.08em] text-muted-foreground">
										{step.when}
									</span>
									<span>
										<span className="block whitespace-nowrap text-[16px] font-semibold tracking-[-.02em]">
											{step.name}
										</span>
										<span className="mt-[3px] block text-[13px] text-muted-foreground">
											{step.role}
										</span>
									</span>
									<span className="font-mono text-[11px] text-dim">{step.place}</span>
								</li>
							);
						})}
					</ol>
				</div>
			</section>

			<Section id="about" no={section.about.no} label={section.about.eyebrow}>
				<h2 className="text-balance text-[clamp(30px,3.6vw,46px)] font-medium leading-[1.15] tracking-[-.03em]">
					{DATA.about.headline}
				</h2>
				<div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(260px,100%),1fr))] gap-10 text-[16px] leading-[1.7] text-body">
					{DATA.about.paragraphs.map((paragraph) => (
						<p key={paragraph} className="text-pretty">
							{paragraph}
						</p>
					))}
				</div>
				<div className="mt-14 grid items-start gap-10 border-t pt-10 sm:grid-cols-[minmax(0,1fr)_auto]">
					<div>
						<div className="font-mono text-[11px] tracking-[.12em] text-muted-foreground">
							WHEN I&apos;M NOT SHIPPING
						</div>
						<p className="mt-4 max-w-[640px] text-pretty text-[20px] font-medium leading-[1.5] tracking-[-.015em]">
							{travel.pull}
						</p>
						<ul className="mt-6 max-w-[640px]">
							{travel.moments.map((moment) => (
								<li
									key={moment.place}
									className="grid grid-cols-[88px_minmax(0,1fr)] items-baseline gap-4 border-t py-3"
								>
									<span className="font-mono text-[11px] tracking-[.08em] text-muted-foreground">
										{moment.place}
									</span>
									<span className="text-pretty text-[16px] leading-[1.6] text-body">
										{moment.text}
									</span>
								</li>
							))}
						</ul>
						<p className="mt-6 max-w-[640px] text-pretty text-[16px] leading-[1.7] text-body">
							{travel.closing}
						</p>
					</div>
					<div className="flex flex-col gap-1.5 sm:items-end sm:pt-7 sm:text-right">
						<span className="text-[64px] font-bold leading-none tracking-[-.05em]">
							{travel.countries}
						</span>
						<span className="font-mono text-[11px] tracking-[.12em] text-muted-foreground">
							COUNTRIES
						</span>
						{/* One dot per country */}
						<span aria-hidden className="mt-4 grid w-fit grid-cols-8 gap-1.5">
							{Array.from({ length: travel.countries }, (_, i) => (
								<span key={i} className="size-1.5 rounded-full bg-lime-ink" />
							))}
						</span>
					</div>
				</div>
			</Section>

			<Section id="experience" no={section.experience.no} label={section.experience.eyebrow}>
				{DATA.work.map((job) => (
					<ResumeCard
						key={job.id}
						title={job.company}
						href={job.href}
						subtitle={[job.title, job.type, job.location].filter(Boolean).join(" · ")}
						period={formatPeriod(job.start, job.end)}
						description={job.blurb}
						stack={job.stack}
					/>
				))}
				<div className="border-t" />
			</Section>

			<section id="work" className="scroll-mt-24 px-2 pt-28">
				<div className="grid gap-6 md:grid-cols-[minmax(200px,3fr)_minmax(0,9fr)] md:items-end md:gap-12">
					<Eyebrow no={section.work.no}>{section.work.eyebrow}</Eyebrow>
					<h2 className="text-[clamp(30px,3.6vw,46px)] font-medium leading-[1.15] tracking-[-.03em]">
						Two things worth opening.
					</h2>
				</div>
				<div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-6">
					{DATA.projects.map((project, i) => (
						<ProjectCard
							key={project.title}
							no={String(i + 1).padStart(2, "0")}
							title={project.title}
							href={project.href}
							year={project.year}
							kind={project.kind}
							status={project.status}
							tagline={project.tagline}
							description={project.description}
							tags={project.technologies}
							image={project.image}
						/>
					))}
				</div>
			</section>

			<Section id="toolbox" no={section.toolbox.no} label={section.toolbox.eyebrow}>
				<div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-6 gap-y-8">
					{DATA.toolbox.map(({ group, items }) => (
						<div key={group} className="border-t pt-4">
							<div className="font-mono text-[11px] tracking-[.12em] text-muted-foreground">
								{group}
							</div>
							<ul className="mt-3.5 flex flex-wrap gap-2">
								{items.map((item) => (
									<li key={item} className="rounded-md border px-2.5 py-1.5 text-[13px]">
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Section>

			{section.writing && (
				<Section id="writing" no={section.writing.no} label={section.writing.eyebrow}>
					<PostList posts={posts} />
				</Section>
			)}

			<section id="contact" className="scroll-mt-24 px-2 pt-36">
				<Eyebrow no={section.contact.no}>{section.contact.eyebrow}</Eyebrow>
				<h2 className="mt-8 text-balance text-[clamp(48px,8vw,112px)] font-bold uppercase leading-[.92] tracking-[-.05em]">
					Let&apos;s build
					<br />
					something<span className="text-lime-ink">.</span>
				</h2>
				<a
					href={`mailto:${DATA.contact.email}`}
					className="mt-12 inline-block border-b-2 border-lime pb-1.5 text-[clamp(20px,2.6vw,34px)] font-medium tracking-[-.02em] transition-colors hover:text-lime-ink"
				>
					{DATA.contact.email}
				</a>
				<footer className="mt-24 flex flex-wrap items-center justify-between gap-6 border-t pt-6 font-mono text-[12px] uppercase text-dim">
					<span>
						© {new Date().getFullYear()} {DATA.name} · {DATA.location}
					</span>
					<div className="flex gap-6">
						{Object.values(DATA.contact.social).map((social) => (
							<a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground transition-colors hover:text-lime-ink"
							>
								{social.name} ↗
							</a>
						))}
					</div>
				</footer>
			</section>
		</main>
	);
}
