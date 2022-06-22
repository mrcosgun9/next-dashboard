import { ColorScheme } from '@mantine/core';
import Link from "next/link";
function Logo({ colorScheme }: { colorScheme: ColorScheme }) {
  return (
    <>
      <Link href="/">
        <a>
          Dashboard Logo
        </a>
      </Link>


    </>
  )
}


export default Logo