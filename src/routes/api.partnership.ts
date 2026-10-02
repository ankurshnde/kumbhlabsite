import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/partnership")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            name?: string;
            email?: string;
            subject?: string;
            message?: string;
          };

          const name = body.name?.trim();
          const email = body.email?.trim();
          const subject = body.subject?.trim();
          const message = body.message?.trim();

          if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "Missing required fields." }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          // Read recipient address from environment variable safely on server side
          const recipientEmail = process.env.PARTNERSHIP_INBOX_EMAIL || "ankur@agenticnet.org";

          // If Resend API key is configured, send via Resend
          if (process.env.RESEND_API_KEY) {
            const resendRes = await fetch("https://api.resend.com/emails", {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                from: "Kumbh Labs Partnerships <partnerships@kumbhlabs.org>",
                to: [recipientEmail],
                reply_to: email,
                subject: `[Partnership Inquiry] ${subject || name}`,
                html: `
                  <h2>New Partnership Inquiry for Kumbh Labs</h2>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Subject/Org:</strong> ${subject || "N/A"}</p>
                  <p><strong>Message:</strong></p>
                  <blockquote style="background:#f4f4f5;padding:12px;border-left:4px solid #18181b;">
                    ${message.replace(/\n/g, "<br/>")}
                  </blockquote>
                `,
              }),
            });

            if (!resendRes.ok) {
              const errData = await resendRes.text();
              console.error("Resend error:", errData);
            }
          } else {
            // Forward securely via server-side relay
            const relayResponse = await fetch(
              `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  _subject: `[Kumbh Labs Partner Inquiry] ${subject || name}`,
                  subject: subject || "Partnership Proposal",
                  message,
                  _template: "table",
                }),
              },
            );

            if (!relayResponse.ok) {
              const relayError = await relayResponse.text();
              console.warn("Relay notice:", relayError);
            }
          }

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (error) {
          console.error("Partnership submission error:", error);
          return new Response(
            JSON.stringify({
              error: "Unable to process inquiry at this moment. Please try again.",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});
