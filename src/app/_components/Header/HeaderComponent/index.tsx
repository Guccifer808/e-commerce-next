'use client'

import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'

import classes from './index.module.scss'
import Image from 'next/image'
import { HeaderNav } from '../Nav'
import MobileNav from '../MobileNav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="logo" width={180} height={40} />
        </Link>
        <HeaderNav header={header} />
        {/* <MobileNav header={header} /> */}
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
