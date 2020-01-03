import { injectable } from "inversify";
import Content from "@app/Domain/Content";
import MetricsPublisher from "@app/Domain/MetricsPublisher";
import AWS from 'aws-sdk';

@injectable()
export default class MetricsPublisherImpl implements MetricsPublisher {

    /**
     * @readonly
     */
    private _cloudWatch: AWS.CloudWatch;

    constructor() {
        this._cloudWatch = new AWS.CloudWatch({ region: 'ap-northeast-1' });
    }

    async publishMetrics(contents: Content[]): Promise<void> {
        return new Promise((resolve, reject) => {
            this._cloudWatch.putMetricData(
                this.buildMetrics(contents),
                (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        console.log(data);
                        resolve();
                    }
                });
        });
    }

    private buildMetrics(contents: Content[]) {
        return {
            MetricData: contents.map(content => {
                return {
                    MetricName: 'Availability',
                    Dimensions: [
                        {
                            Name: 'Content-Name',
                            Value: content.getName(),
                        },
                        {
                            Name: 'Content-URL',
                            Value: content.getUrl(),
                        },
                    ],
                    Timestamp: new Date(),
                    Unit: 'None',
                    Value: content.isAvailable() ? 100 : 0
                };
            }),
            Namespace: 'GochiUsa'
        };
    }
}
