'use client'

import React, { useState } from 'react'

import classes from './index.module.scss'
import Link from 'next/link'
import { Media } from '../../../_components/Media'
import { Product } from '../../../../payload/payload-types'
import { Price } from '../../../_components/Price'
import Image from 'next/image'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'

type Props = {
  qty: number
  product: Product
  metaImage: any
  title: string
  addItemToCart: any
}

const CartItem = ({ qty, product, title, metaImage, addItemToCart }: Props) => {
  const [quantity, setQuantity] = useState(qty)

  const decQty = () => {
    const updated = quantity > 1 ? quantity - 1 : 1

    setQuantity(updated)
    addItemToCart({ product, quantity: Number(updated) })
  }
  const incrQty = () => {
    const updated = quantity + 1

    setQuantity(updated)
    addItemToCart({ product, quantity: Number(updated) })
  }
  const enterQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = Number(e.target.value)

    setQuantity(updated)
    addItemToCart({ product, quantity: Number(updated) })
  }

  return (
    <li className={classes.item} key={title}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No image</span>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media imgClassName={classes.image} fill resource={metaImage} className={classes.media} />
        )}
      </Link>

      <div className={classes.itemDetails}>
        <div className={classes.titleWrapper}>
          <h6>{title}</h6>
          <Price product={product} button={false} />
        </div>

        <div className={classes.quantity}>
          <div className={classes.quantityBtn} onClick={decQty}>
            <Image
              src="/assets/icons/minus.svg"
              width={24}
              height={24}
              alt="minus"
              className={classes.qtnBtn}
            />
          </div>
          <input
            type="text"
            className={classes.quantityInput}
            value={quantity}
            onChange={enterQty}
          />
          <div className={classes.quantityBtn} onClick={incrQty}>
            <Image
              src="/assets/icons/plus.svg"
              width={24}
              height={24}
              alt="minus"
              className={classes.qtnBtn}
            />
          </div>
        </div>
      </div>

      <div className={classes.subtotalWrapper}>
        <Price product={product} button={false} quantity={quantity} />
        <RemoveFromCartButton product={product} />
      </div>
    </li>
  )
}

export default CartItem
