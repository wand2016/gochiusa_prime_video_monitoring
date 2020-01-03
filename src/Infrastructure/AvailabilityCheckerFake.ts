import AvailabilityChecker from "@app/Domain/AvailabilityChecker";
import { injectable } from "inversify";

@injectable()
export default class AvailabilityCheckerFake implements AvailabilityChecker {
    private _availability: boolean;

    public constructor(
        availability: boolean
    ) {
        this._availability = availability;
    }

    async checkAvailability(_: string): Promise<boolean> {
        return Promise.resolve(this._availability);
    }
}
