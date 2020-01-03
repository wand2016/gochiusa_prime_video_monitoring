import HtmlFetcherFake from "@app/Infrastructure/HtmlFetcherFake";

test("fetchHtml/構築時に渡したhtmlを返す", async () => {
    const url = "https://example.com";
    const html = "<html>dummy</html>";
    const sut = new HtmlFetcherFake(html);

    expect(await sut.fetchHtml(url)).toBe(html);
});
