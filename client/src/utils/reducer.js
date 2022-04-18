const randomNum = () => Math.floor(Math.random() * 20);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER": {
      const newUserID = randomNum();
      const newUser = { ...action.payload, id: newUserID };

      return {
        ...state,
        cars: [...state.user, newUser],
      };
    }
    case "REMOVE_CAR": {
      return {
        ...state,
        users: state.cars.filter(user => user.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};
