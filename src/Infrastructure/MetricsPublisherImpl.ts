import { injectable } from "inversify";
import Content from "@app/Domain/Content";
import MetricsPublisher from "@app/Domain/MetricsPublisher";

@injectable()
export default class MetricsPublisherImpl implements MetricsPublisher {
    async publishMetrics(contents: Content[]): Promise<void> {
        contents; // do something
    }
}
