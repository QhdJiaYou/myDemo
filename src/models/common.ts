import { Model } from '../types/dva';

const defaultState = {
    selectedOrgId: 1,
};

type State = typeof defaultState;

const ListModel: Model = {
    namespace: 'list',
    state: {
        ...defaultState,
    },
    effects: {
       
    },
    reducers: {
        setOrg(state: State, { payload }: any) {
            return { ...state, selectedOrgId: payload + 1 };
        },
    },
};

export default ListModel;
