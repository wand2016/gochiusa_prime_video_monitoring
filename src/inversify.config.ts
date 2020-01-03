import "reflect-metadata";

import { Container } from "inversify";
import { TYPES } from "@app/types";

import AvailabilityChecker from "@app/Domain/AvailabilityChecker";
import AvailabilityCheckerImpl from "@app/Infrastructure/AvailabilityCheckerImpl";

import HtmlFetcher from "@app/Infrastructure/HtmlFetcher";
import HtmlFetcherImpl from "@app/Infrastructure/HtmlFetcherImpl";

const container: Container = new Container();

container.bind<AvailabilityChecker>(TYPES.AvailabilityChecker).to(AvailabilityCheckerImpl);
container.bind<HtmlFetcher>(TYPES.HtmlFetcher).to(HtmlFetcherImpl);

export default container;
