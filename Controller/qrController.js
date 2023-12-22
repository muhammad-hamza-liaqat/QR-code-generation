const qr = require("qrcode");

const home = (req, res) => {
  res.end("hello from home page");
};

const generateQRCode = async (redirectUrl) => {
  try {
    const qrCode = await qr.toDataURL(redirectUrl, {
      color: {
        dark: "#000",
        light: "#fff",
      },
      errorCorrectionLevel: "H",
    });
    return qrCode;
  } catch (error) {
    throw new Error(`Error generating QR code: ${error.message}`);
  }
};

const generate = async (req, res) => {
  const redirectUrl = "https://github.com/muhammad-hamza-liaqat/";
  try {
    const qrcode = await generateQRCode(redirectUrl);
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f0f0f0; /* Set your desired background color */
            }
            img {
                max-width: 100%;
                max-height: 100%;
            }
        </style>
    </head>
    <body>
        <img src="${qrcode}" alt="Redirect QR Code" />
    </body>
    </html>
`);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
};

module.exports = { home, generate };
