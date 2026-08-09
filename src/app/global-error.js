"use client";

import "./globals.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body>
        <main className="relative grid min-h-screen place-items-center px-6">
          <Card className="relative max-w-xl gap-0 py-0 text-center">
            <CardContent className="px-8 py-7">
              <p className="label">Fatal error</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink-bright">
                The application shell failed to render.
              </h2>
              <Button type="button" className="mt-6 h-11 px-5" onClick={() => reset()}>
                Reload shell
              </Button>
            </CardContent>
          </Card>
        </main>
      </body>
    </html>
  );
}
