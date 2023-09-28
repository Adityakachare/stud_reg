function submitFormData() {
  const form = document.getElementById("registrationForm");
  const displayArea = document.getElementById("displayArea");

  // Fetch form values
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const website = form.elements["website"].value;
  const imageLink = form.elements["image"].value;
  let gender = "";
  if (form.elements["gender"].value) {
    gender = form.elements["gender"].value;
  }
  const skills = [];
  const skillsCheckboxes = form.elements["skills[]"];

  for (let i = 0; i < skillsCheckboxes.length; i++) {
    if (skillsCheckboxes[i].checked) {
      skills.push(skillsCheckboxes[i].value);
    }
  }

  // Create a new div element to display the data
  const newDataDiv = document.createElement("div");
  newDataDiv.innerHTML = `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Website Link:</strong> <a href="${website}" target="_blank">${website}</a></p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Skills:</strong> ${skills.join(", ")}</p>
            `;

  // Create an image element to display the image
  const imageElement = document.createElement("img");
  imageElement.src = imageLink;
  imageElement.alt = "Image";
  imageElement.style.maxWidth = "200px"; // Limit the image width
  imageElement.style.maxHeight = "200px"; // Limit the image height

  // Create a table element to format the layout and add borders
  const tableElement = document.createElement("table");
  tableElement.style.width = "100%"; // Make the table full width
  tableElement.style.border = "1px solid #ccc"; // Add a 1px solid gray border

  // Create row and cell elements for the table
  const rowElement = document.createElement("tr");
  const column1 = document.createElement("td");
  const column2 = document.createElement("td");

  // Add borders to the columns and rows
  column1.style.border = "1px solid #ccc"; // Add a 1px solid gray border to the first column
  column2.style.border = "1px solid #ccc"; // Add a 1px solid gray border to the second column
  rowElement.style.border = "1px solid #ccc"; // Add a 1px solid gray border to the row

  // Append the data and image to the table cells
  column1.appendChild(newDataDiv);
  column2.appendChild(imageElement);

  // Append the cells to the row
  rowElement.appendChild(column1);
  rowElement.appendChild(column2);

  // Append the row to the table
  tableElement.appendChild(rowElement);

  // Append the table to the display area
  displayArea.appendChild(tableElement);

  // Reset the form
  form.reset();
}
