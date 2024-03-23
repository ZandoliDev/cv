import { Entete } from "./Entete"

export const Cv = () => {
  return (
    <>
      <div className="max-w-screen-md mx-auto" id="divToExport">
        <Entete />
        <img src="/assets/Diagramme sans nom.drawio.svg" className="w-full" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <div className="border border-2 rounded p-3 my-3">
                <span className="text-muted float-start">
                  <i className="bi bi-emoji-smile icon-size"></i> @byteblogger22
                </span>
                <img src="image-1.jpeg" className="img-fluid" />
                <p className="paragraph">
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing software like Aldus
                  PageMaker including versions of Lorem Ipsum.
                </p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    </>
  )
}
