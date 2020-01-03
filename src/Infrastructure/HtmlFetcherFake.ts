import HtmlFetcher from "./HtmlFetcher";

class HtmlFetcherFake implements HtmlFetcher {
    constructor(private html: string) { }

    fetchHtml(_: string): Promise<string> {
        return Promise.resolve(this.html);
    }
}

export default HtmlFetcherFake;
