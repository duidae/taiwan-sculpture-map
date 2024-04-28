import Image from "next/image"
import Link from "next/link"
import {APP_NAME, HOME_URL} from "@/app/constant"

const logoSize = 30

export const Header = () => {
  return (
    <div className="absolute top-0 flex flex-row justify-center z-10">
      <Link href={HOME_URL} className="flex flex-row justify-center items-center bg-white opacity-90 m-1 p-1 rounded-md shadow-md">
        <Image src="/logo.png" className="mr-2" alt={APP_NAME} width={logoSize} height={logoSize} />
        {APP_NAME}
      </Link>
    </div>
  )
}
