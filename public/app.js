// Form and toggle button.
var form = $('#reportForm');
var button = $('#showFormButton');

// Show and hide the form
function toggleForm() {
    if(form.css("display") == "none"){
        form.show();
        button.text("Hide Form");
    } else {
        form.hide();
        button.text("Add New Report");
    }
}

button.click(toggleForm);