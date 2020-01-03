import Content from "@app/Domain/Content";
import each from 'jest-each';

each([
    ['1期', 'https://www.amazon.co.jp/gp/video/detail/B014GMMG86/', false],
    ['DMS', 'https://www.amazon.co.jp/gp/video/detail/B07FN4TGPK/', true],
]).test('getter,isser/構築時に指定した値を取得する', (name: string, url: string, availability: boolean) => {
    const sut = new Content(name, url, availability);

    expect(sut.getName()).toBe(name);
    expect(sut.getUrl()).toBe(url);
    expect(sut.isAvailable()).toBe(availability);
});
