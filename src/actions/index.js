// action creator - fn that "creates" and _returns_ actions
export const buyItem = (feature) => {
    console.log('action creator was invoked');
    return { type: 'ADD_FEATURE', 
        payload: feature 
    };
};
  
export const removeFeature = (feature) => {
    return {
        type: 'REMOVE_FEATURE',
        payload: feature
    };
};
