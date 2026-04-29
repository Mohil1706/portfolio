<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

(function(){
  emailjs.init("smDHHl7rj3pPzIJ20");
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_3z9xn2t", "template_4a6dohk", this)
    .then(function() {
      alert("✅ Message Sent Successfully!");
    }, function(error) {
      alert("❌ Failed to send message. Try again.");
      console.log(error);
    });
});
