import AvailabilityCheckerFake from "@app/Infrastructure/AvailabilityCheckerFake";
import each from "jest-each";

each([
    [true],
    [false],
]).test("checkAvailability/構築時に指定した真偽値を返す", async (availability: boolean) => {
    const url = "https://example.com";

    const sut = new AvailabilityCheckerFake(availability);

    expect(await sut.checkAvailability(url)).toBe(availability);
});
