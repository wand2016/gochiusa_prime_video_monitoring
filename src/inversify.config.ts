import "reflect-metadata";

import { Container } from "inversify";
import { TYPES } from "@app/types";

import AvailabilityChecker from "@app/Domain/AvailabilityChecker";
import AvailabilityCheckerImpl from "@app/Infrastructure/AvailabilityCheckerImpl";


const container: Container = new Container();

container.bind<AvailabilityChecker>(TYPES.AvailabilityChecker).to(AvailabilityCheckerImpl);

export default container;
