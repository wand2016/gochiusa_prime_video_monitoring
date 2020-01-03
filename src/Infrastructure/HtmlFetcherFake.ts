import HtmlFetcher from "./HtmlFetcher";
import { injectable } from "inversify";

@injectable()
class HtmlFetcherFake implements HtmlFetcher {
    constructor(private _html: string) { }

    fetchHtml(_: string): Promise<string> {
        return Promise.resolve(this._html);
    }
}

export default HtmlFetcherFake;
