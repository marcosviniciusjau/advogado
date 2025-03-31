import { Heading, Text, styled } from '@marcos-vinicius-design-system/react'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: "1fr 1fr",
  alignItems: 'center',
  overflow: 'hidden',

  backgroundColor: '$gray800',
  '@media screen and (max-width: 48rem)': {
    display: 'flex',
    flexDirection: 'column',
  }
})

export const Hero = styled('div', {
  [`> ${Heading}`]: {
    '@media screen and (max-width: 48rem)': {
      fontSize: '$2xl',
      marginLeft: '3vh',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray300',
    '@media screen and (max-width: 48rem)': {
      marginLeft: '2vh',
    },
  },
})

export const Imagem = styled(Image, {
  borderRadius: "4px",

  '@media screen and (max-width: 48rem)': {
    width: "80%",
    objectFit: "contain",
  }
})

export const Preview = styled('div', {
  '@media(min-width: 48rem)': {
    marginLeft: '5vh',
  },
  overflow: 'hidden',
})
