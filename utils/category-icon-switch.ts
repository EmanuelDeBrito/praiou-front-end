import { ImageURISource } from "react-native"

export const categoryIconSwitch = (categoryName: string): ImageURISource => {
    let categoryIconRequire
    
    switch(categoryName){
        case "FUTEBOL":
            categoryIconRequire = require('../assets/interface-images/futebol.png')
            break
        case "VOLEI":
            categoryIconRequire = require('../assets/interface-images/volei.png')
            break
        case "SURF":
            categoryIconRequire = require('../assets/interface-images/surf.png')
            break
        case "TENIS":
            categoryIconRequire = require('../assets/interface-images/tenis.png')
            break
        case "CORRIDA":
            categoryIconRequire = require('../assets/interface-images/corrida.png')
            break
        case "WINDSURF":
            categoryIconRequire = require('../assets/interface-images/wind-surf.png')
            break
        case "MERGULHO":
            categoryIconRequire = require('../assets/interface-images/dive.png')
            break
    }

    return categoryIconRequire
}