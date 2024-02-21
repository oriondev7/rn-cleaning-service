import { request, gql } from 'graphql-request'

const MASTER_URL =
  'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clsogbadw012j01umqecgpt05/master'

const getSlider = async () => {
  const query = gql`
    query getSlider {
      sliders {
        name
        id
        image {
          url
        }
      }
    }
  `
  const result = await request(MASTER_URL, query)

  return result
}

const getCategories = async () => {
  const query = gql`
    query getCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `
  const result = await request(MASTER_URL, query)

  return result
}

const getBusinessList = async () => {
  const query = gql`
    query GetBusinessList {
      businessLists {
        contactPerson
        id
        images {
          url
        }
        name
        category {
          name
        }
      }
    }
  `
  const result = await request(MASTER_URL, query)

  return result
}

const getBusinessListByCategory = async (category: string) => {
  const query =
    gql`
    query GetBusinessList {
      businessLists(where: {category: {name: "` +
    category +
    `"}}) {
        address
        contactPerson
        id
        images {
          url
        }
        name
      }
    }
  `

  const result = await request(MASTER_URL, query)

  return result
}

const getBusinessById = async (id: string) => {
  const query =
    gql`
    query getBusinessById {
      businessLists(where: {id: "` +
    id +
    `"}) {
        about
        address
        contactPerson
        email
        id
        images {
          url
        }
        name
        category {
          name
        }
      }
    }
  `

  const result = await request(MASTER_URL, query)

  return result
}

const bookAppointment = async (data: any) => {
  const mutationQuery =
    gql`
    mutation bookAppointment {
      createBooking(
        data: {
          bookingStatus: Booked, 
          business: {connect: {id: "` +
    data.businessId +
    `"}}, 
          date: "` +
    data.date +
    `", 
          time: "` +
    data.time +
    `", 
          userEmail: "` +
    data.userEmail +
    `", 
          userName: "` +
    data.userName +
    `"
        }
      ) {
        id
      }
    }
  `

  const result = await request(MASTER_URL, mutationQuery)

  return result
}

const publishBooking = async (bookingId: string) => {
  const mutationQuery =
    gql`
    mutation publishBooking {
      publishBooking(where: {id: "` +
    bookingId +
    `"}, to: PUBLISHED) {
        id
      }
    }
  `

  const result = await request(MASTER_URL, mutationQuery)

  return result
}

const getUserBookings = async (userEmail: string) => {
  const query =
    gql`
    query getUserBookings {
      bookings(orderBy: updatedAt_DESC, where: {userEmail: "` +
    userEmail +
    `"}) {
        time
        bookingStatus
        date
        id
        business {
          id
          images {
            url
          }
          name
          contactPerson
        }
      }
    }
  `
  const result = await request(MASTER_URL, query)

  return result
}

export default {
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory,
  getBusinessById,
  getUserBookings,

  bookAppointment,
  publishBooking,
}
