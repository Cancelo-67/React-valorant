// Creamos una funcion para llamar a la API
export const callApi = async url => {
    const respuesta = await fetch(url)
    const respuestaJSON = await respuesta.json()
    return respuestaJSON.data
};
