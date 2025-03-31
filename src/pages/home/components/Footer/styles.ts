import { styled, Text } from '@marcos-vinicius-design-system/react'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: "1fr 1fr 1fr",
  '@media(min-width: 48rem)': {
    paddingLeft: '$10',
  },
  overflow: 'hidden',
  padding: '$10',
  '@media(max-width: 48rem)': {
    gap: '$10',
  },
  [`> ${Text}`]: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '$lg',
    color: '$white',
  },
})

export const Contact = styled('div', {
  width: 'initial',
  //backgroundColor: '$gray100',
})

export const Site = styled('div', {
  marginTop: '-$10',
})

export const Address = styled('div', {
  // backgroundColor: '$gray400',
})
