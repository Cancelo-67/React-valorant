import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>,
)
  