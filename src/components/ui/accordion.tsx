"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, useReducedMotion } from "motion/react";

const DISCLOSE = { type: "spring", stiffness: 480, damping: 40, mass: 0.6 } as const;
const CHEVRON = { type: "spring", stiffness: 700, damping: 46, mass: 0.5 } as const;
const EASE = [0.23, 1, 0.32, 1] as const;
const EXIT_EASE = [0.4, 0, 1, 1] as const;
const NONE: readonly string[] = [];

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

type Inertable = HTMLElement & { inert?: boolean };

function useAutoHeight() {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [ready, setReady] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const read = () => {
      const next = el.getBoundingClientRect().height;
      setHeight((prev) => (Math.abs(prev - next) < 0.5 ? prev : next));
    };
    read();
    setReady(true);
    const observer = new ResizeObserver(read);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, height, ready };
}

export type AccordionItem = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export function Accordion({
  items,
  defaultOpen = NONE,
  className = "",
}: {
  items: readonly AccordionItem[];
  defaultOpen?: readonly string[];
  className?: string;
}) {
  const base = useId();
  const [open, setOpen] = useState<string[]>(defaultOpen.slice(0, 1));
  const reduced = useReducedMotion();

  const toggle = useCallback((id: string) => {
    setOpen((prev) => (prev.includes(id) ? [] : [id]));
  }, []);

  return (
    <div
      className={`divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background ${className}`}
    >
      {items.map((item) => (
        <Row
          key={item.id}
          item={item}
          baseId={base}
          open={open.includes(item.id)}
          reduced={Boolean(reduced)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}

function Row({
  item,
  baseId,
  open,
  reduced,
  onToggle,
}: {
  item: AccordionItem;
  baseId: string;
  open: boolean;
  reduced: boolean;
  onToggle: () => void;
}) {
  const { ref, height, ready } = useAutoHeight();
  const headerId = `${baseId}-header-${item.id}`;
  const panelId = `${baseId}-panel-${item.id}`;

  useEffect(() => {
    const el = ref.current as Inertable | null;
    if (!el) return;
    el.inert = !open;
    return () => {
      el.inert = false;
    };
  }, [ref, open]);

  return (
    <div>
      <button
        id={headerId}
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center gap-3 px-5 py-4 text-left outline-none transition-colors hover:bg-background-alt"
      >
        <span
          className={`min-w-0 flex-1 text-[14.5px] font-medium ${
            open ? "text-foreground" : "text-foreground/85"
          }`}
        >
          {item.title}
        </span>
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 256 256"
          fill="none"
          aria-hidden="true"
          className="shrink-0 text-muted"
          initial={false}
          animate={{ rotate: open ? 180 : 0 }}
          transition={reduced ? { duration: 0 } : CHEVRON}
        >
          <path
            d="M208 96l-80 80-80-80"
            stroke="currentColor"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={ready ? { height: open ? height : 0 } : {}}
        transition={reduced ? { duration: 0 } : DISCLOSE}
        style={{ overflow: "hidden", height: ready ? undefined : open ? "auto" : 0 }}
      >
        <div id={panelId} role="region" aria-labelledby={headerId} ref={ref}>
          <motion.div
            initial={false}
            animate={{ opacity: open ? 1 : 0 }}
            transition={
              reduced
                ? { duration: 0 }
                : open
                  ? { duration: 0.18, ease: EASE }
                  : { duration: 0.14, ease: EXIT_EASE }
            }
            className="px-5 pb-4.5 text-[13.5px] leading-relaxed text-muted"
          >
            {item.content}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
