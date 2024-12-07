import { AuthSession, initAuthSession } from "@/helper/initState/auth"
import * as AuthTypes from "./authTypes"

const AuthReducers = (
  state: AuthSession = initAuthSession,
  action: {
    type: string
    payload?: AuthSession
    idUpdate?: number
  }
): AuthSession => {
  switch (action.type) {
    case AuthTypes.SET_SESSION_TOKEN:
      return { ...state, ...action.payload }

    default:
      return state
  }
}

export default AuthReducers
