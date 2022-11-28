export interface Photo {
  id: number
  width: number
  height: number
  src: {
    medium: string
    small: string
  }
  alt: string
  photographer: string
  avg_color: string
}

export interface PhotoApiResponse {
  photos: Photo[]
  per_page: number
  page: number
  next_page: string
}
