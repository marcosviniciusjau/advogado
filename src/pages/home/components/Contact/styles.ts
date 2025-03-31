import { Heading, Text, styled } from '@marcos-vinicius-design-system/react'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  backgroundColor: '$gray700',
  '@media screen and (max-width: 48rem)': {
    display: 'grid',
    paddingLeft: "$8",
  },
})

export const Hero = styled('div', {
  paddingBottom: "$16",
  [`> ${Heading}`]: {
    '@media screen and (max-width: 48rem)': {
      fontSize: '$2xl',
    },
  },

  [`> ${Text}`]: {
    color: '$gray300',
  },
})

export const Imagem = styled(Image, {
  width: "80%",
  objectFit: "contain",

  borderRadius: "4px",

  '@media screen and (max-width: 48rem)': {
    padding: 0,
  }
})

export const Preview = styled('div', {
  '@media(min-width: 48rem)': {
    marginLeft: '5vh',
  },
  overflow: 'hidden',
})
