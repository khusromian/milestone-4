var _a;
// Function to generate the resume dynamically based on user input
function generateResume() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Update the resume with user input
    var resumeName = document.getElementById("resume-name");
    var resumePhone = document.getElementById("resume-phone");
    var resumeEmail = document.getElementById("resume-email");
    var resumeEducation = document.getElementById("resume-education-text");
    var resumeExperience = document.getElementById("resume-experience-text");
    var resumeSkills = document.getElementById("resume-skills-text");
    resumeName.textContent = name || "No Name Provided";
    resumePhone.textContent = phone || "No Phone Provided";
    resumeEmail.textContent = email || "No Email Provided";
    resumeEducation.textContent = education || "No Education Provided";
    resumeExperience.textContent = experience || "No Experience Provided";
    resumeSkills.textContent = skills || "No Skills Provided";
    // Show the resume and hide the form
    document.getElementById("form").style.display = "none";
    document.getElementById("resume").style.display = "block";
}
// Optional: Reset the form and resume when the user clicks on the resume to edit again
(_a = document.getElementById("resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    document.getElementById("form").style.display = "block";
    document.getElementById("resume").style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("education").value = "";
    document.getElementById("experience").value = "";
    document.getElementById("skills").value = "";
});
