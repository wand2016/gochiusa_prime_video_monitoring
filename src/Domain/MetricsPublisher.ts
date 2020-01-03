import Content from "@app/Domain/Content";

export default interface MetricsPublisher {
    publishMetrics(contents: Content[]): Promise<void>;
}
