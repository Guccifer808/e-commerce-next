import React from 'react'

import { Product } from '../../../payload/payload-types'
import { useCart } from '../../_providers/Cart'

import classes from './index.module.scss'
import Image from 'next/image'

export const RemoveFromCartButton: React.FC<{
  className?: string
  product: Product
}> = props => {
  const { className, product } = props

  const { deleteItemFromCart, isProductInCart } = useCart()

  const productIsInCart = isProductInCart(product)

  if (!productIsInCart) {
    return <div>Item is not in the cart</div>
  }

  return (
    <button
      type="button"
      onClick={() => {
        deleteItemFromCart(product)
      }}
      className={[className, classes.removeFromCartButton].filter(Boolean).join(' ')}
    >
      <Image
        className={classes.qtnBt}
        src="/assets/icons/delete.svg"
        width={24}
        height={24}
        alt="remove"
      />
    </button>
  )
}
