function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function whatsapp() {
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value.replace(/\s+/g, ""); // Remove spaces from mobile number
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  //   var whatsappurl = "https://wa.me/+628112562200?text=" + "Nama: " + name + "%0a" + "Nomor Telp: " + mobile + "%0a" + "Email: " + email + "%0a" + "Pesan: " + message;
  var whatsappurl = "https://wa.me/+62895383243075?text=" + "https://eskm.bmkg.go.id/survey/436860/0/2/2022-07/2022/0" + "Nama: " + name + "%0a" + "Nomor Telp: " + mobile + "%0a" + "Email: " + email + "%0a" + "Pesan: " + message;

  window.open(whatsappurl, "_blank").focus();
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
