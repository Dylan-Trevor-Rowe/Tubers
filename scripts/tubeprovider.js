let data = [];
let modelData = [];
let brandData = [];

export const Tubes = () => {
    return data.slice();
}

export const ModelData = () => {
    return modelData.slice();
}

export const BrandData = () => {
    return brandData.slice();
}

export const getData = async () => {
    try {
        const response = await fetch("http://localhost:8080/Tubes");
        const parsedData = await response.json();
        data = parsedData;
    } catch (error) {
        window.alert('error')
    }
}

export const getModelData = async () => {
    try {
        const response = await fetch("http://localhost:8080/Models");
        const parsedData = await response.json();
        modelData = parsedData;
    } catch (error) {
        window.alert('error')
    }

}

export const getBrandData = async () => {
    try {
        const response = await fetch("http://localhost:8080/Brands");
        const parsedData = await response.json();
        brandData = parsedData;
    } catch (error) {
        window.alert('error')
    }
}

export const newTube = async (tube) => {
    try {
        const jsonNote = JSON.stringify(tube)
        return fetch('http://localhost:8080/Tubes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonNote
        })
            .then(() => {
                getData()
            })
    } catch (error) {
        window.alert('error')
    }
}

export const newModel = async (model) => {

    try {
        const jsonNote = JSON.stringify(model)
        return fetch('http://localhost:8080/Models', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonNote
        })
            .then(() => {
                getModelData()
            })

    } catch (error) {
        window.alert('error')
    }

}

export const newBrand = async (brand) => {
    const jsonNote = JSON.stringify(brand)
    try {
        return fetch('http://localhost:8080/Brands', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonNote
        })
            .then(() => {
                getBrandData()
            })

    } catch (error) {
        window.alert('error')
    }

}

