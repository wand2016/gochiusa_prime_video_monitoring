import crawlHtml from '../src/Gateways/crawlHtml';

test('HTMLを取得する', async function () {
    const html = await crawlHtml('https://www.amazon.co.jp/gp/video/detail/B014GMMG86/');
    expect(html).toMatch(/<html/);
});
