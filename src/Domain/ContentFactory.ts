import { injectable, inject } from "inversify";
import { TYPES } from "@app/types";
import AvailabilityChecker from "@app/Domain/AvailabilityChecker";
import Content from "@app/Domain/Content";

@injectable()
export default class ContentFactory {

    private availabilityChecker: AvailabilityChecker;

    constructor(
        @inject(TYPES.AvailabilityChecker) availabilityChecker: AvailabilityChecker,
    ) {
        this.availabilityChecker = availabilityChecker;
    }

    public async createContent(name: string, url: string): Promise<Content> {
        const availability = await this.availabilityChecker.checkAvailability(url);
        return new Content(name, url, availability);
    }
}
