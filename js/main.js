const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar-wrapper');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('d-none');
});


document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('d-none');
  });

  

// Theme Toggle
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme');
  document.documentElement.setAttribute('data-bs-theme', currentTheme === 'light' ? 'dark' : 'light');
}

// Sales Chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Sales',
      data: [12000, 15000, 10000, 18000, 14000, 20000],
      backgroundColor: 'rgba(13, 110, 253, 0.2)',
      borderColor: 'rgba(13, 110, 253, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  }
});

// Expenses Chart
const expensesCtx = document.getElementById('expensesChart').getContext('2d');
const expensesChart = new Chart(expensesCtx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Expenses',
      data: [4000, 5000, 3000, 7000, 4000, 6000],
      backgroundColor: 'rgba(220, 53, 69, 0.6)',
      borderColor: 'rgba(220, 53, 69, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  }
});


// ✨ Polling for Notifications

const notificationMessages = [
    "New Sale: Invoice #456 for $750!",
    "Reminder: Payment overdue on Invoice #321!",
    "New user signed up: Alice!",
    "Expense Report #789 approved!"
  ];
  
  setInterval(() => {
    const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
    const newNotification = document.createElement('li');
    newNotification.className = "list-group-item";
    newNotification.innerText = `🔔 ${randomMessage}`;
    document.getElementById('activityFeed').prepend(newNotification);
  }, 7000); // every 7 seconds
  