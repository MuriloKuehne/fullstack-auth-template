import { Request, Response } from "express"

class ProductsController {
  async index(request: Request, response: Response) {
    return response.status(201).json({
      message: "Session listed successfully",
    })
  }

  async create(request: Request, response: Response) {
    return response.status(201).json({
      message: `ID do usuário: ${request.user?.id}, role: ${request.user?.role}`,
    })
  }
}

export { ProductsController }
