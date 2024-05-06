var name = "Nathaniel's";
var nameLetters = name.split("");
var nameIndex = 0;

var nameInterval = setInterval(function () {
    if (nameIndex >= nameLetters.length) {
        clearInterval(nameInterval);
        startDescriptorAnimation();
    } else {
        document.getElementById("name").textContent += nameLetters[nameIndex];
        nameIndex++;
    }
}, 100); // Speed

var descriptors = [
    "canvas",
    'universe',
    "innovation",
    "playground",
    "narrative",
    "journey",
    "vision",
    "perspective",
    "creation",
    "notation",
];
var currentDescriptorIndex = 0;

function startDescriptorAnimation() {
    setInterval(function () {
        currentDescriptorIndex++;
        if (currentDescriptorIndex >= descriptors.length) {
            currentDescriptorIndex = 0;
        }
        document.getElementById("descriptor").innerHTML =
            descriptors[currentDescriptorIndex];
    }, 400); // Speed
}


