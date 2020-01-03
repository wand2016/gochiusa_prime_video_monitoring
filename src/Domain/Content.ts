/**
 * Amazon Prime Video コンテンツ
 */
export default class Content {
    /**
     * @readonly
     */
    private _name: string;

    /**
     * @readonly
     */
    private _url: string;

    /**
     * @readonly
     */
    private _availability: boolean;

    public constructor(
        name: string,
        url: string,
        availability: boolean
    ) {
        this._name = name;
        this._url = url;
        this._availability = availability;
    }

    public getName(): string {
        return this._name;
    }

    public getUrl(): string {
        return this._url;
    }

    public isAvailable(): boolean {
        return this._availability;
    }
}
