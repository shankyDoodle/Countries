
let initialState = {
    searchKey:"",
    selectedRegion:"",
    countryData:[]
};


export const getInitialState = function () {
    return {
        ...initialState
    }
}