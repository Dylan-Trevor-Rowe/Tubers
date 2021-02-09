import { tableList } from './Table.js'
import { getData, getModelData, ModelData, Tubes, newTube, newModel } from './tubeprovider.js'

const target = document.getElementById('Form')
const hub = document.getElementById('hub')

hub.addEventListener('click', e => {

    const brandValue = document.querySelector('#brandSelect').value
    const dateValue = document.querySelector('#dateSelect').value
    const dollarValue = document.querySelector('#dollarsSelect').value
    const modelValue = document.querySelector('#modelSelect').value

    if (e.target.id === 'saveInfo') {

        const newTubes = {
            brand: brandValue,
            modelId: parseInt(modelValue),
            year: parseInt(dateValue),
            value: parseInt(dollarValue),
            salestatus: 'sold'

        }

        newTube(newTubes).then(() => {
            getData().then(() => {
                getModelData().then(() => {
                    return tableList()
                })

            })
        })
    }

})


export const tubeList = async () => {
    target.innerHTML = ''
    getData().then(() => {
        getModelData().then(() => {

            const models = ModelData()
            const TubeDads = Tubes()
            const uniqueModels = models.map(m => m)
            const modelSet = [...new Set(uniqueModels)]
            const uniqueTubes = TubeDads.map(b => b.brand)
            let unique = [...new Set(uniqueTubes)]
            Form(unique, modelSet)
        })
    })
}

const dates = Array.from(Array(new Date().getFullYear() - 1949), (_, i) => (i + 1950))

export const Form = (b, m) => {

    const dollars = Array.from(Array(1000), (_, x) => x);

    target.innerHTML += `    
    
    <select id="brandSelect"class="form-select" aria-label="Default select example">
        <option selected>Brand</option>
        ${b.map(brand => `<option value="${brand}">${brand}</option>`)}    
    </select>
    <select id="dateSelect"class="form-select" aria-label="Default select example">
        <option selected>Year</option>
        ${dates.map(date => `<option value="${date}">${date}</option>`)}    
    </select>
    <select id="dollarsSelect" class="form-select" aria-label="Default select example">
        <option selected>Value</option>
        ${dollars.map(dinero => `<option value="${dinero}">$${dinero}</option>`)}   
    </select>
    <select id="modelSelect" class="form-select" aria-label="Default select example">
        <option selected>Model</option>
    ${m.map(m => `<option value="${m.id}">${m.model}</option>`)}   
    </select>
    <div class="inputs">
        <input id="brand-input" class="form-control-sm" type="text" placeholder="New-Brand" aria-label="default input example">
        <input id="brand-Button" class="btn btn-primary btn-sm" type="button" value="create new brand">
    </div>
    <div class="inputs">
        <input id="model-input" class="form-control-sm" type="text" placeholder="New-Model" aria-label="default input example">
        <input id="model-Button" class="btn btn-primary btn-sm" type="button" value="create new model">
    </div>
    <div class="inputs">
        <input id="saveInfo" class="btn btn-primary btn-sm" type="button" value="submit new entry" >
    </div>`

}