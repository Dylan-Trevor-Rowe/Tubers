let data = [];
let modelData = [];

export const Tubes = () => {
    return data.slice();
}

export const ModelData = () => {
    return modelData.slice();
}

export const getData = async () => {
    const response = await fetch("http://localhost:8080/Tubes");
    const parsedData = await response.json();
    data = parsedData;
}

export const getModelData = async () => {
    const response = await fetch("http://localhost:8080/Models");
    const parsedData = await response.json();
    modelData = parsedData;
}

export const newTube = async (tube) => {
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
}

export const newModel = async (model) => {
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
}

