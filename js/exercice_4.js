function validate() {
    const firstName =  document.getElementById("firstname");
    const lastName =  document.getElementById("lastname");
    const city =  document.getElementById("city");

    window.alert(`${firstName.value}\n${lastName.value}\n${city.value}`);
}