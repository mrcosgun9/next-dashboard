import { ColorScheme } from '@mantine/core';
import Link from "next/link";
function Logo({ colorScheme }: { colorScheme: ColorScheme }) {
  return (
    <>
      <Link href="/">
        <a className='text-gray-600 font-extrabold text-2xl'>
          LOGO
        </a>
      </Link>


    </>
  )
}


export default Logo