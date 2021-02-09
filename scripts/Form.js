import { getData, getModelData, ModelData, Tubes, newTube } from './tubeprovider.js'

const target = document.getElementById('Form')
const hub = document.getElementById('hub')

hub.addEventListener('click', e => {

    const brandValue = document.querySelector('#brandSelect').value
    const dateValue = document.querySelector('#dateSelect').value
    const dollarValue = document.querySelector('#dollarsSelect').value
    // const modelValue = document.querySelector('#modelSelect').value

    if (e.target.id === 'saveInfo') {
       
        const newTubes = {
            brand: brandValue,
            // modelId:modelValue,
            year: dateValue,
            value: dollarValue,
            salestatus: 'sold'
         
        }

        newTube(newTubes).then(() => {
            getData().then(() => {
                getModelData()
            })
        })
    }
})

export const tubeList = async () => {
    getData().then(() => {
        getModelData().then(() => {
            
            const models = ModelData()
            const TubeDads = Tubes() 

            const uniqueModels = models.map(m => m.model)
            const modelSet = [...new Set(uniqueModels)]
             const uniqueTubes = TubeDads.map(b => b.brand)
             console.log(uniqueTubes)
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
    <select id="modalSelect" class="form-select" aria-label="Default select example">
        <option selected>Model</option>
    ${m.map(m => `<option value="${m}">${m}</option>`)}   
    </select>
    <div class="inputs">
        <input class="form-control-sm" type="text" placeholder="New-Brand" aria-label="default input example">
        <input id="brand-Button" class="btn btn-primary btn-sm" type="button">
    </div>
    <div class="inputs">
        <input class="form-control-sm" type="text" placeholder="New-Model" aria-label="default input example">
        <input id="brand-Button" class="btn btn-primary btn-sm" type="button" >
    </div>
    <input id="saveInfo" class="btn btn-primary btn-sm" type="button" >`
}

