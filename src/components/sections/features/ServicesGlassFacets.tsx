import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import IndentTitle from "@/components/kit/IndentTitle";
import BlurReveal from "@/components/kit/BlurReveal";
import ImageScrollParallax from "@/components/animation/ImageScrollParallax";
import { useKitMotion } from "@/components/kit/kitMotion";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Service = { title: string; description?: string; imageSrc?: string; imageAlt?: string; href?: string; linkText?: string };

type ServicesGlassFacetsProps = {
  tag?: string;
  title?: string;
  description?: string;
  items?: Service[];
  ariaLabel?: string;
  className?: string;
};

const SHRINK = 0.05;
const TILT = 8;
const PEEK = 14;

type CardProps = { item: Service; index: number; total: number; progress: MotionValue<number> };

const Card = ({ item, index, total, progress }: CardProps) => {
  const reduce = useReducedMotion();
  const kit = useKitMotion();
  const lastIndex = total - 1;
  const segment = 1 / Math.max(lastIndex, 1);
  const start = Math.min(index * segment, 0.999);
  const behind = lastIndex - index;
  const scale = useTransform(progress, [start, 1], [1, 1 - behind * SHRINK]);
  const rotateX = useTransform(progress, [start, Math.min(start + segment, 1)], [0, behind ? TILT : 0]);
  const dim = useTransform(progress, [start, 1], [0, Math.min(behind * 0.16, 0.5)]);
  const still = reduce || !behind;

  return (
    <li className="sticky [perspective:1600px]" style={{ top: `calc(clamp(4.5rem, 10svh, 7rem) + ${index * PEEK}px)` }}>
      <motion.article
        style={still ? undefined : { scale, rotateX }}
        className="group relative grid w-full origin-top grid-cols-1 gap-y-[clamp(1.25rem,3vw,2rem)] overflow-hidden rounded-[var(--radius-card)] border border-border bg-card p-[clamp(0.75rem,1.2vw,1rem)] text-card-foreground will-change-transform lg:grid-cols-12 lg:gap-x-[var(--gap)]"
      >
        {item.imageSrc && (
          <ImageScrollParallax imageSrc={item.imageSrc} imageAlt={item.imageAlt ?? item.title} strength={0.12 + (index % 3) * 0.04} className="aspect-[4/3] rounded-[var(--radius-image)] lg:col-span-7 lg:aspect-[3/2] lg:max-h-[min(62svh,36rem)]" />
        )}
        <div className={cn("flex min-w-0 flex-col justify-between gap-[clamp(1.5rem,4vw,2.5rem)] px-[clamp(0.25rem,1vw,0.75rem)] pb-[clamp(0.25rem,1vw,0.75rem)] lg:py-[clamp(0.5rem,1.4vw,1.25rem)] lg:px-[clamp(0.5rem,1.6vw,1.5rem)]", item.imageSrc ? "lg:col-span-5" : "lg:col-span-12")}>
          <div className="flex items-baseline justify-between gap-4 border-b border-border pb-[0.9rem] text-[length:var(--text-label)] tabular-nums text-muted-foreground">
            <p aria-hidden="true">{String(index + 1).padStart(2, "0")}</p>
            <p aria-hidden="true">/ {String(total).padStart(2, "0")}</p>
          </div>
          <div className="flex flex-col gap-[clamp(0.75rem,1.6vw,1.25rem)]">
            <motion.div initial={reduce ? "show" : "hide"} whileInView="show" viewport={{ once: true }} className="overflow-hidden pb-[0.15em] -mb-[0.15em]">
              <motion.h3 variants={{ hide: { y: "105%" }, show: { y: "0%" } }} transition={{ duration: kit.slow, ease: kit.ease }} className="text-balance text-[length:var(--text-h2)] leading-[1] [overflow-wrap:anywhere]">
                {item.title}
              </motion.h3>
            </motion.div>
            <BlurReveal delay={0.1} className="flex flex-col items-start gap-3">
              {item.description && <p className="max-w-[26rem] text-pretty text-[length:var(--text-body)] leading-[1.5] text-muted-foreground">{item.description}</p>}
              {item.href && (
                <a href={item.href} className="btn-link">
                  {item.linkText ?? "Learn more"}
                  <svg viewBox="0 0 12 12" aria-hidden="true" className="size-2.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <path d="M2 10L10 2M4 2h6v6" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </a>
              )}
            </BlurReveal>
          </div>
        </div>
        {!still && <motion.div aria-hidden="true" style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />}
      </motion.article>
    </li>
  );
};

const ServicesGlassFacets = ({
  tag = "Services",
  title = "What we make",
  description = "Objects, editions and commissions, all cast and finished in our own studio.",
  items = [
    { title: "Objects", description: "Vases, bowls and weights in small runs of fifty.", href: "#" },
    { title: "Lighting", description: "Cast glass shades that colour a room from inside.", href: "#" },
    { title: "Commissions", description: "One piece, made for one space, from the first sketch.", href: "#" },
  ],
  ariaLabel,
  className,
}: ServicesGlassFacetsProps) => {
  const kit = useKitMotion();
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.0005 });

  return (
    <section aria-label={ariaLabel ?? title} className={cn("relative overflow-x-clip py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto w-[var(--container)]">
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-12 lg:gap-x-[var(--gap)]">
          {tag && <p className="text-[length:var(--text-label)] text-muted-foreground lg:col-span-3 lg:pt-[0.55em]">{tag}</p>}
          <IndentTitle text={title} className="text-[length:var(--text-h1)] lg:col-span-5 lg:col-start-4" />
          {description && <p className="max-w-[24rem] text-balance text-[length:var(--text-body)] leading-[1.5] text-muted-foreground lg:col-span-3 lg:col-start-10 lg:self-end">{description}</p>}
        </div>
        <motion.div aria-hidden="true" initial={reduce ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "0px 0px -6% 0px" }} transition={{ duration: kit.slow, ease: kit.ease }} className="mt-[clamp(1.5rem,3vw,3rem)] h-px origin-left bg-border" />
        <ul ref={listRef} className="mt-[clamp(1.5rem,3vw,3rem)] flex flex-col gap-[12svh]">
          {items.map((item, index) => (
            <Card key={index} item={item} index={index} total={items.length} progress={progress} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesGlassFacets;
