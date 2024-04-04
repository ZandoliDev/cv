import { Experiences } from "./Experiences"
import { Formations } from "./Formations"

export const ExperienceEtFormation = () => {

  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Formations />
        <Experiences />
      </div>
    </section>
  )

}