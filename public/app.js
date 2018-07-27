var form = $('#reportForm');
var button = $('#showFormButton');

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