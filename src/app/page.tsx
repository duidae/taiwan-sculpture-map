import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('./map'), {
  ssr: false
})

export default function Home() {
  return (
    <main>
      <DynamicMap />
    </main>
  )
}
