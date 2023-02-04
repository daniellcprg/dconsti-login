import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const baseStyle = defineStyle({
  // let's also provide dark mode alternatives
  _dark: {
    background: 'blue.500',
    _hover: {
      background: 'blue.600',
    }
  }
})

export const Button = defineStyleConfig({
  baseStyle,
})