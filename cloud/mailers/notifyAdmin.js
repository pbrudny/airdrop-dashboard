Moralis.Cloud.beforeSave("User", async (request) => {
  const email = request.object.get('notificationEmail')
  const account = request.object.get('ethAddress')
  const status = request.object.get('status')
  const cratedAt = request.object.get('createdAt')

  if (email) {
    logger.info(request.object);
    Moralis.Cloud.sendEmail({
      to: 'pbrudny@gmail.com',
      subject: `User ${email} has set notification email`,
      html: "<h2>Great. Another user set the email! </h2>" +
        "<p>User's account: " + account + "</p>" +
        "<p>User's status: " + status + "</p>" +
        "<p>User's registration date: " + cratedAt + "</p>"

    });
  }
});

