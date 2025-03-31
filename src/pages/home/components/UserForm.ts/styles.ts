import { Box, Button, Text, styled } from '@marcos-vinicius-design-system/react'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'grid',
  gap: '$20',
  paddingLeft: '$16',
  paddingRight: '$16',
  gridTemplateColumns: '2fr 1fr',
  gridTemplateAreas: 'form form image',
  alignItems: 'center',
  overflow: 'hidden',
  '@media screen and (max-width: 48rem)': {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
})

export const Vazio = styled('div', {
  griArea: 'vazio',
})

export const Imagem = styled('div', {
  griArea: 'image',
  marginBottom: '$6',
  marginTop: '$6',
})

export const Form = styled(Box, {
  griArea: 'form',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  width: '70%',
  '@media screen and (max-width: 48rem)': {
    width: '95%'
  },
  [`> ${Button}`]: {
    color: '$white',
    '&:disabled': {
      cursor: 'default',
      opacity: 0.5,
    },
    '&:not(:disabled):hover': {
      backgroundColor: '#AB8C3B',
    },

  },
})

export const FormAnnotation = styled('div', {
  marginTop: '$2',

  [`> ${Text}`]: {
    color: '$gray400',
  },
})
