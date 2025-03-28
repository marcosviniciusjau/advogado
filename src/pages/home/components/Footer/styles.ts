import { styled, Text } from '@marcos-vinicius-design-system/react'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateAreas: "auto auto auto",
  gridTemplateRows: "contact site address",
  height: 100,
  marginLeft: 'auto',
  alignItems: 'center',
  gap: '$20',
  overflow: 'hidden',

  backgroundColor: '$gray800',
  [`> ${Text}`]: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '$lg',
    color: '$white',
  },
})

export const Contact = styled('div', {
  griArea: 'contact',
})

export const Site = styled('div', {
  griArea: 'site',
})

export const Address = styled('div', {
  griArea: 'address',
})
