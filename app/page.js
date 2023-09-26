import Image from 'next/image'
import Link from 'next/link'
import {ImagePreview} from '@/components/EditListing/index'
export default function Home() {
  return (
    <div>
      <ImagePreview/>
      Click to go to profile 2
      <Link href={{pathname: `/Profile/${2}`}}>
        I am a button
      </Link>
    </div>
  )
}
