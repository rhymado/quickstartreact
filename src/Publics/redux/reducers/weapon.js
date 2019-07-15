const initialState = {
  weaponList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const weapon = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WEAPON_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_WEAPON_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_WEAPON_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        weaponList: action.payload.data,
      };
    default:
      return state;
  }
};

export default weapon;
