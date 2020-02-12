import { UPDATE_SECOND, UPDATE_FIRST } from './constants';
import axiosMock from '../Data/MockAxios';



const updateFirst = (updatedObject) => {
    return {
        type: UPDATE_FIRST,
        payload: updatedObject
    }
}

const updateSecond = (updatedObject) => {
    return {
        type: UPDATE_SECOND,
        payload: updatedObject
    }
}

export {
    updateFirst,
    updateSecond
}