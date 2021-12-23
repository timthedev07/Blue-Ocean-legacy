import { NextApiHandler } from "next";
import { createTransport } from "nodemailer";
import { ContactFormValues } from "../contact";

// note:
// go to this link to allow for "less secure apps" for your gmail account
// https://myaccount.google.com/lesssecureapps

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const handler: NextApiHandler = async (req, res) => {
  return new Promise((resolve) => {
    const reqData = JSON.parse(req.body) as ContactFormValues;

    const mailOptions = {
      from: `"Business Mail Handler" <${process.env.USERNAME}>`,
      to: "blueocean.co.official@gmail.com",
      subject: `蓝海国际公司相关咨询(来自官网)`,
      html: `
客户信息:
  - 名字: ${reqData.name}
  - 邮箱: ${reqData.name}
  - 手机号: ${reqData.phoneNumber}
留言：
${reqData.message}
`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.log({ err });
        res.status(500).send({
          message: `Error: ${err}`,
          code: "contact/failure",
        });
        return resolve();
      } else {
        console.log("Mail sent.");
        res.status(200).send({
          message: "Thank you for contacting us!",
          code: "contact/success",
        });
        return resolve();
      }
    });
  });
};

export default handler;
