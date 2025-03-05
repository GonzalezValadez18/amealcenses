document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.querySelectorAll('.toggle-button').forEach(function(button) {
        button.addEventListener('click', function() {
            var frame = button.closest('.blue-frame');
            var details = frame.querySelector('.details');
            var icon = button.querySelector('i');

            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                frame.classList.add('expanded');
                frame.classList.remove('collapsed');
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                details.style.display = "none";
                frame.classList.add('collapsed');
                frame.classList.remove('expanded');
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
});