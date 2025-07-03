document.addEventListener("DOMContentLoaded", function () {
    // Category and specialties data mapping
    const specialtiesData = {
        webdev: [
            "Front-End Development", "Back-End Development", "DevOps"
        ],
        mobileapp: [
            "Android Development", "iOS Development", "Cross-Platform Development"
        ],
        software: [
            "System Architecture", "Software Testing", "Agile Development"
        ],
        data: [
            "Data Analysis", "Data Visualization", "Machine Learning"
        ],
        cybersecurity: [
            "Network Security", "Ethical Hacking", "Cryptography"
        ],
        cloud: [
            "AWS", "Google Cloud", "Azure"
        ],
        ai: [
            "Natural Language Processing", "Computer Vision", "AI Algorithms"
        ],
        database: [
            "MySQL", "PostgreSQL", "MongoDB"
        ]
    };

    // Store selected skills for each category
    let selectedSkills = {
        webdev: [],
        mobileapp: [],
        software: [],
        data: [],
        cybersecurity: [],
        cloud: [],
        ai: [],
        database: []
    };

    let totalSelectedSkills = 0;  // Track total selected skills across all categories
    const maxSelections = 3; // Limit total skills to 3

    const categoryItems = document.querySelectorAll(".category-item");
    const specialtiesList = document.getElementById("specialties-list");

    // Function to update the specialties list based on selected category
    function updateSpecialties(category) {
        specialtiesList.innerHTML = ''; // Clear the current list

        // Check if specialties exist for the selected category
        if (specialtiesData[category]) {
            specialtiesData[category].forEach(function (specialty) {
                const specialtyContainer = document.createElement("div");
                specialtyContainer.classList.add("specialty-container");

                // Create the checkbox
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.id = specialty.replace(/\s+/g, '-').toLowerCase(); // Unique ID for checkbox
                checkbox.name = "skills"; // Group name for checkboxes
                checkbox.checked = selectedSkills[category].includes(specialty); // Check if the skill was previously selected

                // Create the label
                const label = document.createElement("label");
                label.setAttribute("for", checkbox.id); // Associates the label with the checkbox
                label.textContent = specialty;

                // Append checkbox and label to the container
                specialtyContainer.appendChild(checkbox);
                specialtyContainer.appendChild(label);

                // Append the container to the specialties list
                specialtiesList.appendChild(specialtyContainer);

                // Add event listener to handle checkbox changes
                checkbox.addEventListener("change", function () {
                    handleSkillSelection(category, specialty, checkbox.checked);
                });
            });
        }
    }

    // Function to handle skill selection
    function handleSkillSelection(category, specialty, isChecked) {
        if (isChecked) {
            // Add the skill if it's checked
            if (totalSelectedSkills < maxSelections) {
                selectedSkills[category].push(specialty);
                totalSelectedSkills++; // Increment total skills count
            } else {
                // If user tries to select more than max, uncheck it and alert
                alert(`You can only select up to ${maxSelections} skills in total.`);
                const checkbox = document.getElementById(specialty.replace(/\s+/g, '-').toLowerCase());
                checkbox.checked = false; // Uncheck the box
            }
        } else {
            // Remove the skill if it's unchecked
            const index = selectedSkills[category].indexOf(specialty);
            if (index > -1) {
                selectedSkills[category].splice(index, 1);
                totalSelectedSkills--; // Decrement total skills count
            }
        }
    }

    // Event listener for category selection
    categoryItems.forEach(function (categoryItem) {
        categoryItem.addEventListener("click", function () {
            const category = categoryItem.getAttribute("data-category");
            updateSpecialties(category); // Update specialties based on selected category
        });
    });
});