import { tableList } from './Table.js'
import { getData, getModelData, ModelData, newTube, newModel, newBrand, getBrandData, BrandData } from './tubeprovider.js'

const target = document.getElementById('Form')
const hub = document.getElementById('hub')

hub.addEventListener('click', e => {

    const brandValue = document.querySelector('#brandSelect').value
    const dateValue = document.querySelector('#dateSelect').value
    const dollarValue = document.querySelector('#dollarsSelect').value
    const modelValue = document.querySelector('#modelSelect').value

    if (e.target.id === 'saveInfo') {

        const newTubes = {
            brandId: parseInt(brandValue) || null,
            modelId: parseInt(modelValue) || null,
            year: parseInt(dateValue) || null,
            value: parseInt(dollarValue) || null,
            salestatus: 'sold'

        }

        newTube(newTubes).then(() => {
            getData().then(() => {
                getModelData().then(() => {
                    getBrandData().then(() => {
                        return tableList()
                    })

                })
            })
        })
    }
})

hub.addEventListener('click', e => {

    const brandInput = document.querySelector('#brand-input').value

    if (e.target.id === 'brand-Button') {

        const brands = {
            brand: brandInput || ''
        }

        newBrand(brands).then(() => {
            getData().then(() => {
                getModelData().then(() => {
                    getBrandData()
                    return tubeList()
                })
            })
        })
    }
})

hub.addEventListener('click', e => {

    const modelInput = document.querySelector('#model-input').value

    if (e.target.id === 'model-Button') {

        const model = {
            model: modelInput || undefined
        }

        newModel(model).then(() => {
            getData().then(() => {
                getModelData().then(() => {
                    getBrandData()
                    return tubeList()
                })
            })
        })
    }
})


export const tubeList = async () => {
    target.innerHTML = ''
    getData().then(() => {
        getModelData().then(() => {
            getBrandData().then(() => {

                const models = ModelData()
                const brands = BrandData()
                const uniqueBrands = brands.map(b => b)
                const uniqueModels = models.map(m => m)
                const brandSet = [...new Set(uniqueBrands)]
                const modelSet = [...new Set(uniqueModels)]
                Form(modelSet, brandSet)
            })
        })
    })
}

const dates = Array.from(Array(new Date().getFullYear() - 1949), (_, i) => (i + 1950))

export const Form = (m, b) => {

    const dollars = Array.from(Array(1000), (_, x) => x);

    target.innerHTML += `    
    
    <select id="brandSelect"class="form-select" aria-label="Default select example">
        <option selected>Brand</option>
        ${b.map(brand => `<option value="${brand.id}">${brand.brand}</option>`)}    
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