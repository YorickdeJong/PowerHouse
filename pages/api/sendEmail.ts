import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log('name', name);
    console.log('email', email);
    console.log('message', message);

    console.log(process.env.EMAIL_USER);
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // You can use other services like Yahoo, Outlook, etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: 'qzipcov@gmail.com', // Your email where you want to receive emails
      subject: 'New Message from Website',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.log('error', error);
      res.status(500).send('Error sending email');
    }
  } else {
    res.status(405).send('Method not allowed');
  }
}
