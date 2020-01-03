import HtmlFetcher from "@app/Infrastructure/HtmlFetcher";
import { injectable } from "inversify";

@injectable()
class HtmlFetcherFake implements HtmlFetcher {
    constructor(private html: string) { }

    public fetchHtml(_: string): Promise<string> {
        return Promise.resolve(this.html);
    }
}

export default HtmlFetcherFake;
