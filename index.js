const prompt = require("prompt");
const chalk = require("chalk");
const { fillPDF, weekOne, weekTwo, weekThree, weekFour } = require("./pdfcreator");

prompt.start();

prompt.get(["overhead", "bench", "deadlift", "squat"], (err, result) =>
{
    weekOne(calcLifts(result.overhead, 1), calcLifts(result.bench, 1), calcLifts(result.deadlift, 1), calcLifts(result.squat, 1), 1);
    weekTwo(calcLifts(result.overhead, 2), calcLifts(result.bench, 2), calcLifts(result.deadlift, 2), calcLifts(result.squat, 2), 2);
    weekThree(calcLifts(result.overhead, 3), calcLifts(result.bench, 3), calcLifts(result.deadlift, 3), calcLifts(result.squat, 3), 3);
    weekFour(calcLifts(result.overhead, 4), calcLifts(result.bench, 4), calcLifts(result.deadlift, 4), calcLifts(result.squat, 4), 4);
    fillPDF();
});

const calcLifts = (trainingMax, week) =>
{
    if (week == 1) return [calcWeight(trainingMax, 65), calcWeight(trainingMax, 75), calcWeight(trainingMax, 85)];
    else if (week == 2) return [calcWeight(trainingMax, 70), calcWeight(trainingMax, 80), calcWeight(trainingMax, 90)];
    else if (week == 3) return [calcWeight(trainingMax, 75), calcWeight(trainingMax, 85), calcWeight(trainingMax, 95)];
    else if (week == 4) return [calcWeight(trainingMax, 40), calcWeight(trainingMax, 50), calcWeight(trainingMax, 60)];
}

const calcWeight = (weight, percentage) =>
{
    return Math.round(weight * (percentage / 100));
}


