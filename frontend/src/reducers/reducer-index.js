import {getInitialState} from "./initial-state";
import * as appActions from '../actions'

const _handleSearchKeyChange = (state, searchKey) => {
    return {
        ...state,
        searchKey
    }
};

const _handleDropDownOnChange = (state, selectedRegion) => {
    return {
        ...state,
        selectedRegion
    }
};

const _successFetchAllCountryData = (state, countryData) => {
    return {
        ...state,
        countryData
    }
}

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case appActions.HANDLE_SEARCH_KEY_CHANGE:
            return _handleSearchKeyChange(state, action.searchKey);

        case appActions.HANDLE_REGION_DROP_DOWN_ON_CHANGE:
            return _handleDropDownOnChange(state, action.selectedRegion)

        case appActions.SUCCESS_FETCH_ALL_LIST:
            return _successFetchAllCountryData(state, action.countryData)

        default:
            return state
    }
}