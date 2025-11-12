const reportJokes = [];
export function addReport(joke, score) {
    if (!joke || joke.trim() === "") {
        return;
    }
    const newReport = {
        joke,
        score,
        date: new Date().toISOString(),
    };
    reportJokes.push(newReport);
    console.table(reportJokes);
}
export function getReports() {
    return reportJokes;
}
//# sourceMappingURL=reportTracking.js.map