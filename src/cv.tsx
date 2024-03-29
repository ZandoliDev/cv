import { APropos } from "./APropos"
import { Entete } from "./Entete"
import { ExperienceEtFormation } from "./ExperienceEtFormation"
import { SchemaCompetences } from "./Schema-competences"

export const Cv = () => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto p-5" id="divToExport">
        <Entete />
        <main>
          <APropos />
          <SchemaCompetences />
          <ExperienceEtFormation />
        </main>
      </div>
    </>
  )
}
