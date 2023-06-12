const UsersReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        return action.payload;
      // Add other cases if needed
      default:
        return state;
    }
  };