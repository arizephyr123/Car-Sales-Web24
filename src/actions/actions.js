//Action Types
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//Action Creators
export const addFeature = item => {
    console.log('addFeature AC', item);
    return {
        type: ADD_FEATURE, 
        payload: item
    }
};

export const removeFeature = item => {
    console.log('removeFeature AC', item);
    return{
        type: REMOVE_FEATURE,
        payload: item
    }
};

