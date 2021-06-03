import URLMappings from "./axios-url-mappings"
import axios from 'axios'

export const HANDLE_SEARCH_KEY_CHANGE = 'HANDLE_SEARCH_KEY_CHANGE';
export const HANDLE_REGION_DROP_DOWN_ON_CHANGE = 'HANDLE_REGION_DROP_DOWN_ON_CHANGE';
export const SUCCESS_FETCH_ALL_LIST = 'SUCCESS_FETCH_ALL_LIST';
export const TOGGLE_APP_THEME = 'TOGGLE_APP_THEME';
export const SUCCESS_HANDLE_CARD_CLICKED = 'SUCCESS_HANDLE_CARD_CLICKED';
export const SET_SCREEN_LOADER = 'SET_SCREEN_LOADER';

const handleServerFailure = function (error) {
    console.log(error);
}

export const toggleAppTheme = () => ({
    type: TOGGLE_APP_THEME,
})

export const setScreenLoader = (isScreenLoading) => ({
    type: SET_SCREEN_LOADER,
    isScreenLoading
})

export const successHandleSearchKeyChange = (searchKey, countryData) => ({
    type: HANDLE_SEARCH_KEY_CHANGE,
    searchKey,
    countryData
})

export const successHandleRegionChanged = (selectedRegion, countryData) => ({
    type: HANDLE_REGION_DROP_DOWN_ON_CHANGE,
    selectedRegion,
    countryData
})

export const successHandleCardClicked = (activeCountry, countryData) => ({
    type: SUCCESS_HANDLE_CARD_CLICKED,
    activeCountry,
    countryData
})

const successFetchAllCountryData = (countryData) => ({
    type: SUCCESS_FETCH_ALL_LIST,
    countryData
})

export const fetchAllCountryData = () => {
    return dispatch => {
        return axios.get(URLMappings.FetchAllCountryData)
            .then(res => {
                dispatch(successFetchAllCountryData(res.data))
            })
            .catch(e => {
                dispatch(handleServerFailure(e))
            });
    };
}

export const handleSearchKeyChange = (searchKey, selectedRegion) => {
    return dispatch => {
        return axios.get(URLMappings.FetchCountryDataByName, {params:{name: searchKey, region: selectedRegion}})
            .then(res => {
                dispatch(successHandleSearchKeyChange(searchKey, res.data))
            })
            .catch(e => {
                dispatch(handleServerFailure(e))
            });
    };
}

export const handleRegionChanged = (searchKey, selectedRegion) => {
    return dispatch => {
        return axios.get(URLMappings.FetchCountryDataByRegion, {params:{name: searchKey, region: selectedRegion}})
            .then(res => {
                dispatch(successHandleRegionChanged(selectedRegion, res.data))
            })
            .catch(e => {
                dispatch(handleServerFailure(e))
            });
    };
}

export const handleCardClicked = (selectedCountryCode) => {
    return dispatch => {
        return axios.get(URLMappings.FetchCountryDataByCode3, {params:{code: selectedCountryCode}})
            .then(res => {
                dispatch(successHandleCardClicked(selectedCountryCode, res.data))
            })
            .catch(e => {
                dispatch(handleServerFailure(e))
            });
    };
}