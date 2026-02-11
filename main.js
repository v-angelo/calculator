// display content in calc screen
const calcDisplay = (content) => {
    result.value += content;
}

// clear screen
const clearScreen = () => {
    result.value = "";
    result.placeholder = "0";
}

// calc output
const calcResult = () => {
    try {
        result.value = "" ? result.value = "" : result.value = eval(result.value);
    }
    catch (err) {
        result.value = "";
        result.placeholder = "Invalid Expression!"
        alert(result.value);
    }
}

// delete calc screen
const delCalcScreen = () => {
    result.value = result.value.slice(0, -1);
}