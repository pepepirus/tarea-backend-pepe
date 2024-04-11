import logger from "../../lib/logger";
import MongoConn from "../../lib/mongodb";
import carModel from "../models/car.model";
import Icar from "../interfaces/car.interface";
import IResponse from "../interfaces/response.interface";

export default class carController{
    private mongoConn: MongoConn;
    constructor(){
        this.mongoConn = new MongoConn();
    }
    async saveCar(car:Icar):Promise<IResponse>{
        try {
            if(!car){
                return ({ok:false,message:"Datos incorrecto", response: null, code: 400})
            }
            await this.mongoConn.connectDB();
            const carSave = await carModel.create(car);
            return ({ok:true,message:"Producto Guardado", response: carSave, code: 200})
        } catch (error) {
            logger.error("[ProductController/saveProduct] " + error);
            return ({ok:false,message:"Error on DataBase", response: null, code: 500})
        }finally{
            await this.mongoConn.disconnectDB();
        }
    }
    async getCar(Model: any):Promise<IResponse>{
        try {

            await this.mongoConn.connectDB();
            const cars = await carModel.find({Model})
            if(cars.length < 1){
                return ({ok:false,message:"No hay producto", response: null, code: 404})
            }
            return ({ok:true,message:"Producto encontrado", response: cars, code: 200})
        } catch (error) {
            logger.error("[ProductController/saveProduct] " + error);
            return ({ok:false,message:"Error on DataBase", response: null, code: 500})
        }finally{
            await this.mongoConn.disconnectDB();
        }
    }

        async putCar (id: any, cars: Icar):Promise<IResponse>{
        try {
            const updatecar = await carModel.fin({Model})

          return ({ok:true,message:"Producto encontrado", response: cars, code: 200})
        } catch (error) {
            logger.error("[ProductController/saveProduct] " + error);
          return ({ok:false,message:"Error on DataBase", response: null, code: 500})
        }finally{
         await this.mongoConn.disconnectDB();
        }
}
}
