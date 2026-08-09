/**
 * Visible marker for content that has no source yet.
 *
 * The data file marks unfilled fields either as `null` or as a string
 * starting with "TODO:". Nothing invented ships — anything unfilled is
 * obvious on screen and greppable in the repo.
 */

export function isTodo(value) {
  return value == null || (typeof value === "string" && value.trimStart().startsWith("TODO:"));
}

/** Strips the "TODO:" prefix so the marker reads as a sentence. */
function message(value, fallback) {
  if (typeof value !== "string") return fallback;
  const stripped = value.trimStart().replace(/^TODO:\s*/, "");
  return stripped || fallback;
}

export default function Todo({ value, fallback = "content pending", block = false }) {
  return (
    <span className={block ? "todo todo-block" : "todo"}>
      <span aria-hidden="true">✎</span>
      <span>
        <strong className="font-normal">TODO</strong> — {message(value, fallback)}
      </span>
    </span>
  );
}
