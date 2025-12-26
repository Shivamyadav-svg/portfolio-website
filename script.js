function hideAll() {
    document.getElementById("hero").style.display = "none";
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
}

function openAbout() {
    hideAll();
    document.getElementById("aboutPage").style.display = "block";
}

function openProjects() {
    hideAll();
    document.getElementById("projectsPage").style.display = "block";
}

function openSkills() {
    hideAll();
    document.getElementById("skillsPage").style.display = "block";
}

function openContact() {
    hideAll();
    document.getElementById("contactPage").style.display = "block";
}

function goBack() {
    hideAll();
    document.getElementById("hero").style.display = "block";
}
