  (function() {
    const PASSWORD = "VeTisundeafetable"; // Changez ce mot de passe selon votre choix
    const loginContainer = document.getElementById('loginContainer');
    const protectedContent = document.getElementById('protectedContent');
    const passwordInput = document.getElementById('passwordInput');
    const submitBtn = document.getElementById('submitBtn');
    const errorMsg = document.getElementById('errorMsg');

    function checkPassword() {
      if(passwordInput.value === PASSWORD) {
        errorMsg.classList.add('hidden');
        loginContainer.classList.add('hidden');
        protectedContent.classList.remove('hidden');
      } else {
        errorMsg.classList.remove('hidden');
        passwordInput.value = '';
        passwordInput.focus();
      }
    }

    submitBtn.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', function(e) {
      if(e.key === 'Enter') {
        checkPassword();
      }
    });
  })();