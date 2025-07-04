"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTestEmail = sendTestEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
function sendTestEmail(to, name, status, subject) {
    return __awaiter(this, void 0, void 0, function* () {
        const transporter = nodemailer_1.default.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'shman1739riaz@gmail.com',
                pass: 'bcoyaoacwnfmvxye',
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        try {
            const mailOptions = {
                from: '"Medicommerce" <support@medicommerce.com>',
                to,
                subject,
                html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9fafb;
        margin: 0;
        padding: 0;
        color: #333;
      }

      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        padding: 40px;
      }

      .header {
        text-align: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #e9ecef;
      }

      .header h1 {
        font-size: 24px;
        margin: 0;
        color: #2c7be5;
      }

      .content {
        margin-top: 30px;
        font-size: 16px;
        line-height: 1.7;
      }

      .status-badge {
        margin: 20px 0;
        background-color: #e7f1ff;
        color: #2c7be5;
        display: inline-block;
        padding: 8px 8px;
        border-radius: 15px;
        font-weight: bold;
        font-size: 15px;
      }

      .footer {
        margin-top: 40px;
        font-size: 13px;
        color: #6c757d;
        text-align: center;
        border-top: 1px solid #e9ecef;
        padding-top: 20px;
      }

      .footer p {
        margin: 4px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Medicommerce</h1>
      </div>
      <div class="content">
        <p>Hi ${name},</p>
        <p>
          We wanted to let you know that the <strong>${subject}</strong>
          has been updated.
        </p>
       Now it is in <p class="status-badge">${status.toUpperCase()}</p> state.
        <p>
          We’ll keep you posted if there are any more updates. If you have any questions, feel free to contact our support team.
        </p>
      </div>
      <div class="footer">
        <p>Best regards,</p>
        <p><strong>Medicommerce Team</strong></p>
        <p>support@medicommerce.com</p>
      </div>
    </div>
  </body>
</html>
`,
            };
            const info = yield transporter.sendMail(mailOptions);
        }
        catch (error) {
            console.error('❌ Failed to send email:', error);
            throw new Error('Failed to send email');
        }
    });
}
