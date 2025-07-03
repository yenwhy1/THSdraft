// Profile image preview logic
document.getElementById('signupp2FileInput').addEventListener('change', function () {
    const file = this.files[0];
    const reader = new FileReader();

    if (file) {
        reader.onload = function (e) {
            // Set preview image
            const preview = document.getElementById('signupp2Preview');
            preview.src = e.target.result;
            preview.classList.remove('hidden');

            // Hide placeholder
            document.getElementById('signupp2AvatarPlaceholder').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});
