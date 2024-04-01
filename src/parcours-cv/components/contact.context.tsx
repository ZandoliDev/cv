import { ReactNode, createContext, useState } from "react"
import { Contact, Societe } from "../model/Contact"

interface ContactContextType {
  contact: Contact
  updateSociete: (champ: keyof Societe, nouvelleSociete: Societe) => void
  updateContact: (champ: keyof Contact, nouvelleSociete: Contact) => void
}

export const ContactContext = createContext<ContactContextType>({
  contact: {} as Contact,
  updateSociete: () => {},
  updateContact: () => {},
})

interface ContactContextProviderProps {
  children: ReactNode
}

export const ContactContextProvider = (props: ContactContextProviderProps) => {
  const [contact, setContact] = useState<Contact>({societe:{}} as Contact)

  const updateSociete = (champ: keyof Societe, nouvelleSociete: Societe) => {
    setContact({ ...contact, societe: { ...contact.societe, [champ]: nouvelleSociete[champ] } })
  }

  const updateContact = (champ: keyof Contact, nouveauContact: Contact) => {
    setContact({ ...contact, [champ]: nouveauContact[champ] })
  }

  return (
    <ContactContext.Provider value={{ contact, updateSociete, updateContact }}>
      {props.children}
    </ContactContext.Provider>
  )
}
