import axios from "axios";

type UsersArgsTypes = {
  firstName: string
  lastName: string
  middleName: string
}

export class UsersService {
  static async getUser () {
    const httpResponse = await axios.get('/api/user')

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async setUser ({ firstName, lastName, middleName }: UsersArgsTypes) {
    const httpResponse = await axios.post('/api/user/setUser', {
      firstName, lastName, middleName
    })

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }
}
