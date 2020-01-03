import HtmlFetcherImpl from "@app/Infrastructure/HtmlFetcherImpl";

test("fetchHtml/HTMLを得る", async () => {
    const url = "https://example.com";
    const sut = new HtmlFetcherImpl();

    expect(await sut.fetchHtml(url)).toMatch("<html");
});
