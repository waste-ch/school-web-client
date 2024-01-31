export const usersReducer = (state, { type, payload }) => {
  switch (type) {
    case "USER_DETAILS":
      return { ...state, usersDetails: payload };
    default:
      return { ...state };
  }
};
