import { injectable } from "inversify";
import Content from "@app/Domain/Content";
import MetricsPublisher from "@app/Domain/MetricsPublisher";

@injectable()
export default class MetricsPublisherFake implements MetricsPublisher {

    public publishedMetrics = [];

    public async publishMetrics(contents: Content[]): Promise<void> {
        contents.forEach((content) => {
            this.publishedMetrics.push([content.getName(), content.getUrl(), content.isAvailable()]);
        });
    }
}
