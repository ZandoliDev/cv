import { Formations } from "./Formations"

export const ExperienceEtFormation = () => {

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5">
        <Formations />
        <div className="col-span-3 bg-orange-300 rounded p-2">
          <h3 className="bg-cyan-100 text-lg text-center">Expériences</h3>
        </div>
      </div>
    </section>
  )

}