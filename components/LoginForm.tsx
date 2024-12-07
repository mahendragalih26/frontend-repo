"use client"
import { useState } from "react"
import { login } from "../apis/firebaseAuth"
import { Box, Button, TextField, Typography } from "@mui/material"
import { setSessionToken } from "@/store/auth/authActions"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    try {
      const { user, token } = await login(email, password)
      console.log("User:", user)
      console.log("Token:", token)
      setSessionToken({ username: email, token: token })
      // setToken(token); // Save the token in state or context
    } catch (error) {
      console.error("Error logging in:", error)
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      p={2}
    >
      <Typography variant="h4" mb={2}>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  )
}

export default LoginForm
