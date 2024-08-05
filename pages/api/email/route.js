import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export default async function POST(req, res) {
    try {
        const { name, email, phone, message } = await req.body;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "dev.faz@productions-dev.com",
                pass: "cl-farooq1"
            }
        });
        const mailOptions = {
            from: "dev.faz@productions-dev.com",
            to: "dev.faz@productions-dev.com",
            subject: `Protfolio Message`,
            html: `
            <table>
                <tr>
                    <th>Name</th>
                    <td>${name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>${phone}</td>
                </tr>
                <tr>
                    <th>Message</th>
                    <td>${message}</td>
                </tr>
            </table>`
        }
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ "mesaage": "Email sent successfully", "status": 200 })
    } catch (error) {
        return NextResponse.json({ "mesaage": "Failed to sent Email", "status": 500 })
    }
}