import HtmlFetcher from "./HtmlFetcher";
import fetch from "node-fetch";

export default class HtmlFetcherImpl implements HtmlFetcher {
    async fetchHtml(url: string): Promise<string> {
        return (await fetch(url)).text();
    }
}
