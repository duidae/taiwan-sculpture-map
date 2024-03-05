import Image from "next/image"
import Link from "next/link"
import {APP_NAME, HOME_URL} from "@/app/constant"

const logoSize = 30

export const Header = () => {
  return (
    <div className="">
      <Link href={HOME_URL} className="flex flex-row justify-center items-center">
        <Image src="/logo.png" alt={APP_NAME} width={logoSize} height={logoSize} />
        {APP_NAME}
      </Link>
    </div>
  )
}
