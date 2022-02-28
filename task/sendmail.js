const { smtpInfo, mailsClient, fromMail } = require("../sendmailconfig")

const { src, dest } = require("gulp")
const $ = require("gulp-load-plugins")()

/* send mail */

module.exports = function sendmail() {
  return src("build-test/**/*.html").pipe(
    $.mailing({
      subject: "TestEmail",
      to: [...mailsClient],
      from: fromMail,
      smtp: smtpInfo,
    })
  )
}
