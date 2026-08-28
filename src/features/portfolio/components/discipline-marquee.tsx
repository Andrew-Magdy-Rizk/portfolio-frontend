import { disciplines } from "@/features/portfolio/data/portfolio-content"

const repeatedDisciplines = [...disciplines, ...disciplines, ...disciplines]

export function DisciplineMarquee() {
  return (
    <div className="ticker" aria-label="Areas of expertise">
      <div className="ticker-track">
        {repeatedDisciplines.map((discipline, index) => <span key={`${discipline}-${index}`}>{discipline}<b>✦</b></span>)}
      </div>
    </div>
  )
}
