import { Request, Response, Router } from "express";
import CarProduct from "../controllers/car.controller";

const carController = new CarProduct();
const routes = Router();

routes.post("/create" , async (req:Request, res:Response) => {
    try {
        const car = req.body;
        const response = await carController.getCar(car)
        return res.status(response.code).json(response)
    } catch (error:any) {
        return res.status(error.code ? error.code : 500).json(error)
    }
})

routes.get("/:model",async (req:Request, res:Response) => {
    try {
        const model = req.params.model;
        const response = await carController.getCar(model)
        return res.status(response.code).json(response)
    } catch (error:any) {
        return res.status(error.code ? error.code : 500).json(error)
    }
})

routes.put("/:id", async (req:Request, res:Response) => {
    try{
        const id = req.params.id;
        const cars = req.body
        const response = await carController.putCar(id, cars)
    } catch(error:any){
        return res.status(error.code ? error.code: 500).json(error)
    }
})



export default routes