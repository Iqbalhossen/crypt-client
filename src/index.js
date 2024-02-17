import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AuthProvider from './Contexts/AuthContext/AuthProvider';
import { ChakraProvider } from "@chakra-ui/react";

const root = createRoot(document.getElementById("root"))
root.render
  (
    <ChakraProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>

  )