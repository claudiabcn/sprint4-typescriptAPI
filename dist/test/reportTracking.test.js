import { describe, it, expect, beforeEach } from "vitest";
import { addReport, getReports } from "../services/reportTracking";
describe("reportTracking", () => {
    beforeEach(() => {
        const reports = getReports();
        reports.length = 0;
    });
    it("should add a report with valid joke and score", () => {
        const joke = "Why did the chicken cross the road?";
        const score = 3;
        addReport(joke, score);
        const reports = getReports();
        expect(reports).toHaveLength(1);
        expect(reports[0].joke).toBe(joke);
        expect(reports[0].score).toBe(score);
        expect(reports[0].date).toBeDefined();
    });
    it("should add multiple reports", () => {
        addReport("First joke", 1);
        addReport("Second joke", 2);
        addReport("Third joke", 3);
        const reports = getReports();
        expect(reports).toHaveLength(3);
        expect(reports[0].joke).toBe("First joke");
        expect(reports[1].joke).toBe("Second joke");
        expect(reports[2].joke).toBe("Third joke");
    });
    it("should not add report with empty joke", () => {
        addReport("", 2);
        const reports = getReports();
        expect(reports).toHaveLength(0);
    });
    it("should accept all valid scores (1, 2, 3)", () => {
        addReport("Joke 1", 1);
        addReport("Joke 2", 2);
        addReport("Joke 3", 3);
        const reports = getReports();
        expect(reports).toHaveLength(3);
        expect(reports[0].score).toBe(1);
        expect(reports[1].score).toBe(2);
        expect(reports[2].score).toBe(3);
    });
    it("should preserve previous reports when adding new ones", () => {
        addReport("First", 1);
        const firstReports = getReports();
        const firstDate = firstReports[0].date;
        addReport("Second", 2);
        const reports = getReports();
        expect(reports).toHaveLength(2);
        expect(reports[0].joke).toBe("First");
        expect(reports[0].date).toBe(firstDate);
        expect(reports[1].joke).toBe("Second");
    });
});
//# sourceMappingURL=reportTracking.test.js.map