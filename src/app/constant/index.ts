export const HOME_URL = "https://taiwan-homicide.vercel.app/"

export const APP_NAME = "台灣雕塑地圖 Taiwan sculpture map"
export const APP_DESC =
  "欣賞台灣雕塑之美"

export const DEFAULT_ZOOM = 8

export const TAIWAN_CENTER = [23.97565, 120.9738819]
export const TAIPEI_CENTER = [25.038357847174, 121.54770626982]

type Info = {
  title: string
  date: string
  link: string
}

export type Sculpture = {
  info: Info[]
  address: string
  lnglat: [number, number]
}
