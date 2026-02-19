import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // In development, just log the message
    console.log("📧 New contact form submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    console.log("---");

    // In production, you would:
    // 1. Send email using a service like EmailJS, SendGrid, or Resend
    // 2. Store in database
    // 3. Send notification to admin
    
    // Example for future integration:
    // await sendEmail({
    //   to: "urvippatel1005@gmail.com",
    //   from: email,
    //   subject: `Portfolio Contact: ${name}`,
    //   text: message,
    // });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
