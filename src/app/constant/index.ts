export const HOME_URL = "https://taiwan-homicide.vercel.app/"

export const APP_NAME = "台灣兇殺地圖 Taiwan homicide map"
export const APP_DESC =
  "法網恢恢疏而不漏，兇殺案總是可以讓我們窺見人性最幽暗的一面。God's mill grinds slow but sure/Justice has long arms. Homicide cases can always give us a glimpse into the darkest side of human nature.💀"

export const DEFAULT_ZOOM = 8

export const TAIWAN_CENTER = [23.97565, 120.9738819]
export const TAIPEI_CENTER = [25.038357847174, 121.54770626982]

type Info = {
  title: string
  address: string
  date: string
  link: string
}

export type Case = {
  info: Info[]
  lnglat: [number, number]
}
