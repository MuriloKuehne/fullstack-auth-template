import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"

import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated"
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization"

const productsRoutes = Router()
const productsController = new ProductsController()

// productsRoutes.use(verifyUserAuthorization(["admin", "user"]))
productsRoutes.get("/", productsController.index)
productsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "admin", "costumer"]),
  productsController.create
)

export { productsRoutes }
