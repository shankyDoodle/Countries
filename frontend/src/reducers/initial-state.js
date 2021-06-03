
let initialState = {
    appTheme:"light",
    searchKey:"",
    selectedRegion:"",
    countryData:[]
};


export const getInitialState = function () {
    return {
        ...initialState
    }
}