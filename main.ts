// Function to generate the resume dynamically based on user input
function generateResume(): void {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

  // Update the resume with user input
  const resumeName = document.getElementById("resume-name") as HTMLHeadingElement;
  const resumePhone = document.getElementById("resume-phone") as HTMLParagraphElement;
  const resumeEmail = document.getElementById("resume-email") as HTMLParagraphElement;
  const resumeEducation = document.getElementById("resume-education-text") as HTMLParagraphElement;
  const resumeExperience = document.getElementById("resume-experience-text") as HTMLParagraphElement;
  const resumeSkills = document.getElementById("resume-skills-text") as HTMLParagraphElement;

  resumeName.textContent = name || "No Name Provided";
  resumePhone.textContent = phone || "No Phone Provided";
  resumeEmail.textContent = email || "No Email Provided";
  resumeEducation.textContent = education || "No Education Provided";
  resumeExperience.textContent = experience || "No Experience Provided";
  resumeSkills.textContent = skills || "No Skills Provided";

  // Show the resume and hide the form
  document.getElementById("form")!.style.display = "none";
  document.getElementById("resume")!.style.display = "block";
}

// Optional: Reset the form and resume when the user clicks on the resume to edit again
document.getElementById("resume")?.addEventListener("click", () => {
  document.getElementById("form")!.style.display = "block";
  document.getElementById("resume")!.style.display = "none";
  (document.getElementById("name") as HTMLInputElement).value = "";
  (document.getElementById("phone") as HTMLInputElement).value = "";
  (document.getElementById("email" ) as HTMLInputElement).value = "";
  (document.getElementById("education") as HTMLTextAreaElement).value = "";
  (document.getElementById("experience") as HTMLTextAreaElement).value = "";
  (document.getElementById("skills") as HTMLTextAreaElement).value = "";
});
