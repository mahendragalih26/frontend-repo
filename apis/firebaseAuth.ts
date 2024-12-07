import Cookies from "js-cookie"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"

import app from "./firebase"

const auth = getAuth(app)

export const login = async (email: string, password: string) => {
  // return signInWithEmailAndPassword(auth, email, password)
  try {
    // Authenticate the user
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user

    // Get the token
    const token = await user.getIdToken()

    // Store the token in a cookie
    Cookies.set("authToken", token, { expires: 1 }) // Expires in 1 day

    return { user, token }
  } catch (error) {
    throw error
  }
}

export const register = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}
