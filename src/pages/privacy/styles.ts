import { styled, Heading, Text } from "@marcos-vinicius-design-system/react";

export const Container= styled('div',{
  display: 'grid',
  alignContent: 'center'
})

export const HeadingTitle = styled(Heading, {
  justifySelf: 'center',
  paddingTop: '$5',
  paddingBottom: '$5',
})

export const Paragraphs = styled(Text, {
  paddingBottom: '$5',
})