const pdfPrinter = require("pdfmake");
const fs = require("fs");

var fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Medium.ttf'
    }
};

const printer = new pdfPrinter(fonts);


let definitionOne, definitionTwo, definitionThree, definitionFour;



const fillPDF = (overhead, squat, bench, dead) =>
{
    const docDefinition = {
        content: [{
            text: "Week 1",
            style: "week"
        },
        {
            table: definitionOne,
            layout: {
                fillColor: function (rowIndex, node, columnIndex)
                {
                    if (rowIndex === 0) return "grey";
                    return (rowIndex % 2 === 0) ? "#CCCCCC" : null;
                }
            }
        },
        {
            text: "Week 2",
            style: "week"
        },
        {
            table: definitionTwo,
            layout: {
                fillColor: function (rowIndex, node, columnIndex)
                {
                    if (rowIndex === 0) return "grey";
                    return (rowIndex % 2 === 0) ? "#CCCCCC" : null;
                }
            }
        },
        {
            text: "Week 3",
            style: "week"
        },
        {
            table: definitionThree,
            layout: {
                fillColor: function (rowIndex, node, columnIndex)
                {
                    if (rowIndex === 0) return "grey";
                    return (rowIndex % 2 === 0) ? "#CCCCCC" : null;
                }
            }
        },
        {
            text: "Week 4",
            style: "week"
        },
        {
            table: definitionFour,
            layout: {
                fillColor: function (rowIndex, node, columnIndex)
                {
                    if (rowIndex === 0) return "grey";
                    return (rowIndex % 2 === 0) ? "#CCCCCC" : null;
                }
            }
        }
        ],
        styles: {
            header: {
                margin: [0, 5, 0, 5],
                alignment: "center"
            },
            week: {
                margin: [0, 25, 0, 25],
                alignment: "center",
                fontSize: 22
            },
            weight: {
                alignment: "center",
                margin: [0, 2, 0, 2]
            }
        }
    }

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream("./pdf/531lifts.pdf"));
    pdfDoc.end();
}

const weekOne = (overhead, squat, bench, dead) =>
{
    definitionOne = {
        widths: ["25%", "25%", "25%", "25%"],
        body: [
            [{ text: "Overhead Press", style: "header" }, { text: "Squat", style: "header" }, { text: "Bench Press", style: "header" }, { text: "Deadlift", style: "header" }],
            [{ text: overhead[0] + " kg x5", style: "weight" }, { text: squat[0] + " kg x5", style: "weight" }, { text: bench[0] + " kg x5", style: "weight" }, { text: dead[0] + " kg x5", style: "weight" }],
            [{ text: overhead[1] + " kg x5", style: "weight" }, { text: squat[1] + " kg x5", style: "weight" }, { text: bench[1] + " kg x5", style: "weight" }, { text: dead[1] + " kg x5", style: "weight" }],
            [{ text: overhead[2] + " kg x5+", style: "weight" }, { text: squat[2] + " kg x5+", style: "weight" }, { text: bench[2] + " kg x5+", style: "weight" }, { text: dead[2] + " kg x5+", style: "weight" }]
        ]
    }
}

const weekTwo = (overhead, squat, bench, dead) =>
{
    definitionTwo = {
        widths: ["25%", "25%", "25%", "25%"],
        body: [
            [{ text: "Overhead Press", style: "header" }, { text: "Squat", style: "header" }, { text: "Bench Press", style: "header" }, { text: "Deadlift", style: "header" }],
            [{ text: overhead[0] + " kg x3", style: "weight" }, { text: squat[0] + " kg x3", style: "weight" }, { text: bench[0] + " kg x3", style: "weight" }, { text: dead[0] + " kg x3", style: "weight" }],
            [{ text: overhead[1] + " kg x3", style: "weight" }, { text: squat[1] + " kg x3", style: "weight" }, { text: bench[1] + " kg x3", style: "weight" }, { text: dead[1] + " kg x3", style: "weight" }],
            [{ text: overhead[2] + " kg x3+", style: "weight" }, { text: squat[2] + " kg x3+", style: "weight" }, { text: bench[2] + " kg x3+", style: "weight" }, { text: dead[2] + " kg x3+", style: "weight" }]
        ]
    }
}

const weekThree = (overhead, squat, bench, dead) =>
{
    definitionThree = {
        widths: ["25%", "25%", "25%", "25%"],
        body: [
            [{ text: "Overhead Press", style: "header" }, { text: "Squat", style: "header" }, { text: "Bench Press", style: "header" }, { text: "Deadlift", style: "header" }],
            [{ text: overhead[0] + " kg x5", style: "weight" }, { text: squat[0] + " kg x5", style: "weight" }, { text: bench[0] + " kg x5", style: "weight" }, { text: dead[0] + " kg x5", style: "weight" }],
            [{ text: overhead[1] + " kg x3", style: "weight" }, { text: squat[1] + " kg x3", style: "weight" }, { text: bench[1] + " kg x3", style: "weight" }, { text: dead[1] + " kg x3", style: "weight" }],
            [{ text: overhead[2] + " kg x1+", style: "weight" }, { text: squat[2] + " kg x1+", style: "weight" }, { text: bench[2] + " kg x1+", style: "weight" }, { text: dead[2] + " kg x1+", style: "weight" }]
        ]
    }
}

const weekFour = (overhead, squat, bench, dead) =>
{
    definitionFour = {
        widths: ["25%", "25%", "25%", "25%"],
        body: [
            [{ text: "Overhead Press", style: "header" }, { text: "Squat", style: "header" }, { text: "Bench Press", style: "header" }, { text: "Deadlift", style: "header" }],
            [{ text: overhead[0] + " kg x5", style: "weight" }, { text: squat[0] + " kg x5", style: "weight" }, { text: bench[0] + " kg x5", style: "weight" }, { text: dead[0] + " kg x5", style: "weight" }],
            [{ text: overhead[1] + " kg x5", style: "weight" }, { text: squat[1] + " kg x5", style: "weight" }, { text: bench[1] + " kg x5", style: "weight" }, { text: dead[1] + " kg x5", style: "weight" }],
            [{ text: overhead[2] + " kg x5", style: "weight" }, { text: squat[2] + " kg x5", style: "weight" }, { text: bench[2] + " kg x5", style: "weight" }, { text: dead[2] + " kg x5", style: "weight" }]
        ]
    }
}

module.exports = {
    fillPDF,
    weekOne,
    weekTwo,
    weekThree,
    weekFour
}