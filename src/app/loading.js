import { Card, CardContent } from "@/components/ui/card";

export default function Loading() {
  return (
    <main className="relative grid min-h-screen place-items-center px-6">
      <div className="backdrop fixed" aria-hidden="true" />
      <Card className="relative gap-0 py-0 text-center">
        <CardContent className="px-8 py-7">
          <p className="label">Loading</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink-bright">
            Preparing the next view.
          </h2>
        </CardContent>
      </Card>
    </main>
  );
}
