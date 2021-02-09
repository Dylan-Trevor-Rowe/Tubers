import { tableList } from "./Table.js"
import { getData } from './tubeprovider.js'
import { tubeList } from './Form.js'

const init = () => {
    tableList()
    getData()
    tubeList()
}
init()
