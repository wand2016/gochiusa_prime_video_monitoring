import { injectable } from "inversify";
import Content from "@app/Domain/Content";
import MetricsPublisher from "@app/Domain/MetricsPublisher";
import AWS from "aws-sdk";

@injectable()
export default class MetricsPublisherImpl implements MetricsPublisher {

    /**
     * @readonly
     */
    private cloudWatch: AWS.CloudWatch;

    constructor() {
        this.cloudWatch = new AWS.CloudWatch(
            {
                region: "ap-northeast-1",
            },
        );
    }

    public async publishMetrics(contents: Content[]): Promise<void> {
        const metrics = this.buildMetrics(contents);
        return await new Promise((resolve, reject) => {
            this.cloudWatch.putMetricData(
                metrics,
                (err, _) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
        });
    }

    private buildMetrics(contents: Content[]) {
        return {
            MetricData: contents.map(
                (content) => {
                    return {
                        MetricName: "Availability",
                        Dimensions: [
                            {
                                Name: "Content-Name",
                                Value: content.getName(),
                            },
                            {
                                Name: "Content-URL",
                                Value: content.getUrl(),
                            },
                        ],
                        Timestamp: new Date(),
                        Unit: "None",
                        Value: content.isAvailable() ? 100 : 0,
                    };
                },
            ),
            Namespace: "GochiUsa",
        };
    }
}
