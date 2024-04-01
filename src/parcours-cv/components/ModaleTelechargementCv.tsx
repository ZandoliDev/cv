import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { sauvegarderContact } from "../gateway/contact.gateway"
import { Etape } from "../model/Etape"
import { etapeIntroduction } from "../model/ParcoursCV"
import { NotificationTelechargementCV } from "./NotificationTelechargementCV"

interface ContactForm {
  prenom: string
  nom: string
  email: string
  telephone: string
  nomSociete: string
  descriptionSociete: string
  siteWebSociete: string
  poste: string
}

export const ModaleTelechargementCv = ({
  fonctionAnnulation,
  fonctionFinalisation,
  etapeCourante,
}: {
  fonctionAnnulation: () => void
  fonctionFinalisation: () => void
  etapeCourante?: Etape
}) => {
  const [etape, setEtape] = useState(etapeCourante ? etapeCourante : etapeIntroduction)
  const [afficherNotification, setAfficherNotification] = useState(false)
  const [isSucces, setIsSucces] = useState(false)

  const etapeSuivante = () => {
    setEtape(etape.suivante())
  }

  const etapePrecedente = () => {
    setEtape(etape.precedente())
  }

  const fermerNotification = () => {
    setAfficherNotification(false)
    fonctionFinalisation()
  }

  const methods = useForm<ContactForm>()

  const onSubmit = (data: ContactForm) => {
    if (!etape.isFinale()) {
      etapeSuivante()
    } else {
      const contact = {
        prenom: data.prenom,
        nom: data.nom,
        email: data.email,
        telephone: data.telephone,
        societe: {
          nom: data.nomSociete,
          description: data.descriptionSociete,
          siteWeb: data.siteWebSociete,
        },
        poste: data.poste,
      }

      sauvegarderContact(contact)
        .then(() => {
          setIsSucces(true)
        })
        .catch(() => {
          setIsSucces(false)
        })
        .finally(() => {
          setAfficherNotification(true)
        })
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
      <div className="bg-white p-5 rounded-lg max-w-lg mx-auto">
        <FormProvider {...methods}>
          {etape.getContenu()}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={fonctionAnnulation}
              className="bg-gray-500 text-white rounded mx-5 px-4 py-2"
            >
              Annuler
            </button>
            {!etape.isInitiale() && (
              <button
                type="button"
                onClick={etapePrecedente}
                className="bg-cyan-800 text-white rounded mx-5 px-4 py-2"
              >
                <i className="fa-solid fa-arrow-left"></i> Revenir
              </button>
            )}
            {!etape.isFinale() && (
              <button
                type="submit"
                onClick={methods.handleSubmit(onSubmit)}
                className="bg-cyan-800 text-white rounded mx-5 px-4 py-2"
              >
                Continuer <i className="fa-solid fa-arrow-right"></i>
              </button>
            )}
            {etape.isFinale() && (
              <button
                type="submit"
                onClick={methods.handleSubmit(onSubmit)}
                className="bg-cyan-800 text-white rounded mx-5 px-4 py-2"
              >
                Terminer
              </button>
            )}
          </div>
        </FormProvider>

        {afficherNotification && (
          <NotificationTelechargementCV
            fonctionFermeture={fermerNotification}
            isSucces={isSucces}
          />
        )}
      </div>
    </div>
  )
}
