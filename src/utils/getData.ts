import axios from 'axios'
import { PhotoApiResponse } from '../components/type'

interface getDataArgs {
  uri: string
  apiKey: string
  perPage: number
}

export const getData = ({
  uri,
  apiKey,
  perPage,
}: getDataArgs): Promise<PhotoApiResponse> => {
  const config = {
    headers: { Authorization: apiKey },
  }

  return new Promise(async (resolve, reject) => {
    try {
      const { data }: { data: PhotoApiResponse } = await axios.get(
        `${uri}&per_page=${perPage}`,
        config
      )
      resolve(data)
    } catch (err) {
      reject(err)
    }
  })
}
