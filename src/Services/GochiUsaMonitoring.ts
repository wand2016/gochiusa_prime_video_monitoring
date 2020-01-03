import { inject, injectable } from "inversify";
import { TYPES } from "@app/types";
import ContentFactory from "@app/Domain/ContentFactory";
import Content from "@app/Domain/Content";
import MetricsPublisher from "@app/Domain/MetricsPublisher";

@injectable()
class GochiUsaMonitoring {

    private _contentFactory: ContentFactory;
    private _metricsPublisher: MetricsPublisher;

    public constructor(
        @inject(TYPES.ContentFactory) contentFactory: ContentFactory,
        @inject(TYPES.MetricsPublisher) metricsPublisher: MetricsPublisher
    ) {
        this._contentFactory = contentFactory
        this._metricsPublisher = metricsPublisher
    }

    public async monitorContentsAndPublishMetrics() {
        await this.publishMetrics(
            await this.monitorContents()
        );
    }

    private async monitorContents(): Promise<Content[]> {
        const contentNamesAndUrls = {
            '1st': 'https://www.amazon.co.jp/gp/video/detail/B014GMMG86/',
            '2nd': 'https://www.amazon.co.jp/gp/video/detail/B016PVQWQ8/',
            'DMS': 'https://www.amazon.co.jp/gp/video/detail/B07FN4TGPK/',
            'SFY': 'https://www.amazon.co.jp/gp/video/detail/B0834N9MVX/',
        };

        return await Promise.all(
            Object.entries(contentNamesAndUrls).map(async ([name, url]) => {
                return await this._contentFactory.createContent(name, url)
            })
        );
    }

    private async publishMetrics(contents: Content[]) {
        await this._metricsPublisher.publishMetrics(contents);
    }
}

export default GochiUsaMonitoring;
