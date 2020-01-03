export default interface HtmlFetcher {
    fetchHtml(url: string): Promise<string>;
}
