import { Heading, Text, styled } from '@marcos-vinicius-design-system/react'
import { WhatsappLogo } from 'phosphor-react'

export const Container = styled('div', {
  alignItems: 'center',
  overflow: 'hidden',
  '@media screen and (max-width: 48rem)': {
    display: 'block',
  },
})

export const Hero = styled('div', {
  '@media(min-width: 48rem)': {
    marginTop: '380px',
  },
  [`> ${Heading}`]: {
    '@media screen and (max-width: 48rem)': {
      fontSize: '$4xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
})

export const SocialMediaDiv = styled('div', {
  marginTop: '$4',
  gap: '$4',
  display: 'flex',
  overflow: 'hidden',
})

export const Imagem = styled('div', {
})

export const Texto = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'center',

  '&:last-child': {
    fontWeight: 'bold',
  },
})

export const Facebook = styled('div', {
  maxWidth: 315,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})

export const Pagina = styled('div', {
  maxWidth: 315,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})

export const Instagram = styled('div', {
  maxWidth: 315,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
})

export const Arroba = styled('div', {
  maxWidth: 315,
  display: 'flex',
  overflow: 'hidden',
})
