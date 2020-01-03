import ContentFactory from "@app/Domain/ContentFactory";
import AvailabilityCheckerFake from "@app/Infrastructure/AvailabilityCheckerFake";
import each from "jest-each";

each([
    ['1期', 'https://www.amazon.co.jp/gp/video/detail/B014GMMG86/', false],
    ['DMS', 'https://www.amazon.co.jp/gp/video/detail/B07FN4TGPK/', true],
]).test("指定の引数でContentを生成できる", async (name: string, url: string, availability: boolean) => {
    const sut = new ContentFactory(new AvailabilityCheckerFake(availability));

    const content = await sut.createContent(name, url);

    expect(content.getName()).toBe(name);
    expect(content.getUrl()).toBe(url);
    expect(content.isAvailable()).toBe(availability);
});
