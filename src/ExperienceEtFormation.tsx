import { Experiences } from "./Experiences"
import { Formations } from "./Formations"

export const ExperienceEtFormation = () => {

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5">
        <Formations />
        <Experiences />
      </div>
    </section>
  )

}