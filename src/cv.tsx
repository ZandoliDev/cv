import { Entete } from "./Entete"
import { ExperienceEtFormation } from "./ExperienceEtFormation"
import { SchemaCompetences } from "./Schema-competences"

export const Cv = () => {
  return (
    <>
      <div className="max-w-screen-md mx-auto" id="divToExport">
        <Entete />
        <main>
          <SchemaCompetences />
          <ExperienceEtFormation />
        </main>
      </div>
    </>
  )
}
