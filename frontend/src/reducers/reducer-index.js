import {getInitialState} from "./initial-state";
import * as appActions from '../actions'

const _handleSearchKeyChange = (state, searchKey, countryData) => {
    return {
        ...state,
        searchKey,
        countryData,
        activeCountry: null
    }
};

const _handleDropDownOnChange = (state, selectedRegion, countryData) => {
    return {
        ...state,
        selectedRegion,
        countryData,
        activeCountry: null
    }
};

const _successFetchAllCountryData = (state, countryData) => {
    return {
        ...state,
        countryData,
        activeCountry: null
    }
};

const _toggleAppTheme = (state) => {
    return {
        ...state,
        appTheme: state.appTheme === "dark" ? "light" : "dark"
    }
};

const _handleCardClick = (state, activeCountry) => {
    return {
        ...state,
        activeCountry
    }
};

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case appActions.HANDLE_SEARCH_KEY_CHANGE:
            return _handleSearchKeyChange(state, action.searchKey, action.countryData);

        case appActions.HANDLE_REGION_DROP_DOWN_ON_CHANGE:
            return _handleDropDownOnChange(state, action.selectedRegion, action.countryData)

        case appActions.SUCCESS_FETCH_ALL_LIST:
            return _successFetchAllCountryData(state, action.countryData)

        case appActions.TOGGLE_APP_THEME:
            return _toggleAppTheme(state, action.countryData)

        case appActions.SUCCESS_HANDLE_CARD_CLICKED:
            return _handleCardClick(state, action.countryData)

        default:
            return state
    }
}