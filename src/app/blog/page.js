import Link from "next/link";
import PageChrome from "@/app/_components/PageChrome";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Writing",
  description: "Notes and articles by Andrew Dakran.",
};

export default function BlogPage() {
  return (
    <PageChrome>
      <span className="kicker">Writing</span>
      <h1 className="page-title max-w-[16ch]">Nothing published yet.</h1>
      <p className="lede mt-6 max-w-[56ch]">
        No posts have gone up so far. When they do, they&rsquo;ll be notes on the things I actually
        hit while building — auth, data modelling, and the parts that are harder than they look.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg" className="h-12 px-6 text-[15px]">
          <Link href="/projects">Read the case studies instead</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-12 px-6 text-[15px]">
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </PageChrome>
  );
}
