Moralis.Cloud.beforeSave("User", async (request) => {
  const email = request.object.get('notificationEmail')

  if (email) {
    Moralis.Cloud.sendEmail({
      to: 'pbrudny@gmail.com',
      subject: `User ${email} has set notification email`,
      html: "Great. Another user set the email!"
    });
  }
});

Moralis.Cloud.define("userApplied", function (request) {
  Moralis.Cloud.sendEmail({
    to: 'pbrudny@gmail.com',
    subject: `User ${request.params.userEmail} applied for HackRabbit NFT`,
    html: "<h2>Awesome. One more applied for NFT!</h2>" +
      "<p>User's account: " + request.params.userAccount + "</p>"
  });
});

