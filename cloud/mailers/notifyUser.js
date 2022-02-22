Moralis.Cloud.define("notifyReceiver", function (request) {
  const userEmail = request.params.userEmail;
  const rabbitId = request.params.rabbitId;
  const txHash = request.params.txHash;
  const receiverAddress = request.params.receiverAddress;

  Moralis.Cloud.sendEmail({
    to: userEmail,
    subject: `You have received CryptoRabbits NFT from TR BlockchainCrew`,
    html: "Hey," +
      "<p> We are happy to announce that you have received: </p>" +
    "<h3>NFT CryptoRabbit " + rabbitId + "</h3>" +
    "<br />You can see your NFT on OpenSea testnet: https://testnets.opensea.io/assets/mumbai/0x1155bff43e0eb873651d851bc46a22d9cff9b385/" + rabbitId +
      "<br />Check the transaction on Mumbai Polygon Chain: https://mumbai.polygonscan.com/tx/" + txHash +
    "<p><strong>Disclaimer:</strong></p>" +
      "<br />Keep in mind that this is testnet so all the money are fake :disappointed: ," +
    "<p>All the best from The Blockchain Crew</p>>"
  });
});

