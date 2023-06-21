import axios from "axios";

export class CompilationsService {
  static async create (body: any) {
    const httpResponse = await axios.post('/api/compilations/create', body)

    switch (httpResponse.status) {
      case 201: return httpResponse.data
      default: throw new Error()
    }
  }

  static async deleteItem (body: { id: string }) {
    const httpResponse = await axios.post('/api/compilations/deleteItem', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async getList () {
    const httpResponse = await axios.post('/api/compilations')

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async getItem (body: { id: string }) {
    const httpResponse = await axios.post('/api/compilations/getItem', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async addAnalogs (body: { id: string, analogs: string[] }) {
    const httpResponse = await axios.post('/api/compilations/addAnalogs', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async removeAnalogs (body: { id: string, analogs: string[] }) {
    const httpResponse = await axios.post('/api/compilations/removeAnalogs', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async addStructuralCondition (body: { compilationId: string, id: string, from: number, to: number, name: string }) {
    const httpResponse = await axios.post('/api/compilations/addStructuralCondition', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async editStructuralCondition (body: { compilationId: string, id: string, from: number, to: number, name: string }) {
    const httpResponse = await axios.post('/api/compilations/editStructuralCondition', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async deleteStructuralCondition (body: { compilationId: string, id: string, name: string }) {
    const httpResponse = await axios.post('/api/compilations/deleteStructuralCondition', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async getItemDescription (body: { id: string }) {
    const httpResponse = await axios.post('http://app.appraiser-kit.ru/api/announcements/getItemDescription', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }

  static async saveItemExtendedInfo (body: any) {
    const httpResponse = await axios.post('http://app.appraiser-kit.ru/api/announcements/saveItemExtendedInfo', body)

    switch (httpResponse.status) {
      case 200: return httpResponse.data
      default: throw new Error()
    }
  }
}
