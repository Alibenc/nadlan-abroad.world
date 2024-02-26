const SET_REGIONS = "QUIZREDUCER_SET_REGIONS";
const SET_STEP = "QUIZREDUCER_SET_STEP";
const SET_PROPERTY_TYPE = "QUIZREDUCER_SET_PROPERTY_TYPE";
const SET_PROPERTY_FOR = "QUIZREDUCER_SET_PROPERTY_FOR";
const SET_ROOM_RANGE = "QUIZREDUCER_SET_ROOM_RANGE";
const SET_FLOOR_RANGE = "QUIZREDUCER_SET_FLOOR_RANGE";
const SET_PRICE = "QUIZREDUCER_SET_PRICE";
const SET_VALIDATIONS = "QUIZREDUCER_SET_VALIDATIONS";
const SET_NAME = "QUIZREDUCER_SET_NAME";
const SET_NUMBER = "QUIZREDUCER_SET_NUMBER";
const SET_ADDITION = "QUIZREDUCER_SET_ADDITION";
const SET_EMAIL = "QUIZREDUCER_SET_EMAIL";
const SET_MONEY_TYPE = "QUIZREDUCER_SET_MONEY_TYPE";
const SET_COUNTRY = "QUIZREDUCER_SET_COUNTRY";

let initialState = {
  regions: "",
  step: 0,
  propertyType: [],
  propertyFor: [],
  roomRange: [1, 9],
  price: [0, 10000000],
  validations: [],
  floorRange: [1, 45],
  name: "",
  number: "",
  addition: "",
  email: "",
  moneyType: "",
  country: "",
};

type initialStateType = typeof initialState;

const quizReducer = (
  state: initialStateType = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case SET_REGIONS:
      return { ...state, regions: action.regions };

    case SET_STEP:
      return { ...state, step: action.step };

    case SET_PROPERTY_TYPE:
      return { ...state, propertyType: action.variants };

    case SET_PROPERTY_FOR:
      return { ...state, propertyFor: action.variants };

    case SET_ROOM_RANGE:
      return { ...state, roomRange: action.values };

    case SET_FLOOR_RANGE:
      return { ...state, floorRange: action.values };

    case SET_PRICE:
      return { ...state, price: action.values };

    case SET_NAME:
      return { ...state, name: action.name };

    case SET_NUMBER:
      return { ...state, number: action.number };

    case SET_ADDITION:
      return { ...state, addition: action.addition };

    case SET_EMAIL:
      return { ...state, email: action.email };

    case SET_MONEY_TYPE:
      return { ...state, moneyType: action.moneyType };

    case SET_COUNTRY:
      return { ...state, country: action.country };

    case SET_VALIDATIONS:
      return {
        ...state,
        validations: action.payload,
      };

    default:
      return state;
  }
};

export const setRegionForm = (regions: string) => ({
  type: SET_REGIONS,
  regions,
});

export const setAddition = (addition: string) => ({
  type: SET_ADDITION,
  addition,
});

export const setStep = (step: number) => ({
  type: SET_STEP,
  step,
});

export const setPropertyType = (variants: string) => ({
  type: SET_PROPERTY_TYPE,
  variants,
});

export const setPropertyFor = (variants: string) => ({
  type: SET_PROPERTY_FOR,
  variants,
});

export const setName = (name: string) => ({
  type: SET_NAME,
  name,
});

export const setNumber = (number: string) => ({
  type: SET_NUMBER,
  number,
});

export const setEmail = (email: string) => ({
  type: SET_EMAIL,
  email,
});

export const setMoneyType = (moneyType: string) => ({
  type: SET_MONEY_TYPE,
  moneyType,
});

export const setRoomRange = (values: Array<number>) => ({
  type: SET_ROOM_RANGE,
  values,
});

export const setFloorRange = (values: Array<number>) => ({
  type: SET_FLOOR_RANGE,
  values,
});

export const setPrice = (values: Array<number>) => ({
  type: SET_PRICE,
  values,
});

export const setCountry = (country: string) => ({
  type: SET_COUNTRY,
  country,
});

export const setValidations = (payload: Array<boolean>) => ({
  type: SET_VALIDATIONS,
  payload,
});

export default quizReducer;
