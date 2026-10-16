import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page empty-page">
      <span className="eyebrow">Page not found</span>
      <h1>Let’s get back to your notes.</h1>
      <p>This chapter or page does not exist.</p>
      <Link href="/notes" className="button primary">
        Browse study notes
      </Link>
    </div>
  );
}
