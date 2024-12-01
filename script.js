
function convertToUpperCase() {
    const input = document.getElementById("textInput").value;
    document.getElementById("result").innerText = input.toUpperCase();
}


function convertToLowerCase() {
    const input = document.getElementById("textInput").value;
    document.getElementById("result").innerText = input.toLowerCase();
}


function countWords() {
    const input = document.getElementById("textInput").value.trim();
    const wordCount = input ? input.split(/\s+/).length : 0;
    document.getElementById("result").innerText = `Word Count: ${wordCount}`;
}


function countCharacters() {
    const input = document.getElementById("textInput").value;
    document.getElementById("result").innerText = `Character Count: ${input.length}`;
}
