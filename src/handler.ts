import container from "@app/inversify.config";
import { TYPES } from "@app/types";
import GochiUsaMonitoring from "@app/Services/GochiUsaMonitoring";

export const entrypoint = async () => {
    const service = container.get<GochiUsaMonitoring>(TYPES.GochiUsaMonitoring);

    try {
        await service.monitorContentsAndPublishMetrics();
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "ok",
            }, null, 2),
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "boo",
                error: e,
            }, null, 2),
        }
    }
};
