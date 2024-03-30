export const ComponentSociete = () => {
  return (
    <>
      <h3 className="text-lg font-bold mb-4">Votre société</h3>
      <form>
        <input
          type="text"
          placeholder="Nom de la société"
          className="block w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Votre poste"
          className="block w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          placeholder="Vos missions identifiées"
          className="block w-full p-2 mb-4 border rounded"
          required
        ></textarea>
      </form>
    </>
  )
}