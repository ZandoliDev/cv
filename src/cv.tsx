import { Page, Text, View, Document } from "@react-pdf/renderer"
import { tw } from "./tw"

export const Cv = () => {
  const headerStyle = tw("bg-blue-500 p-4 text-white flex items-center justify-between relative")

  return (
    <>
      <Document>
        <Page size="A4">
          <View style={headerStyle}>
            <Text>Section #1</Text>
          </View>
        </Page>
      </Document>
    </>
  )
}
