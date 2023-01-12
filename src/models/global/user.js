const UserModel = {
  state: {
    firstName: '',
    lastName: ''
  },
  reducer: {
    UPDATE_VALUE: (state, payload) => {
      const { name, value } = payload
      return {
        ...state,
        [name]: value
      }
    }
  }
}
export default UserModel
