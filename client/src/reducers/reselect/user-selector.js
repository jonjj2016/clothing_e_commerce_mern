import {
    createSelector
} from 'reselect'
const selectLogs = state => state.logs
export const selectIsAuth = createSelector([selectLogs], (logs) => logs.isAuthenticated);