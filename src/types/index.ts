

export type WineData = {
    "Alcohol": number
    "Malic Acid": number
    "Ash": number | string
    "Alcalinity of ash": number
    "Magnesium": number
    "Total phenols": number
    "Flavanoids": number
    "Nonflavanoid phenols": number | string
    "Proanthocyanins": string
    "Color intensity": number | string
    "Hue": number
    "OD280/OD315 of diluted wines": number | string
    "Unknown": number
}

export type AlcoholData = {
    [key: number]: number[];
  }