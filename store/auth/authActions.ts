import { AuthSession } from "@/helper/initState/auth"
import * as AuthTypes from "./authTypes"

// export const loginSession = (data: Login) => ({
//   type: AuthTypes.SET_LOGIN_SESSION,
//   payload: data,
// })

export const setSessionToken = (data: AuthSession) => ({
  type: AuthTypes.SET_SESSION_TOKEN,
  payload: data,
})
