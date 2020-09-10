const prompt = require("prompt");
const chalk = require("chalk");

prompt.start();

prompt.get(["overhead", "bench", "deadlift", "squat"], (err, result) =>
{
    calculateLifts(result.overhead, result.bench, result.deadlift, result.squat);
});

const calculateLifts = (overhead, bench, deadlift, squat) =>
{
    
}
