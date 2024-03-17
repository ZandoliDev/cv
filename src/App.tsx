import { PDFDownloadLink } from "@react-pdf/renderer"
import { Cv } from "./cv"

export const App = () => (
  <>
    <div>
      <PDFDownloadLink document={<Cv />} fileName="Didier-Erin-CV.pdf">
        {({ loading }) => (loading ? "Loading document..." : "Download now!")}
      </PDFDownloadLink>
    </div>
    <Cv />
  </>
)

export default App
