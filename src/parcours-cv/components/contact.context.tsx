import { ReactNode, createContext, useState } from "react"
import { Contact } from "../model/Contact"

interface ContactContextType {
  contact: Contact
}

export const ContactContext = createContext<ContactContextType>({
  contact: {} as Contact,
})

interface ContactContextProviderProps {
  children: ReactNode
}

export const ContactContextProvider = (props: ContactContextProviderProps) => {

  const [contact] = useState<Contact>({} as Contact)

  return <ContactContext.Provider value={{ contact }}>{props.children}</ContactContext.Provider>
}
