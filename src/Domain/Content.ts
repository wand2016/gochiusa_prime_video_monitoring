/**
 * Amazon Prime Video コンテンツ
 */
export default class Content {
    /**
     * @readonly
     */
    private name: string;

    /**
     * @readonly
     */
    private url: string;

    /**
     * @readonly
     */
    private availability: boolean;

    public constructor(
        name: string,
        url: string,
        availability: boolean,
    ) {
        this.name = name;
        this.url = url;
        this.availability = availability;
    }

    public getName(): string {
        return this.name;
    }

    public getUrl(): string {
        return this.url;
    }

    public isAvailable(): boolean {
        return this.availability;
    }
}
