const planSignUp = document.getElementById('plan-signup')
const backdrop2 = document.getElementById('backdrop');

 
  const toggleBackdrop2 = () => {
      backdrop2.classList.toggle('visible');
  };
  
  const backdropClickEvent2 = () => {
      signupModal.classList.toggle('visible');
      toggleBackdrop2()
  }
  
  const toggleSignup2 = () => {
      backdropClickEvent2()
  };
  
  

  planSignUp.addEventListener('click', toggleSignup2)