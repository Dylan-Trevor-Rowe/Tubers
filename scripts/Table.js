import { getData, Tubes, getModelData, ModelData } from './tubeprovider.js'

const innerH = document.getElementById('tableBody')

export const tableList = () => {
    innerH.innerHTML = ''
    getData().then(() => {
        getModelData().then(() => {
            const model = ModelData()
            const TubeDads = Tubes()
            TubeDads.map((tube) => {
                const foundModel = model.find((model) => {
                    return model.id === tube.modelId;
                })
                return tableBuilder(tube, foundModel)
            }
            ).join("")
        })
    })
}

export const tableBuilder = (tubes, models) => {
    console.log(models)
    innerH.innerHTML += `
<tr>
    <th scope="row">${tubes.id}</th>
    <td>${tubes.brand}</td>
    <td>${tubes.year}</td>
    <td>$${tubes.value}</td>
    <td>${tubes.salestatus}</td>
    <td>${models.model}</td>
</tr>
  `

}