import axios from "axios";

export class AnalogsService {
  static async getList (body: any) {
    const httpResponse = await axios.post('/api/analogs', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async getDescription (body: { id: string }) {
    const httpResponse = await axios.post('/api/analogs/getDescription', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async saveExtendedInfo (body: any) {
    const httpResponse = await axios.post('/api/analogs/saveItemExtendedInfo', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }
}
