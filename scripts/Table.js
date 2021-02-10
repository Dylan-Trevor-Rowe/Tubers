import { getData, Tubes, getModelData, ModelData, BrandData, getBrandData } from './tubeprovider.js'

const innerH = document.getElementById('tableBody')

export const tableList = async () => {
    innerH.innerHTML = ''
    getData().then(() => {
        getModelData().then(() => {
            getBrandData().then(() => {
                const model = ModelData()
                const TubeDads = Tubes()
                const brands = BrandData()
                
                TubeDads.map((tube) => {

                    const foundModel = model.filter((model) => {
                        return model.id === tube.modelId;
                    })

                    const foundBrands = brands.filter((brand) => {

                        return brand.id === tube.brandId
                    })

                    return tableBuilder(tube, foundModel, foundBrands)

                }).join("")
            })
        })
    })
}

export const tableBuilder = (tubes, models, brandy) => {
    innerH.innerHTML += `
<tr>
<th scope="row">${tubes.id}</th>
${brandy.map(brand => `<td>${brand.brand}</td>`)} 
<td>${tubes.year}</td>
<td>$${tubes.value}</td>
<td>${tubes.salestatus}</td>
${models.map(model => `<td>${model.model}</td>`)} 
</tr>`}