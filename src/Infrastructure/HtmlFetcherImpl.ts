import HtmlFetcher from "./HtmlFetcher";
import fetch from "node-fetch";
import { injectable } from "inversify";

@injectable()
class HtmlFetcherImpl implements HtmlFetcher {
    async fetchHtml(url: string): Promise<string> {
        return (await fetch(url)).text();
    }
}

export default HtmlFetcherImpl;
