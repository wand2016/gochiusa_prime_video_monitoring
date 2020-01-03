function checkAvailability(html: string): boolean {
    return !html.match(/currently unavailable/);
}

export default checkAvailability;
