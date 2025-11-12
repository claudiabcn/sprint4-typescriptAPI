import { describe, it, expect, beforeEach } from 'vitest';
import { addReport, getReports } from '../services/reportTracking';
describe('reportTracking', () => {
    beforeEach(() => {
        const reports = getReports();
        reports.length = 0;
    });
    it('should add a report', () => {
        addReport('Test joke', 2);
        const reports = getReports();
        expect(reports).toHaveLength(1);
        expect(reports[0].joke).toBe('Test joke');
        expect(reports[0].score).toBe(2);
        expect(reports[0].date).toBeDefined();
    });
    it('should not add empty joke', () => {
        addReport('', 1);
        const reports = getReports();
        expect(reports).toHaveLength(0);
    });
    it('should not add joke with only whitespace', () => {
        addReport('   ', 3);
        const reports = getReports();
        expect(reports).toHaveLength(0);
    });
    it('should add multiple reports', () => {
        addReport('Joke 1', 1);
        addReport('Joke 2', 2);
        addReport('Joke 3', 3);
        const reports = getReports();
        expect(reports).toHaveLength(3);
    });
    it('should store reports with ISO date format', () => {
        addReport('Test joke', 2);
        const reports = getReports();
        expect(() => new Date(reports[0].date)).not.toThrow();
        expect(reports[0].date).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });
});
//# sourceMappingURL=reportTracking.test.js.map