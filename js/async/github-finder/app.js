// Init Github
const github = new Github;

const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

let debounceTimeout;

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(function () {

        // Get input text
        const userText = e.target.value;

        if (userText !== '') {
            // Make http call
            github.getUser(userText)
                .then(data => {
                    if (data.profile.message === 'Not Found') {
                        ui.showAlert(`User ${userText} not found`, 'alert alert-danger');
                    } else {
                        // Show profile
                        ui.showProfile(data.profile);
                        ui.showRepos(data.repos)
                    }
                })
        } else {
            // Clear profile
            ui.clearProfile();
        }

    }, 300);

});
