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



// const reduxThunkUpdateAllAction = (row) => {
//     return (dispatch, getState) => {
//         axiosMock.get().then(result => {
//             const index = getState().dataRows.findIndex(r => r.id === row.id);
//             const oldSum = getState().sidebarData;
//             const sum = oldSum - parseInt(getState().dataRows[index].minutes) + parseInt(row.minutes);
//             row.isEdited = true;
//             dispatch(updateRowAction(row));
//             dispatch(updateSidebarAction(sum));
//             dispatch(updateFooterAction(row.id));
//         });
//     }
// }

export {
    updateFirst,
    updateSecond
}