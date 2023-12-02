// update and display the current time
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

  // current time to compare with the alarm time
  const currentTime = `${hours}:${minutes}`;

  // alarms list
  const alarmsList = document.getElementById('alarms-list');

  // Check if any alarms are set and trigger the alarm sound
  const alarmItems = alarmsList.querySelectorAll('div');
  alarmItems.forEach(alarm => {
    if (alarm.textContent.includes(currentTime)) {
      const alarmSound = document.getElementById('alarmSound');
      alarmSound.play();
      
    }
  });
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();

// set the alarm
function setAlarm() {
  const alarmTimeInput = document.getElementById('alarm-time');
  const alarmTime = alarmTimeInput.value;

  if (alarmTime === '') {
    alert('Please select a valid time for the alarm.');
    return;
  }

  const alarmsList = document.getElementById('alarms-list');
  const alarmItem = document.createElement('div');
  alarmItem.textContent = `Alarm set for ${alarmTime}`;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
    alarmsList.removeChild(alarmItem);
  };
  alarmItem.appendChild(deleteButton);

  alarmsList.appendChild(alarmItem);

  alert(`Alarm set for ${alarmTime}`);
}
