import { getData, Tubes, getModelData, ModelData } from './tubeprovider.js'

const innerH = document.getElementById('tableBody')

export const tableList = () => {
    getData().then(() => {
        getModelData().then(() => {
            const model = ModelData()
            const TubeDads = Tubes()
            TubeDads.map((t) => {
                const foundModels = model.find((m) => {
                    return m.id === t.modelId;
                })
                return tableBuilder(t, foundModels)
            }
            ).join("")
        })
    })
}

export const tableBuilder = (tubes, models) => {
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