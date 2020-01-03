import AvailabilityChecker from "@app/Domain/AvailabilityChecker";
import { inject, injectable } from "inversify";
import { TYPES } from "@app/types";
import HtmlFetcher from "@app/Infrastructure/HtmlFetcher";

@injectable()
export default class AvailabilityCheckerImpl implements AvailabilityChecker {
    /**
     * @readonly
     */
    private htmlFetcher: HtmlFetcher;

    public constructor(
        @inject(TYPES.HtmlFetcher) htmlFetcher: HtmlFetcher,
    ) {
        this.htmlFetcher = htmlFetcher;
    }

    public async checkAvailability(url: string): Promise<boolean> {
        const html = await this.htmlFetcher.fetchHtml(url);
        return !html.match(/(currently unavailable|現在利用できません)/);
    }
}
