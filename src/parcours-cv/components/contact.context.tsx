import { ReactNode, createContext, useState } from "react"
import { Contact, Societe } from "../model/Contact"

interface ContactContextType {
  contact: Contact
  updateSociete: (champ: keyof Societe, nouvelleSociete: Societe) => void
}

export const ContactContext = createContext<ContactContextType>({
  contact: {} as Contact,
  updateSociete: () => {},
})

interface ContactContextProviderProps {
  children: ReactNode
}

export const ContactContextProvider = (props: ContactContextProviderProps) => {
  const [contact, setContact] = useState<Contact>({} as Contact)

  const updateSociete = (champ: keyof Societe, nouvelleSociete: Societe) => {
    setContact({ ...contact, societe: { ...contact.societe, [champ]: nouvelleSociete[champ] } })
  }

  return (
    <ContactContext.Provider value={{ contact, updateSociete }}>
      {props.children}
    </ContactContext.Provider>
  )
}
