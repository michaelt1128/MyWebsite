var nodemailer = require('nodemailer');
var config = require('../Keys/email_config')

var transporter = nodemailer.createTransport('smtps://'+config.email+'%40gmail.com:'+config.password+';@smtp.gmail.com');

module.exports.sendForgotPasswordEmail = function(req, res) {
  console.log(req.body);
  var mailOptions = {
    from: '<'+config.email+'@gmail.com>',
    to: req.body.email,
    subject: 'test mail',
    text: 'This is only a drill',
    html: '<b>test<b>'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if(error){
      return console.log(error);
    }
    console.log('message sent:', info.response);
  });
}