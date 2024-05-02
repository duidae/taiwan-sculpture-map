export const HOME_URL = "https://taiwan-sculpture-map.vercel.app/"

export const APP_NAME = "台灣戶外雕塑地圖 Taiwan outdoor sculpture map"
export const APP_DESC = "欣賞台灣雕塑之美 Appreciate the beauty of Taiwanese sculptures."

export const DEFAULT_ZOOM = 8

export const TAIWAN_CENTER = [23.97565, 120.9738819]
export const TAIPEI_CENTER = [25.038357847174, 121.54770626982]

export type Sculpture = {
  title: string
  artist: string
  desc: string
  date: string
  location: string
  link?: string
  lnglat: [number, number]
}
