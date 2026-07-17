const form = document.getElementById('loginForm');
const statusMsg = document.getElementById('statusMsg');
const loginBtn = document.getElementById('loginBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous messages
    statusMsg.textContent = '';
    statusMsg.className = 'status-msg';
    loginBtn.disabled = true;
    loginBtn.textContent = 'Logging in...';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Frontend validation
    if (!email || !password) {
        statusMsg.textContent = 'Please fill in all fields.';
        statusMsg.classList.add('error');
        loginBtn.disabled = false;
        loginBtn.textContent = 'Log In';
        return;
    }

    if (password.length < 6) {
        statusMsg.textContent = 'Password must be at least 6 characters.';
        statusMsg.classList.add('error');
        loginBtn.disabled = false;
        loginBtn.textContent = 'Log In';
        return;
    }

    // 🔒 REPLACE THIS WITH YOUR ACTUAL BACKEND API CALL
    try {
        // Example fetch call:
        // const response = await fetch('/api/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, password })
        // });
        // const data = await response.json();

        // Simulated success for demo purposes:
        await new Promise(resolve => setTimeout(resolve, 1000));

        statusMsg.textContent = '✅ Login successful! Redirecting...';
        statusMsg.classList.add('success');

        // Simulate redirect after 1.5s
        setTimeout(() => {
            window.location.href = '/dashboard.html'; // Change to your actual route
        }, 1500);

    } catch (err) {
        statusMsg.textContent = '❌ Invalid credentials or server error.';
        statusMsg.classList.add('error');
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Log In';
    }
});
