export function createWelcomeEmailTemplate(name, clientURL) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Chatify</title>
</head>

<body style="margin:0; padding:0; background-color:#f2f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#333;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, #36D1DC, #5B86E5); padding:40px; text-align:center;">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg?w=800"
                alt="Chatify Logo"
                style="width:90px; height:90px; border-radius:50%; background:#ffffff; padding:12px; margin-bottom:20px;"
              />
              <h1 style="margin:0; color:#ffffff; font-size:30px; font-weight:600;">
                Welcome to Chatify 🎉
              </h1>
              <p style="margin-top:12px; color:#eaf3ff; font-size:16px;">
                Simple. Fast. Real-time messaging.
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:40px 35px;">
              <p style="font-size:18px; margin-top:0;">
                Hi <strong>${name}</strong>,
              </p>

              <p style="font-size:16px; line-height:1.7;">
                We’re excited to have you join Chatify. It’s built to help you stay connected with friends, family, and colleagues effortlessly.
              </p>

              <div style="margin:30px 0; background:#f8fafc; border-radius:12px; padding:25px;">
                <h3 style="margin-top:0; font-size:18px; color:#5B86E5;">
                  Get started in minutes 🚀
                </h3>
                <ul style="padding-left:20px; margin:0; font-size:15px; line-height:1.8;">
                  <li>🖼️ Set up your profile</li>
                  <li>👥 Add your contacts</li>
                  <li>💬 Start real-time chats</li>
                  <li>📎 Share photos and files</li>
                </ul>
              </div>

              <div style="text-align:center; margin:40px 0;">
                <a
                  href="${clientURL}"
                  style="background:linear-gradient(135deg, #36D1DC, #5B86E5); color:#ffffff; text-decoration:none; padding:14px 36px; border-radius:50px; font-size:16px; font-weight:600; display:inline-block;"
                >
                  Open Chatify
                </a>
              </div>

              <p style="font-size:15px;">
                Need help or have questions? We’re always here for you.
              </p>

              <p style="margin-bottom:0;">
                Cheers,<br />
                <strong>Team Chatify</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f5f7fa; text-align:center; padding:20px; font-size:12px; color:#888;">
              <p style="margin:0 0 10px;">
                © 2025 Chatify. All rights reserved.
              </p>
              <p style="margin:0;">
                <a href="#" style="color:#5B86E5; text-decoration:none; margin:0 8px;">Privacy</a> |
                <a href="#" style="color:#5B86E5; text-decoration:none; margin:0 8px;">Terms</a> |
                <a href="#" style="color:#5B86E5; text-decoration:none; margin:0 8px;">Support</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
}
