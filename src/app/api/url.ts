import axios from "axios"
import {UrlResponse} from "../interfaces/urls"

export const url = async (param: string): Promise<UrlResponse> => {
  try {
    const response = await axios.post("https://rjrr.vercel.app/api/short", {
      originalUrl: param,
    })
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
