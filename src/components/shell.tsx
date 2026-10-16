"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  LayoutDashboard,
  ClipboardList,
  Bookmark,
  Network,
  ArrowUpRight,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { chapters } from "@/lib/catalog";
import { SearchDialog } from "./search";
import { StorageNotice, useProgress } from "./progress";

const navigation = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/notes", label: "Study notes", icon: BookOpen },
  { href: "/practice", label: "Practice exams", icon: ClipboardList },
  { href: "/bookmarks", label: "Bookmarks", icon: Bookmark },
  { href: "/topic-map", label: "Topic map", icon: Network },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { completed } = useProgress();
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileDialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    mobileDialog.current?.close();
  }, [pathname]);
  const activeTitle =
    navigation.find(
      (item) => item.href !== "/" && pathname.startsWith(item.href),
    )?.label ??
    (pathname === "/study-guide"
      ? "Study guide"
      : pathname === "/about"
        ? "About this project"
        : "Overview");
  const sidebar = (
    <>
      <Link href="/" className="brand" aria-label="Cloud notes home">
        <span className="brand-name">
          cloud<span>notes</span>
          <span className="brand-dot">.</span>
        </span>
        <span className="brand-subtitle">AWS Cloud Practitioner</span>
      </Link>
      <div className="sidebar-content">
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                href={href}
                key={href}
                className={`nav-item ${active ? "active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <Icon size={18} />
                <span>{label}</span>
                {href === "/practice" && <span className="nav-count">23</span>}
              </Link>
            );
          })}
        </nav>
        <div className="sidebar-label">
          Your study path{" "}
          <span>
            {completed.length}/{chapters.length}
          </span>
        </div>
        <nav className="chapter-nav" aria-label="Chapter navigation">
          {chapters.map((chapter, index) => (
            <Link
              prefetch={false}
              href={`/notes/${chapter.slug}`}
              className={`chapter-nav-item ${pathname === `/notes/${chapter.slug}` ? "current" : ""}`}
              key={chapter.slug}
              aria-current={
                pathname === `/notes/${chapter.slug}` ? "page" : undefined
              }
            >
              <span
                className={`chapter-number ${completed.includes(chapter.slug) ? "done" : ""}`}
              >
                {completed.includes(chapter.slug)
                  ? "✓"
                  : String(index + 1).padStart(2, "0")}
              </span>
              <span>{chapter.title}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="sidebar-bottom">
        <Link href="/study-guide">
          <BookOpen size={17} /> CLF-C02 study guide <ChevronRight size={15} />
        </Link>
        <Link href="/about">
          About & attribution <ArrowUpRight size={14} />
        </Link>
      </div>
    </>
  );
  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <aside className="sidebar">{sidebar}</aside>
      <dialog
        ref={mobileDialog}
        className="mobile-menu"
        aria-label="Navigation menu"
        onClose={() => setMenuOpen(false)}
        onClick={(event) => {
          if (
            event.target === mobileDialog.current ||
            (event.target instanceof Element && event.target.closest("a"))
          )
            mobileDialog.current?.close();
        }}
      >
        <div className="mobile-menu-inner">
          <button
            className="icon-button menu-close"
            aria-label="Close menu"
            onClick={() => mobileDialog.current?.close()}
          >
            <X size={20} />
          </button>
          {sidebar}
        </div>
      </dialog>
      <div className="workspace">
        <header className="topbar">
          <div className="breadcrumb">
            <button
              className="mobile-menu-button"
              aria-expanded={menuOpen}
              onClick={() => {
                mobileDialog.current?.showModal();
                setMenuOpen(true);
              }}
            >
              <Menu size={19} />
              <span>Menu</span>
            </button>
            <span className="breadcrumb-root">Your workspace</span>
            <ChevronRight size={14} />
            <span>{activeTitle}</span>
          </div>
          <SearchDialog />
        </header>
        <StorageNotice />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="footer">
          <span>
            <a
              href="https://github.com/Zikri809/aws-cloud-practitioner-notes"
              target="_blank"
              rel="noreferrer"
            >
              Our repository
            </a>
            {" · "}Original notes by{" "}
            <a
              href="https://github.com/kananinirav/AWS-Certified-Cloud-Practitioner-Notes"
              target="_blank"
              rel="noreferrer"
            >
              Nirav Kanani
            </a>
            .
          </span>
          <Link href="/about">
            Independent study resource. Not affiliated with AWS.
          </Link>
        </footer>
      </div>
    </div>
  );
}
