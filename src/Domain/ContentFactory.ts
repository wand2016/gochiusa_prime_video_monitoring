import { inject } from 'inversify';
import { TYPES } from '@app/types';
import AvailabilityChecker from '@app/Domain/AvailabilityChecker';
import Content from "@app/Domain/Content";

export default class ContentFactory {

    @inject(TYPES.AvailabilityChecker) private _availabilityChecker: AvailabilityChecker;

    constructor(
        availabilityChecker: AvailabilityChecker
    ) {
        this._availabilityChecker = availabilityChecker;
    }

    async createContent(name: string, url: string): Promise<Content> {
        const availability = await this._availabilityChecker.checkAvailability(url);
        return new Content(name, url, availability);
    }
}
