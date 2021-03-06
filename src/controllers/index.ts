import { interfaces } from "inversify";
import { interfaces as interfaces_express, InversifyExpressServer, TYPE } from 'inversify-express-utils';

import { HomeController } from "./HomeController";
import { UsersController } from "./UsersController";
import { TestController } from "./TestController";

export function RegisterControllers(iocContainer: interfaces.Container): void {
    iocContainer.bind<interfaces_express.Controller>(TYPE.Controller).to(HomeController).whenTargetNamed(HomeController.name);
}