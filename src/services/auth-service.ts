import axios from "axios";

type AuthArgsTypes = {
  email: string
  password: string
}

export class AuthService {
  static async login ({ email, password }: AuthArgsTypes) {
    const httpResponse = await axios.post('/api/auth/signin', {
      email,
      password
    })

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async logout () {
    const httpResponse = await axios.post('/api/auth/signout', {})

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async register ({ email, password }: AuthArgsTypes) {
    const httpResponse = await axios.post('/api/auth/signup', {
      email,
      password
    })

    switch (httpResponse.status) {
      case 201: return httpResponse.data
      default: throw new Error()
    }
  }

  static async getAuth () {
    const httpResponse = await axios.get('/api/auth')

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }
}
