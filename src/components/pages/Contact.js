import { Box,Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <hr />
      <p>
      Like I mentioned above, a Contact Us page is one of the most valuable pages you can have on your site.

But, unfortunately, many website designers might place it near the bottom of their priority list in terms of copywriting and design. (Which is probably why many contact pages look like they were built in the 1990s…)

Lets review the elements that effective Contact Us pages have in common to learn about the features and best practices you should remember to include in your web form.

Great contact forms typically provide:

contact us page best practices

Good Design and Navigation
Easy Accessibility: Ensure the contact form is easily accessible for visitors.
Optimal Design: Utilize user-friendly layouts, themes, and clear formatting for a seamless experience.
Clear Purpose and Contact Options
Clarification: Clearly explain the reasons why visitors should contact your business.
Showcasing Work: Display your brand's services or products to offer insights upfront.
Contact Information: Provide email and phone number for immediate communication.
Call-to-Action: Include alternative actions for visitors who prefer not to fill out the form, like the option to reach out directly via live chat      </p>

      <Box
        component="form"
        sx={{
          width: "100%",
          height:"100px",
          maxWidth: "500px",
          margin: "30px auto", // centers the form and adds spacing
          display: "flex",
          flexDirection: "column", // stack form elements vertically
          gap: "16px" // spacing between form elements
        }}
      >
        <TextField
        required
        label="Name"
        fullWidth
        />
        <TextField
          required
          label="Email Address"
          fullWidth
        />
        <TextField
          required
          label="Message"
          fullWidth
        />
        <Button variant="contained">Submit</Button>
      </Box>
    </>
  );
}
