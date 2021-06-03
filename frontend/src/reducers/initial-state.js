
let initialState = {
    appTheme:"light",
    searchKey:"",
    selectedRegion:"",
    countryData:[],
    activeCountry: null,
};


export const getInitialState = function () {
    return {
        ...initialState
    }
}