class Form {

  formBox = document.getElementById("form-box");
  form = document.createElement("form");
  title = document.createElement("h1");
  nameLabel = document.createElement('label');
  nameField = document.createElement('input');
  submitBtn = document.createElement('input');

  getFormBox() {
    return this.formBox;
  }

  setFormBox(value) {
    this.formBox = value;
  }

  formBoxHide() {
    this.formBox.classList.add("hidden");
  }

  formBoxShow() {
    this.formBox.classList.remove("hidden");
  }
  // Getter and Setter for form
  getForm() {
    return this.form;
  }

  setForm(value) {
    this.form = value;
  }

  // Getter and Setter for title
  getTitle() {
    return this.title;
  }

  setTitle(value) {
    this.title.innerHTML = value;
  }

  // Getter and Setter for nameLabel
  getNameLabel() {
    return this.nameLabel;
  }

  setNameLabel(value) {
    this.nameLabel.innerHTML = value;
  }

  // Getter and Setter for nameField
  getNameField() {
    return this.nameField;
  }

  setNameField(value) {
    this.nameField = value;
  }

  // Getter and Setter for submitBtn
  getSubmitBtn() {
    return this.submitBtn;
  }

  setSubmitBtn(value) {
    this.submitBtn = value;
  }

  appendElements(...args) {
    for (const element of args) {
      this.form.appendChild(element);
    }
    this.formBox.append(this.title, this.form);
  }

}

class TaskForm extends Form {
  /*
  formBox = document.getElementById("form-box");
  form = document.createElement("form");
  title = document.createElement("h1");
  nameLabel = document.createElement('label');
  nameField = document.createElement('input');
  submitBtn = document.createElement('input');
  */
  formBox = super.getFormBox();
  form = super.getForm();
  title = super.getTitle();
  nameLabel = super.getNameLabel();
  nameField = super.getNameField();
  submitBtn = super.getSubmitBtn();
  descLabel = document.createElement('label');
  descField = document.createElement('input');
  dueDateLabel = document.createElement('label');
  dueDateField = document.createElement('input');
  priorityLabel = document.createElement('label');
  priorityField = document.createElement('input');
  statusLabel = document.createElement('label');
  statusField = document.createElement('input');



  getDescLabel() {
    return this.descLabel;
  }
  setDescLabel(value) {
    this.descLabel.innerHTML = value;
  }

  // Getter and setter for descField
  getDescField() {
    return this.descField;
  }
  setDescField(value) {
    this.descField = value;
  }

  // Getter and setter for dueDateLabel
  getDueDateLabel() {
    return this.dueDateLabel;
  }
  setDueDateLabel(value) {
    this.dueDateLabel.innerHTML = value;
  }

  // Getter and setter for dueDateField
  getDueDateField() {
    return this.dueDateField;
  }
  setDueDateField(value) {
    this.dueDateField = value;
  }

  // Getter and setter for priorityLabel
  getPriorityLabel() {
    return this.priorityLabel;
  }
  setPriorityLabel(value) {
    this.priorityLabel.innerHTML = value;
  }

  // Getter and setter for priorityField
  getPriorityField() {
    return this.priorityField;
  }
  setPriorityField(value) {
    this.priorityField = value;
  }

  // Getter and setter for statusLabel
  getStatusLabel() {
    return this.statusLabel;
  }
  setStatusLabel(value) {
    this.statusLabel.innerHTML = value;
  }

  // Getter and setter for statusField
  getStatusField() {
    return this.statusField;
  }
  setStatusField(value) {
    this.statusField = value;
  }

}
export { Form, TaskForm }