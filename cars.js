window.onload = function() {
    alert("You have reached the cars page!");
}
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var ferrariButton = document.querySelector('#Ferrari')
    var paganiButton = document.querySelector('#Pagani')
    var lamborghiniButton = document.querySelector('#Lamborghini')
    var bmwButton = document.querySelector('#BMW')
    var porscheButton = document.querySelector('#Porsche')

    if (ferrariButton.checked) {
        var selectedCar = ferrariButton.value
    } else if (paganiButton.checked) {
        var selectedCar = paganiButton.value
    } else if (lamborghiniButton.checked) {
        var selectedCar = lamborghiniButton.value
    } else if (bmwButton.checked) {
        var selectedCar = bmwButton.value
    } else if (porscheButton.checked) {
        var selectedCar = porscheButton.value
    }

    alert("You have selected: " + selectedCar + ". Good choice!");
});
