function redirectToLogin(language) {
    if (language === 'english') {
        window.location.href = "login_english.html"; // Redirect to the English login page
    } else if (language === 'telugu') {
        window.location.href = "login_telugu.html"; // Redirect to the Telugu login page
    } else if (language === 'tamil') {
        window.location.href = "login_tamil.html"; // Redirect to the Tamil login page
    }
}