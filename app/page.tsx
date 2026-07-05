import { LandingForm } from "./components/LandingForm";

// Landing (FR-SHELL-01, FR-LAND-01/02). No user is fetched until the visitor acts.
export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-content flex-1 flex-col justify-center gap-10 px-6 py-16">
      <div className="ds-fade-up flex max-w-2xl flex-col gap-5">
        <h1 className="font-serif text-display leading-[1.05]">
          A quieter way to{" "}
          <em className="italic text-accent-primary">read</em> a developer.
        </h1>
        <p className="max-w-md font-sans text-text-muted">
          The aggregate picture GitHub never shows you — explore one
          developer&rsquo;s stat sheet, or battle two head to head across fifteen
          live metrics.
        </p>
      </div>

      <div className="ds-fade-up" style={{ animationDelay: "0.08s" }}>
        <LandingForm />
      </div>
    </div>
  );
}
