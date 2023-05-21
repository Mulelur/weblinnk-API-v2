/* eslint-disable no-console */
import nodemailer from 'nodemailer'
import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const sendEmailToUser = async (to: string, subject: string, message: string) => {
  try {
    const transporter = nodemailer.createTransport({
      SES: new AWS.SES({ region: process.env.AWS_REGION, apiVersion: '2010-12-01' }),
    })

    const mailOptions = {
      from: 'rotonda@weblinnk.com',
      to,
      subject,
      text: message,
    }

    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Error sending email:', error)
  }
}

export default sendEmailToUser
