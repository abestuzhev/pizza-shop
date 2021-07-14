 export const setFilters = item => {
    return {
        type: 'SET_SORT_BY',
        payload: item
    }
}

export const setCategory = item => {
    return {
        type: 'SET_CATEGORY',
        payload: item
    }
}
