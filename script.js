console.log("مرحبا بك في الموقع!");
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
      alert('تم تسجيل الدخول بنجاح!');
    } else {
      alert('يرجى إدخال البريد الإلكتروني وكلمة المرور!');
    }
  });
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    if (name && email && password) {
      alert('تم إنشاء الحساب بنجاح!');
    } else {
      alert('يرجى إدخال جميع البيانات!');
    }
  });
  