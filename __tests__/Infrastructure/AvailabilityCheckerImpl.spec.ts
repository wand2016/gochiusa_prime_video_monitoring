import fs from "fs";
import path from "path";
import AvailabilityCheckerImpl from "@app/Infrastructure/AvailabilityCheckerImpl";
import HtmlFetcherFake from "@app/Infrastructure/HtmlFetcherFake";

test("checkAvailability/視聴可能ならばtrue", async () => {
    // ----------------------------------------
    // 1. setup
    // HTMLフェッチをモックする
    // ----------------------------------------
    const availableHtml = fs.readFileSync(path.join(__dirname, "./sample/available.html"), "UTF-8");
    const sut = new AvailabilityCheckerImpl(new HtmlFetcherFake(availableHtml));

    // ----------------------------------------
    // 2. action
    // ----------------------------------------
    const availability = await sut.checkAvailability("https://www.amazon.co.jp/gp/video/detail/B014GMMG86/");

    // ----------------------------------------
    // 3. assertion
    // ----------------------------------------
    expect(availability).toBe(true);
});

test("checkAvailability/視聴不可能ならばfalse", async () => {
    // ----------------------------------------
    // 1. setup
    // HTMLフェッチをモックする
    // ----------------------------------------
    const unavailableHtml = fs.readFileSync(path.join(__dirname, "./sample/unavailable.html"), "UTF-8");
    const sut = new AvailabilityCheckerImpl(new HtmlFetcherFake(unavailableHtml));

    // ----------------------------------------
    // 2. action
    // ----------------------------------------
    const availability = await sut.checkAvailability("https://www.amazon.co.jp/gp/video/detail/B014GMMG86/");

    // ----------------------------------------
    // 3. assertion
    // ----------------------------------------
    expect(availability).toBe(false);
});
