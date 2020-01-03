import GochiUsaMonitoring from "@app/Services/GochiUsaMonitoring";
import TestGlobal from "@tests/global";
import {TYPES} from "@app/types";
import HtmlFetcher from "@app/Infrastructure/HtmlFetcher";
import HtmlFetcherFake from "@app/Infrastructure/HtmlFetcherFake";
import MetricsPublisher from "@app/Domain/MetricsPublisher";
import MetricsPublisherFake from "@app/Infrastructure/MetricsPublisherFake";

declare const global:TestGlobal;

test("monitorContentsAndPublishMetrics/しかるべき内容のメトリクスが記録される", async () => {
    // ----------------------------------------
    // 1. setup
    // 依存のバインディング
    // ----------------------------------------
    global.container.rebind<HtmlFetcher>(TYPES.HtmlFetcher).toConstantValue(new HtmlFetcherFake('<html>dummy</html>'));
    const metricsPublisherSpy = new MetricsPublisherFake;
    global.container.rebind<MetricsPublisher>(TYPES.MetricsPublisher).toConstantValue(metricsPublisherSpy);

    const sut = global.container.get<GochiUsaMonitoring>(TYPES.GochiUsaMonitoring);

    // ----------------------------------------
    // 2. action
    // ----------------------------------------
    await sut.monitorContentsAndPublishMetrics();

    // ----------------------------------------
    // 3. assertion
    // ----------------------------------------
    // とりあえず件数のみ
    expect(metricsPublisherSpy.publishedMetrics.length).toBe(4);
});
