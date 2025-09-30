var beatles = ["Paul", "George","John","Ringo"]

function printNames(names) {
    function actuallyPrintNames() {
        for (var index = 0; index < names.length; index++){
            var name =names[index]
            console.log(name + "was found at index" + index);
        }

        console.log("name and index after the loop are" + name + ":" + index)
    }
    actuallyPrintNames();
}
printNames(beatles)