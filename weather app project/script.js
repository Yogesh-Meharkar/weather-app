    async function getWeather() {
      const city = document.getElementById("cityInput").value || "London";
      const apiKey = "16f6cab5c1f44e6194282423251905";
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        const weatherHTML = `
          <h2>${data.location.name}, ${data.location.country}</h2>
          <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
          <p><strong>Condition:</strong> ${data.current.condition.text}</p>
          <img src="${data.current.condition.icon}" alt="Weather icon" />
          <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
          <p><strong>Wind:</strong> ${data.current.wind_kph} kph</p>
        `;

        document.getElementById("weatherInfo").innerHTML = weatherHTML;
      } catch (error) {
        document.getElementById("weatherInfo").innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
      }
    }


    window.onload = getWeather;
