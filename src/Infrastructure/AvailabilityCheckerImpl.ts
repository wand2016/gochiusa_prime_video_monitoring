import AvailabilityChecker from "@app/Domain/AvailabilityChecker";
import { inject, injectable } from "inversify";
import { TYPES } from "@app/types";
import HtmlFetcher from "@app/Infrastructure/HtmlFetcher";

@injectable()
export default class AvailabilityCheckerImpl implements AvailabilityChecker {
    /**
     * @readonly
     */
    private _htmlFetcher: HtmlFetcher;

    public constructor(
        @inject(TYPES.HtmlFetcher) htmlFetcher: HtmlFetcher
    ) {
        this._htmlFetcher = htmlFetcher;
    }

    async checkAvailability(url: string): Promise<boolean> {
        const html = await this._htmlFetcher.fetchHtml(url);
        return !html.match(/currently unavailable/);
    }
}
