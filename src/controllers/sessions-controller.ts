import { Request, Response } from "express"
import { AppError } from "@/utils/AppError"
import { authConfig } from "@/configs/auth"
import { sign } from "jsonwebtoken"

const fakeUser = {
  id: "1",
  username: "Murilo Kuehne",
  password: "murilo123",
  role: "admin",
}
class SessionsController {
  async create(request: Request, response: Response) {
    const { username, password } = request.body

    if (username !== fakeUser.username || password !== fakeUser.password) {
      throw new AppError("Invalid username or password", 401)
    }

    const { secret, expiresIn } = authConfig.jwt
    const token = sign({ role: fakeUser.role }, secret, {
      subject: String(fakeUser.id),
      expiresIn,
    })

    return response.status(201).json({ token: `${token}` })
  }
}

export { SessionsController }
