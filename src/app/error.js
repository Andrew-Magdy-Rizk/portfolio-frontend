"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Error({ reset }) {
  return (
    <main className="relative grid min-h-screen place-items-center px-6">
      <div className="backdrop fixed" aria-hidden="true" />
      <Card className="relative max-w-xl gap-0 py-0 text-center">
        <CardContent className="px-8 py-7">
          <p className="label">Error</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink-bright">
            Something broke while rendering this page.
          </h2>
          <Button type="button" className="mt-6 h-11 px-5" onClick={() => reset()}>
            Try again
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
