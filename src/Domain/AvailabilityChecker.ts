export default interface AvailabilityChecker {
    checkAvailability(url: string): Promise<boolean>;
}
