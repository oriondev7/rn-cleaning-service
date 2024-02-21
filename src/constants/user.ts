export const User = {
  user: { 
    firstName: 'Carl', 
    lastName: 'Johnson',
    imageURL: '../../../assets/images/user.png',
    userEmail: 'carlito@sanan.com', // ADD LOGIN AND USE REAL USER EMAIL
    fullName() { return this.firstName + ' ' + this.lastName } // ADD LOGIN AND USE REAL USER NAME
  }, 
  isLoading: false
}