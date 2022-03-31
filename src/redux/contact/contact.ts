const ADD_CONTACT = 'contact/contact/ADD_CONTACT';
const DELETE_CONTACT = 'contact/contact/DELETE_CONTACT';
const EDIT_CONTACT = 'contact/contact/EDIT_CONTACT';

const initialState: IInitialStateObj[] = [];

export const addContact = (payload: IPayload) => ({
  type: ADD_CONTACT,
  payload,
});

export const deleteContact = (payload: IPayload) => ({
  type: DELETE_CONTACT,
  payload,
});

export const editContact = (payload: IPayload) => ({
  type: EDIT_CONTACT,
  payload,
});

const contactReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload.id);
    case EDIT_CONTACT:
      return state;
    default:
      return state;
  }
};

export default contactReducer;
