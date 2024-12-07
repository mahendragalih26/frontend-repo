export interface Login {
  username: string
  password: string
}
export interface AuthSession {
  username: string
  token: string
}

export const initAuthSession: AuthSession = {
  username: "",
  token: "",
}
