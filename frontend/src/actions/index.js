import URLMappings from "./axios-url-mappings"
import axios from 'axios'

export const HANDLE_SEARCH_KEY_CHANGE = 'HANDLE_SEARCH_KEY_CHANGE';
export const HANDLE_REGION_DROP_DOWN_ON_CHANGE = 'HANDLE_REGION_DROP_DOWN_ON_CHANGE';
export const SUCCESS_FETCH_ALL_LIST = 'SUCCESS_FETCH_ALL_LIST';

const handleServerFailure = function (error) {
    console.log(error);
}

export const handleSearchKeyChange = (searchKey) => ({
    type: HANDLE_SEARCH_KEY_CHANGE,
    searchKey
})

export const handleRegionChanged = (selectedRegion) => ({
    type: HANDLE_REGION_DROP_DOWN_ON_CHANGE,
    selectedRegion
})

const successFetchAllCountryData = (countryData) => ({
    type: SUCCESS_FETCH_ALL_LIST,
    countryData
})

export const fetchAllCountryData = () => {
    return dispatch => {
        return axios.get(URLMappings.FetchAllCountryData)
            .then(res => {dispatch(successFetchAllCountryData(res.data))})
            .catch(e => {dispatch(handleServerFailure(e))});
    };
}