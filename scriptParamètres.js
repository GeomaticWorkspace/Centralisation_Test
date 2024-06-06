function displayRowInformation(row) {
    // Find the <td> element containing the image and title
    var tdElement = row.find('td:first-child');

    // Find the <p> tag within the <td> element and get its text
    var titre = tdElement.find('p').text();

    // Get the alt attribute of the image
    var nom = row.find('td:eq(1)').text(); // Get the text of the second td element
    var profession = row.find('td:eq(2)').text(); // Get the text of the third td element
    var email = row.find('td:eq(3)').text();
    var dateAjout = row.find('td:eq(4)').text();
    var role = row.find('td:eq(5)').text(); // Get the text of the fourth td element

    // Display information in the modal
    $('#labelNom').text(nom).css('color', '#3C91E6');
    $('#labelProfession').text(profession).css('color', '#3C91E6');
    $('#labelEmail').text(email).css('color', '#3C91E6');
    $('#labelDateAjout').text(dateAjout).css('color', '#3C91E6');
    $('#labelRole').text(role).css('color', '#3C91E6');

    // Show the modal
    $('#exampleModal').modal('show');
}

$(document).on('click', 'tbody tr', function() {
    var row = $(this);
    displayRowInformation(row);
});
function populateUpdateModal(editButton) {
    // Get the closest row to the clicked edit button
    var row = $(editButton).closest("tr");


    // Extraire les informations de la ligne cliquée
    var nom = row.find('td:eq(1)').text();
    var profession = row.find('td:eq(2)').text();
    var email = row.find('td:eq(3)').text();
    var dateAjout = row.find('td:eq(4)').text();
    var role = row.find('td:eq(5)').text();
    
    
    function formatDate(dateStr) {
        var parts = dateStr.split('/');
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }

    // Remplir le modal de mise à jour du client avec les informations extraites
    $('#inputNomUpdate').val(nom).css('color', '#3C91E6');
    $('#inputProfessionUpdate').val(profession).css('color', '#3C91E6');
    $('#inputEmailUpdate').val(email).css('color', '#3C91E6');
    $('#inputDateAjoutUpdate').val(formatDate(dateAjout)).css('color', '#3C91E6');
    $('#inputRoleUpdate').val(role).css('color', '#3C91E6');


}

    // Stocker la ligne actuelle pour une utilisation ultérieure
   $('#updateUtilisateurForm').data('currentRow', row);
    // Afficher le modal de mise à jour du client
   //$('#UpdateUtilisateurModal').modal('show');

// Ajouter un écouteur d'événements pour les clics sur le bouton d'édition
$(document).on('click', '.edit-button', function() {
    var row = $(this).closest('tr'); // Correction pour sélectionner la ligne parent
    populateUpdateModal(row);
});
function getDateFromString(dateString) {
    // Split the date string into day, month, and year parts
    var parts = dateString.split('/');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Create a new Date object with the extracted parts
    return new Date(year, month - 1, day); // Month is zero-based in Date constructor
}

function setDateValues() {
    var dateReceptionInput = document.getElementById("inputDateReceptionUpdate");
    var datePublicationInput = document.getElementById("inputDatePublicationUpdate");
    var dateDerniereMiseAJourInput = document.getElementById("inputDateDerniereMiseAJourUpdate");
    var dateAjoutInput = document.getElementById("inputDateAjoutUpdate");


    // Get the date strings from the table cells
    var dateReceptionString = document.getElementById("dateReceptionCell").textContent.trim();
    var datePublicationString = document.getElementById("datePublicationCell").textContent.trim();
    var dateDerniereMiseAJourString = document.getElementById("dateDerniereMiseAJourCell").textContent.trim();
    var dateAjoutString = document.getElementById("dateAjoutCell").textContent.trim();


    // Convert the date strings to Date objects
    var dateReception = getDateFromString(dateReceptionString);
    var datePublication = getDateFromString(datePublicationString);
    var dateDerniereMiseAJour = getDateFromString(dateDerniereMiseAJourString);
    var dateAjout = getDateFromString(dateAjoutString);


    // Format the dates into yyyy-mm-dd format (required by input[type="date"])
    var formattedDateReception = dateReception.toISOString().split('T')[0];
    var formattedDatePublication = datePublication.toISOString().split('T')[0];
    var formattedDateDerniereMiseAJour = dateDerniereMiseAJour.toISOString().split('T')[0];
    var formattedDateAjout = dateAjout.toISOString().split('T')[0];


    // Set the formatted dates to the input fields
    dateReceptionInput.value = formattedDateReception;
    datePublicationInput.value = formattedDatePublication;
    dateDerniereMiseAJourInput.value = formattedDateDerniereMiseAJour;
    dateAjoutInput.value = formattedDateAjout;

}

// Call the function to set the date values when needed
setDateValues();
