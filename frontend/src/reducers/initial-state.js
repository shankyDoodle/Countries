
let initialState = {
    appTheme:"light",
    searchKey:"",
    selectedRegion:"",
    countryData:[],
    activeCountry: null,
    isScreenLoading: false
};


export const getInitialState = function () {
    return {
        ...initialState
    }
}