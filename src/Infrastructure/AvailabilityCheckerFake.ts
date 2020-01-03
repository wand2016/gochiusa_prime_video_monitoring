import AvailabilityChecker from "@app/Domain/AvailabilityChecker";
import { injectable } from "inversify";

@injectable()
export default class AvailabilityCheckerFake implements AvailabilityChecker {
    private availability: boolean;

    public constructor(
        availability: boolean,
    ) {
        this.availability = availability;
    }

    public async checkAvailability(_: string): Promise<boolean> {
        return Promise.resolve(this.availability);
    }
}
