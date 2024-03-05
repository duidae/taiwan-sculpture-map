import {Header} from "@/app/component/header"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("@/app/component/map"), {
  ssr: false
})

export default function Home() {
  return (
    <main>
      <Header />
      <DynamicMap />
    </main>
  )
}
