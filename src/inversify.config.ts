import "reflect-metadata";

import { Container } from "inversify";
import { TYPES } from "@app/types";

import GochiUsaMonitoring from "@app/Services/GochiUsaMonitoring";
import ContentFactory from "@app/Domain/ContentFactory";
import AvailabilityChecker from "@app/Domain/AvailabilityChecker";
import AvailabilityCheckerImpl from "@app/Infrastructure/AvailabilityCheckerImpl";
import HtmlFetcher from "@app/Infrastructure/HtmlFetcher";
import HtmlFetcherImpl from "@app/Infrastructure/HtmlFetcherImpl";
import MetricsPublisher from "@app/Domain/MetricsPublisher";
import MetricsPublisherImpl from "@app/Infrastructure/MetricsPublisherImpl";

const container: Container = new Container();

container.bind<GochiUsaMonitoring>(TYPES.GochiUsaMonitoring).to(GochiUsaMonitoring);
container.bind<ContentFactory>(TYPES.ContentFactory).to(ContentFactory);
container.bind<AvailabilityChecker>(TYPES.AvailabilityChecker).to(AvailabilityCheckerImpl);
container.bind<HtmlFetcher>(TYPES.HtmlFetcher).to(HtmlFetcherImpl);
container.bind<MetricsPublisher>(TYPES.MetricsPublisher).to(MetricsPublisherImpl);

export default container;
