export const User = {
  user: {
    firstName: 'Carl',
    lastName: 'Johnson',
    imageURL: '../../../assets/images/user.png',
    userEmail: 'carlito@sanan.com',
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
  },
}
