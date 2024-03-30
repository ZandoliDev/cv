import { ReactNode, createContext, useState } from "react"
import { Contact, Societe } from "../model/Contact"

interface ContactContextType {
  contact: Contact
  updateSociete: (champ: string, valeur: Societe) => void
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

  const updateSociete = (champ: string, societe: Societe) => {
    setContact({ ...contact, [champ]: societe})
  }

  return (
    <ContactContext.Provider value={{ contact, updateSociete }}>
      {props.children}
    </ContactContext.Provider>
  )
}
