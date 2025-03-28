import { Heading, Text, styled } from '@marcos-vinicius-design-system/react'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'flex',
  gap: '$20',
  overflow: 'hidden',
  paddingBottom: '$10',

  backgroundColor: '$gray800',
  '@media(min-width: 48rem)': {
    padding: '0 $10',
  },
  '@media screen and (max-width: 48rem)': {
    display: 'block',
    padding: '0',
  },
})

export const Hero = styled('div', {
  padding: '0 $8',
  paddingBottom: '$10',

  [`> ${Heading}`]: {
    '@media screen and (max-width: 48rem)': {
      fontSize: '$2xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray300',
  },
})

export const Imagem = styled(Image, {
  width: "100%",
  objectFit: "contain",

  display: "block",
  borderRadius: "4px",

  '@media screen and (max-width: 48rem)': {
    padding: 0,
    marginLeft: "$8",
  }
})

export const Preview = styled('div', {
  '@media(min-width: 48rem)': {
    marginLeft: '5vh',
    width: '150%',
  },
  overflow: 'hidden',
  paddingBottom: '$10',
})
