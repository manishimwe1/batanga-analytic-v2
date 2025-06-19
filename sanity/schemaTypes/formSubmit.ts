export default {
  name: "contactForm",
  title: "Contact Form Submission",
  type: "document",
  fields: [
    { name: "firstName", type: "string", title: "First Name" },
    { name: "lastName", type: "string", title: "Last Name" },
    { name: "email", type: "string", title: "Work Email" },
    { name: "solution", type: "string", title: "Solution of Interest" },
    { name: "industry", type: "string", title: "Relevant Industry" },
    { name: "message", type: "text", title: "Message" },
    { name: "agreeTos", type: "boolean", title: "Agreed to Terms" },
    { name: "agreeMarketing", type: "boolean", title: "Agreed to Marketing" },
    { name: "_createdAt", type: "datetime", title: "Submitted At" },
  ],
};
