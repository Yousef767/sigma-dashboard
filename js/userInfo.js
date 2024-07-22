function getUserDeviceInfo() {
  const userInfo = {};

  // Detect Device Type
  userInfo.deviceType = /Mobi|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

  // Fetch IP Address and Location
  fetch('http://ip-api.com/json')
      .then(response => response.json())
      .then(data => {
          userInfo.ip = data.query;
          userInfo.latitude = data.lat;
          userInfo.longitude = data.lon;
          userInfo.city = data.city;
          userInfo.region = data.regionName;
          userInfo.country = data.country;
          
          logUserInfo(userInfo);
      })
      .catch(error => {
          console.error('Error fetching IP and location:', error);
      });
}

function logUserInfo(userInfo) {
  console.log('User Device Information:', userInfo);
}

// Call the function to get and log user device information
getUserDeviceInfo();
