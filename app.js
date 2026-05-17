const DAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const DAYS_FULL = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const MONTHS = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const MONTHS_SHORT = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];

const WMO = {
  0: { icon: "☀️", label: "Ясно" },
  1: { icon: "🌤", label: "Преимущественно ясно" },
  2: { icon: "⛅", label: "Переменная облачность" },
  3: { icon: "☁️", label: "Пасмурно" },
  45: { icon: "🌫", label: "Туман" },
  48: { icon: "🌫", label: "Туман с изморозью" },
  51: { icon: "🌦", label: "Слабая морось" },
  53: { icon: "🌦", label: "Умеренная морось" },
  55: { icon: "🌧", label: "Сильная морось" },
  61: { icon: "🌧", label: "Слабый дождь" },
  63: { icon: "🌧", label: "Умеренный дождь" },
  65: { icon: "🌧", label: "Сильный дождь" },
  71: { icon: "❄️", label: "Слабый снег" },
  73: { icon: "❄️", label: "Умеренный снег" },
  75: { icon: "❄️", label: "Сильный снег" },
  77: { icon: "🌨", label: "Снежная крупа" },
  80: { icon: "🌦", label: "Слабые ливни" },
  81: { icon: "🌧", label: "Умеренные ливни" },
  82: { icon: "⛈", label: "Сильные ливни" },
  85: { icon: "🌨", label: "Снегопад" },
  86: { icon: "🌨", label: "Сильный снегопад" },
  95: { icon: "⛈", label: "Гроза" },
  96: { icon: "⛈", label: "Гроза с градом" },
  99: { icon: "⛈", label: "Гроза с сильным градом" }
};

const COUNTRY_CURRENCY = {
  AD:"EUR",AE:"AED",AF:"AFN",AL:"ALL",AM:"AMD",AO:"AOA",AR:"ARS",AT:"EUR",AU:"AUD",AZ:"AZN",
  BA:"BAM",BB:"BBD",BD:"BDT",BE:"EUR",BG:"BGN",BH:"BHD",BJ:"XOF",BN:"BND",BO:"BOB",BR:"BRL",
  BT:"BTN",BW:"BWP",BY:"BYN",BZ:"BZD",CA:"CAD",CD:"CDF",CF:"XAF",CG:"XAF",CH:"CHF",CL:"CLP",
  CM:"XAF",CN:"CNY",CO:"COP",CR:"CRC",CU:"CUP",CV:"CVE",CY:"EUR",CZ:"CZK",DE:"EUR",DK:"DKK",
  DO:"DOP",DZ:"DZD",EC:"USD",EE:"EUR",EG:"EGP",ES:"EUR",ET:"ETB",FI:"EUR",FJ:"FJD",FR:"EUR",
  GA:"XAF",GB:"GBP",GE:"GEL",GH:"GHS",GR:"EUR",GT:"GTQ",GY:"GYD",HN:"HNL",HR:"EUR",HT:"HTG",
  HU:"HUF",ID:"IDR",IE:"EUR",IL:"ILS",IN:"INR",IQ:"IQD",IR:"IRR",IS:"ISK",IT:"EUR",JM:"JMD",
  JO:"JOD",JP:"JPY",KE:"KES",KG:"KGS",KH:"KHR",KR:"KRW",KW:"KWD",KZ:"KZT",LA:"LAK",LB:"LBP",
  LK:"LKR",LR:"LRD",LT:"EUR",LU:"EUR",LV:"EUR",LY:"LYD",MA:"MAD",MD:"MDL",MK:"MKD",ML:"XOF",
  MM:"MMK",MN:"MNT",MT:"EUR",MU:"MUR",MV:"MVR",MW:"MWK",MX:"MXN",MY:"MYR",MZ:"MZN",NA:"NAD",
  NG:"NGN",NI:"NIO",NL:"EUR",NO:"NOK",NP:"NPR",NZ:"NZD",OM:"OMR",PA:"PAB",PE:"PEN",PG:"PGK",
  PH:"PHP",PK:"PKR",PL:"PLN",PT:"EUR",PY:"PYG",QA:"QAR",RO:"RON",RS:"RSD",RU:"RUB",RW:"RWF",
  SA:"SAR",SD:"SDG",SE:"SEK",SG:"SGD",SI:"EUR",SK:"EUR",SN:"XOF",SO:"SOS",SR:"SRD",SV:"USD",
  SY:"SYP",SZ:"SZL",TD:"XAF",TG:"XOF",TH:"THB",TJ:"TJS",TM:"TMT",TN:"TND",TR:"TRY",TT:"TTD",
  TW:"TWD",TZ:"TZS",UA:"UAH",UG:"UGX",US:"USD",UY:"UYU",UZ:"UZS",VE:"VES",VN:"VND",YE:"YER",
  ZA:"ZAR",ZM:"ZMW"
};

const CURRENCY_INFO = {
  USD:{ name:"Доллар США", sym:"$" }, EUR:{ name:"Евро", sym:"€" }, GBP:{ name:"Фунт стерлингов", sym:"£" },
  JPY:{ name:"Японская иена", sym:"¥" }, CNY:{ name:"Юань", sym:"¥" }, CHF:{ name:"Швейцарский франк", sym:"Fr" },
  AUD:{ name:"Австралийский доллар", sym:"A$" }, CAD:{ name:"Канадский доллар", sym:"C$" }, RUB:{ name:"Российский рубль", sym:"₽" },
  TRY:{ name:"Турецкая лира", sym:"₺" }, INR:{ name:"Индийская рупия", sym:"₹" }, BRL:{ name:"Бразильский реал", sym:"R$" },
  KRW:{ name:"Вона", sym:"₩" }, AED:{ name:"Дирхам ОАЭ", sym:"د.إ" }, MXN:{ name:"Мексиканский песо", sym:"$" },
  SGD:{ name:"Сингапурский доллар", sym:"S$" }, NOK:{ name:"Норвежская крона", sym:"kr" }, SEK:{ name:"Шведская крона", sym:"kr" },
  PLN:{ name:"Польский злотый", sym:"zł" }, CZK:{ name:"Чешская крона", sym:"Kč" }, HUF:{ name:"Венгерский форинт", sym:"Ft" },
  UAH:{ name:"Украинская гривна", sym:"₴" }, KZT:{ name:"Казахстанский тенге", sym:"₸" }, GEL:{ name:"Грузинский лари", sym:"₾" },
  BYN:{ name:"Белорусский рубль", sym:"Br" }, NZD:{ name:"Новозеландский доллар", sym:"NZ$" }, ZAR:{ name:"Южноафриканский рэнд", sym:"R" },
  IDR:{ name:"Индонезийская рупия", sym:"Rp" }, MYR:{ name:"Малайзийский ринггит", sym:"RM" }, THB:{ name:"Тайский бат", sym:"฿" },
  PHP:{ name:"Филиппинское песо", sym:"₱" }, ILS:{ name:"Израильский шекель", sym:"₪" }, SAR:{ name:"Саудовский риял", sym:"ر.س" },
  QAR:{ name:"Катарский риял", sym:"ر.ق" }
};

const POPULAR_CURRENCIES = ["USD", "EUR", "GBP", "JPY", "CNY", "CHF"];
const BAD_WORDS = /district|ward|municipality|borough|county|oblast|raion|okrug/i;
const BAD_IMG = /flag|coat.of.arm|emblem|seal_of|logo/i;
const BAD_DESC = /\b(state|province|territory|region|oblast|county)\b/i;
const STORAGE_KEYS = {
  favorites: "weather-app:favorites",
  history: "weather-app:history",
  theme: "weather-app:theme"
};

const state = {
  selectedLocation: null,
  currentLocation: null,
  lastSearch: null,
  suggestTimeout: null,
  suggestResults: [],
  dailyData: null,
  hourlyData: null,
  activeDayIndex: null,
  clockInterval: null,
  clockTimezone: null,
  ratesCache: null,
  localCurrency: "USD",
  favorites: [],
  history: []
};

const $ = id => document.getElementById(id);
const wmo = code => WMO[code] || { icon: "🌡", label: "Неизвестно" };

document.addEventListener("DOMContentLoaded", init);

function init() {
  loadStoredState();
  bindEvents();
  renderSavedRows();
  applyTheme(localStorage.getItem(STORAGE_KEYS.theme) || "dark");
  registerServiceWorker();
}

function bindEvents() {
  $("city-input").addEventListener("input", onInput);
  $("city-input").addEventListener("keydown", onKey);
  $("search-button").addEventListener("click", searchSelected);
  $("geo-button").addEventListener("click", useGeolocation);
  $("favorite-button").addEventListener("click", toggleFavorite);
  $("theme-toggle").addEventListener("click", toggleTheme);
  $("calc-amount").addEventListener("input", calcCurrency);
  $("calc-from").addEventListener("change", calcCurrency);
  $("calc-to").addEventListener("change", calcCurrency);
  $("calc-swap").addEventListener("click", swapCalc);

  document.querySelectorAll(".quick-picks button").forEach(button => {
    button.addEventListener("click", () => quickSearch(button.dataset.city));
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".search-wrapper")) hideSuggestions();
  });
}

function loadStoredState() {
  state.favorites = readList(STORAGE_KEYS.favorites);
  state.history = readList(STORAGE_KEYS.history);
}

function readList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch (_) {
    return [];
  }
}

function saveList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-theme", isLight);
  $("theme-toggle").textContent = isLight ? "☾" : "☼";
  localStorage.setItem(STORAGE_KEYS.theme, isLight ? "light" : "dark");
}

function toggleTheme() {
  applyTheme(document.body.classList.contains("light-theme") ? "dark" : "light");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

function renderSavedRows() {
  renderSavedList($("favorites-row"), state.favorites, "★", "favorites");
  renderSavedList($("history-row"), state.history, "↺", "history");
}

function renderSavedList(container, items, marker, type) {
  container.innerHTML = "";
  items.forEach(item => {
    const chip = document.createElement("button");
    chip.className = "saved-chip";
    chip.type = "button";
    chip.innerHTML = `<strong>${marker}</strong>${escapeHtml(item.name)}<span class="remove-chip">×</span>`;
    chip.addEventListener("click", event => {
      if (event.target.classList.contains("remove-chip")) {
        removeSavedItem(type, item);
        return;
      }
      fetchWeather(item);
    });
    container.appendChild(chip);
  });
}

function removeSavedItem(type, item) {
  const key = type === "favorites" ? "favorites" : "history";
  state[key] = state[key].filter(saved => locationKey(saved) !== locationKey(item));
  saveList(STORAGE_KEYS[key], state[key]);
  renderSavedRows();
  updateFavoriteButton();
}

function rememberHistory(loc) {
  state.history = [loc, ...state.history.filter(item => locationKey(item) !== locationKey(loc))].slice(0, 8);
  saveList(STORAGE_KEYS.history, state.history);
  renderSavedRows();
}

function toggleFavorite() {
  const loc = state.currentLocation;
  if (!loc) return;
  const key = locationKey(loc);
  const exists = state.favorites.some(item => locationKey(item) === key);
  state.favorites = exists
    ? state.favorites.filter(item => locationKey(item) !== key)
    : [loc, ...state.favorites].slice(0, 10);
  saveList(STORAGE_KEYS.favorites, state.favorites);
  renderSavedRows();
  updateFavoriteButton();
}

function updateFavoriteButton() {
  const button = $("favorite-button");
  const loc = state.currentLocation;
  button.disabled = !loc;
  if (!loc) {
    button.textContent = "Добавить в избранное";
    return;
  }
  const exists = state.favorites.some(item => locationKey(item) === locationKey(loc));
  button.textContent = exists ? "Убрать из избранного" : "Добавить в избранное";
}

function locationKey(loc) {
  return `${loc.latitude}:${loc.longitude}:${loc.name}`.toLowerCase();
}

function onInput() {
  state.selectedLocation = null;
  clearTimeout(state.suggestTimeout);
  const q = $("city-input").value.trim();
  if (q.length < 2) {
    hideSuggestions();
    return;
  }
  state.suggestTimeout = setTimeout(() => fetchSuggestions(q), 350);
}

function onKey(event) {
  if (event.key === "Enter") {
    hideSuggestions();
    searchSelected();
  }
  if (event.key === "Escape") hideSuggestions();
}

async function fetchSuggestions(q) {
  try {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=6&language=ru&format=json`);
    const data = await res.json();
    state.suggestResults = data.results || [];
    renderSuggestions(state.suggestResults);
  } catch (_) {
    hideSuggestions();
  }
}

function renderSuggestions(results) {
  const box = $("suggestions");
  box.innerHTML = "";
  if (!results.length) {
    hideSuggestions();
    return;
  }
  results.forEach((result, index) => {
    const item = document.createElement("button");
    item.type = "button";
    const parts = [result.admin1, result.country].filter(Boolean).join(", ");
    item.innerHTML = `${escapeHtml(result.name)}<small>${escapeHtml(parts)}</small>`;
    item.addEventListener("click", () => pickSuggestion(index));
    box.appendChild(item);
  });
  box.style.display = "block";
}

function pickSuggestion(index) {
  state.selectedLocation = normalizeLocation(state.suggestResults[index]);
  $("city-input").value = state.selectedLocation.name;
  hideSuggestions();
  fetchWeather(state.selectedLocation);
}

function hideSuggestions() {
  $("suggestions").style.display = "none";
}

function quickSearch(city) {
  $("city-input").value = city;
  state.selectedLocation = null;
  searchSelected();
}

async function searchSelected() {
  hideSuggestions();
  if (state.selectedLocation) {
    fetchWeather(state.selectedLocation);
    return;
  }
  const q = $("city-input").value.trim();
  if (!q) return;
  setLoading(true);
  clearError();
  try {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=1&language=ru&format=json`);
    const data = await res.json();
    if (!data.results?.length) throw new Error("Город не найден. Проверьте написание.");
    state.selectedLocation = normalizeLocation(data.results[0]);
    await fetchWeather(state.selectedLocation);
  } catch (error) {
    showError(error.message || "Не удалось найти город.", searchSelected);
    setLoading(false);
  }
}

async function useGeolocation() {
  if (!navigator.geolocation) {
    showError("Браузер не поддерживает геолокацию.");
    return;
  }
  setLoading(true);
  clearError();
  navigator.geolocation.getCurrentPosition(
    async position => {
      try {
        const loc = await reverseLocation(position.coords.latitude, position.coords.longitude);
        $("city-input").value = loc.name;
        await fetchWeather(loc);
      } catch (error) {
        showError(error.message || "Не удалось определить место.", useGeolocation);
        setLoading(false);
      }
    },
    error => {
      const message = error.code === 1
        ? "Доступ к геолокации запрещен. Разрешите доступ в браузере."
        : "Не удалось получить координаты.";
      showError(message, useGeolocation);
      setLoading(false);
    },
    { enableHighAccuracy: false, timeout: 12000, maximumAge: 10 * 60 * 1000 }
  );
}

async function reverseLocation(latitude, longitude) {
  const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=ru&zoom=10`);
  if (!res.ok) throw new Error("Сервис геолокации временно недоступен.");
  const data = await res.json();
  const address = data.address || {};
  const name = address.city || address.town || address.village || address.municipality || address.state || data.name || "Мое место";
  return normalizeLocation({
    name,
    latitude,
    longitude,
    country: address.country || "",
    country_code: address.country_code?.toUpperCase() || "",
    admin1: address.state || address.region || ""
  });
}

function normalizeLocation(loc) {
  return {
    name: loc.name || "Без названия",
    latitude: Number(loc.latitude),
    longitude: Number(loc.longitude),
    country: loc.country || "",
    country_code: (loc.country_code || "").toUpperCase(),
    admin1: loc.admin1 || loc.admin2 || ""
  };
}

async function fetchWeather(loc) {
  const normalized = normalizeLocation(loc);
  state.lastSearch = () => fetchWeather(normalized);
  setLoading(true);
  clearError();
  closeDayDetail();
  resetCityImage();

  try {
    const params = new URLSearchParams({
      latitude: normalized.latitude,
      longitude: normalized.longitude,
      current: [
        "temperature_2m",
        "relative_humidity_2m",
        "apparent_temperature",
        "weather_code",
        "wind_speed_10m",
        "wind_direction_10m",
        "surface_pressure",
        "visibility",
        "precipitation",
        "is_day"
      ].join(","),
      hourly: [
        "temperature_2m",
        "precipitation_probability",
        "weather_code",
        "wind_speed_10m",
        "visibility"
      ].join(","),
      daily: [
        "weather_code",
        "temperature_2m_max",
        "temperature_2m_min",
        "precipitation_sum",
        "precipitation_hours",
        "precipitation_probability_max",
        "wind_speed_10m_max",
        "wind_gusts_10m_max",
        "uv_index_max",
        "sunrise",
        "sunset"
      ].join(","),
      timezone: "auto",
      forecast_days: "7"
    });

    const [weatherRes, imageResult, airData] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?${params}`),
      fetchCityImage(normalized),
      fetchAirQuality(normalized)
    ]);

    if (!weatherRes.ok) throw new Error(`Ошибка получения погоды: ${weatherRes.status}`);
    const data = await weatherRes.json();
    state.dailyData = data.daily;
    state.hourlyData = data.hourly;
    state.currentLocation = normalized;

    renderWeather(data, normalized, airData);
    renderHourly(data.hourly, data.timezone);
    renderForecast(data.daily);
    startClock(data.timezone);
    showCityImage(imageResult);
    rememberHistory(normalized);
    updateFavoriteButton();
    fetchRates(normalized.country_code);
  } catch (error) {
    showError(humanizeError(error), state.lastSearch);
    hideDataCards();
  } finally {
    setLoading(false);
  }
}

async function fetchAirQuality(loc) {
  try {
    const params = new URLSearchParams({
      latitude: loc.latitude,
      longitude: loc.longitude,
      current: "european_aqi,us_aqi,pm2_5"
    });
    const res = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?${params}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (_) {
    return null;
  }
}

function renderWeather(data, loc, airData) {
  const current = data.current;
  const meta = wmo(current.weather_code);
  const parts = [loc.admin1, loc.country].filter(Boolean).join(", ");
  const location = $("w-location");
  location.textContent = loc.name;
  const small = document.createElement("small");
  small.textContent = parts || `${loc.latitude.toFixed(2)}, ${loc.longitude.toFixed(2)}`;
  location.appendChild(small);

  $("w-icon").textContent = meta.icon;
  $("w-temp").textContent = `${Math.round(current.temperature_2m)}°C`;
  $("w-desc").textContent = meta.label;
  $("w-feels").textContent = `Ощущается как ${Math.round(current.apparent_temperature)}°C`;
  $("w-humidity").textContent = `${current.relative_humidity_2m}%`;
  $("w-wind").textContent = `${Math.round(current.wind_speed_10m)} км/ч`;
  $("w-pressure").textContent = `${Math.round(current.surface_pressure * 0.750064)} мм`;

  const daily = data.daily;
  const extra = [
    ["☔", `${Math.round(daily.precipitation_probability_max?.[0] ?? 0)}%`, "Вероятность"],
    ["🌧", `${(current.precipitation ?? 0).toFixed(1)} мм`, "Осадки сейчас"],
    ["👁", `${Math.round((current.visibility ?? 0) / 1000)} км`, "Видимость"],
    ["🧭", windDirection(current.wind_direction_10m), "Направление"],
    ["🔆", formatNumber(daily.uv_index_max?.[0]), "УФ-индекс"],
    ["🌬", airLabel(airData), "Качество воздуха"],
    ["🌅", formatTime(daily.sunrise?.[0]), "Рассвет"],
    ["🌇", formatTime(daily.sunset?.[0]), "Закат"]
  ];
  renderExtraGrid(extra);
  $("weather-card").style.display = "block";
}

function renderExtraGrid(items) {
  const grid = $("extra-grid");
  grid.innerHTML = "";
  items.forEach(([icon, value, label]) => {
    const item = document.createElement("div");
    item.className = "extra-item";
    item.innerHTML = `<div class="extra-icon">${icon}</div><div class="extra-value">${escapeHtml(value)}</div><div class="extra-label">${escapeHtml(label)}</div>`;
    grid.appendChild(item);
  });
}

function renderHourly(hourly, timezone) {
  const strip = $("hourly-strip");
  strip.innerHTML = "";
  if (!hourly?.time?.length) {
    $("hourly-card").style.display = "none";
    return;
  }

  const now = new Date();
  const startIndex = hourly.time.findIndex(time => new Date(time) >= now);
  const sliceStart = Math.max(0, startIndex === -1 ? 0 : startIndex);
  hourly.time.slice(sliceStart, sliceStart + 24).forEach((time, offset) => {
    const index = sliceStart + offset;
    const meta = wmo(hourly.weather_code[index]);
    const card = document.createElement("div");
    card.className = "hour-card";
    card.innerHTML = `
      <div class="hour-time">${formatHour(time, timezone)}</div>
      <div class="hour-icon">${meta.icon}</div>
      <div class="hour-temp">${Math.round(hourly.temperature_2m[index])}°</div>
      <div class="hour-meta">☔ ${hourly.precipitation_probability[index] ?? 0}%</div>
      <div class="hour-meta">💨 ${Math.round(hourly.wind_speed_10m[index] ?? 0)}</div>
    `;
    strip.appendChild(card);
  });
  $("hourly-card").style.display = "block";
}

function renderForecast(daily) {
  const container = $("forecast-days");
  container.innerHTML = "";
  const today = new Date().toDateString();
  daily.time.forEach((time, index) => {
    const dt = new Date(time);
    if (dt.toDateString() === today) return;
    const meta = wmo(daily.weather_code[index]);
    const card = document.createElement("button");
    card.className = "forecast-day";
    card.id = `fday-${index}`;
    card.type = "button";
    card.innerHTML = `
      <div class="day-name">${DAYS_SHORT[dt.getDay()]}</div>
      <div class="day-date">${dt.getDate()} ${MONTHS_SHORT[dt.getMonth()]}</div>
      <div class="day-icon">${meta.icon}</div>
      <div><span class="day-max">${Math.round(daily.temperature_2m_max[index])}°</span><span class="day-min">${Math.round(daily.temperature_2m_min[index])}°</span></div>
      <div class="day-hint">подробнее</div>
    `;
    card.addEventListener("click", () => toggleDayDetail(index));
    container.appendChild(card);
  });
  $("forecast-card").style.display = "block";
}

function toggleDayDetail(index) {
  if (state.activeDayIndex === index) {
    closeDayDetail();
    return;
  }
  if (state.activeDayIndex !== null) $(`fday-${state.activeDayIndex}`)?.classList.remove("active");
  state.activeDayIndex = index;
  $(`fday-${index}`)?.classList.add("active");
  renderDayDetail(index);
  $("day-detail").classList.add("open");
}

function closeDayDetail() {
  if (state.activeDayIndex !== null) $(`fday-${state.activeDayIndex}`)?.classList.remove("active");
  state.activeDayIndex = null;
  $("day-detail").classList.remove("open");
}

function renderDayDetail(index) {
  const daily = state.dailyData;
  const dt = new Date(daily.time[index]);
  const meta = wmo(daily.weather_code[index]);
  const max = Math.round(daily.temperature_2m_max[index]);
  const min = Math.round(daily.temperature_2m_min[index]);
  $("detail-inner").innerHTML = `
    <div class="detail-header">
      <div class="detail-date">${DAYS_FULL[dt.getDay()]}<small>${dt.getDate()} ${MONTHS[dt.getMonth()]}</small></div>
      <div class="detail-icon-desc">
        <div class="detail-icon">${meta.icon}</div>
        <div class="detail-desc">${meta.label}</div>
      </div>
    </div>
    <div class="detail-temps"><span class="max">${max}°C</span><span class="min">${min}°C</span></div>
    <hr class="detail-divider" />
    <div class="detail-grid">
      <div class="detail-item"><div class="di-icon">🌧</div><div class="di-val">${(daily.precipitation_sum[index] ?? 0).toFixed(1)} мм</div><div class="di-lbl">Осадки</div></div>
      <div class="detail-item"><div class="di-icon">☔</div><div class="di-val">${daily.precipitation_probability_max[index] ?? 0}%</div><div class="di-lbl">Вероятность</div></div>
      <div class="detail-item"><div class="di-icon">⏱</div><div class="di-val">${daily.precipitation_hours[index] ?? 0} ч</div><div class="di-lbl">Осадки</div></div>
      <div class="detail-item"><div class="di-icon">🌬</div><div class="di-val">${Math.round(daily.wind_speed_10m_max[index] ?? 0)} км/ч</div><div class="di-lbl">Ветер</div></div>
      <div class="detail-item"><div class="di-icon">💨</div><div class="di-val">${Math.round(daily.wind_gusts_10m_max[index] ?? 0)} км/ч</div><div class="di-lbl">Порывы</div></div>
      <div class="detail-item"><div class="di-icon">🔆</div><div class="di-val">${formatNumber(daily.uv_index_max[index])}</div><div class="di-lbl">УФ</div></div>
    </div>
    <div class="sun-row">
      <div class="sun-item"><div class="sun-icon">🌅</div><div class="sun-val">${formatTime(daily.sunrise[index])}</div><div class="sun-lbl">Рассвет</div></div>
      <div class="sun-item"><div class="sun-icon">🌇</div><div class="sun-val">${formatTime(daily.sunset[index])}</div><div class="sun-lbl">Закат</div></div>
    </div>
  `;
}

async function nominatimCity(lat, lon, zoom) {
  const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=en&zoom=${zoom}`);
  const data = await res.json();
  const address = data.address || {};
  return address.city || address.town || address.village || address.county || address.province || address.state || data.name || null;
}

async function wikiImage(name) {
  if (!name) return null;
  const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`);
  const wiki = await res.json();
  if (!wiki.thumbnail?.source || wiki.type === "disambiguation") return null;
  const src = wiki.originalimage?.source || wiki.thumbnail.source;
  if (BAD_IMG.test(src) || BAD_DESC.test(wiki.description || "")) return null;
  return { src, title: wiki.title, url: wiki.content_urls?.desktop?.page };
}

async function fetchCityImage(loc) {
  try {
    let name = await nominatimCity(loc.latitude, loc.longitude, 10);
    if (!name || BAD_WORDS.test(name)) name = await nominatimCity(loc.latitude, loc.longitude, 6);
    let result = await wikiImage(name);
    if (result) return result;

    for (const query of [name && `${name} city`, name, loc.name]) {
      if (!query) continue;
      const search = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=5&format=json&origin=*`);
      const [, titles] = await search.json();
      for (const title of titles || []) {
        result = await wikiImage(title);
        if (result) return result;
      }
    }
  } catch (_) {}
  return null;
}

function showCityImage(result) {
  const img = $("city-img");
  const shimmer = $("city-shimmer");
  const credit = $("city-img-credit");

  if (!result) {
    shimmer.classList.add("hidden");
    return;
  }

  img.onload = () => {
    img.classList.add("loaded");
    shimmer.classList.add("hidden");
  };
  img.onerror = () => {
    shimmer.classList.add("hidden");
    $("city-banner").style.background = "linear-gradient(135deg, #1f3f55 0%, #0f4c5c 100%)";
  };
  img.src = result.src;

  if (result.title && result.url) {
    const link = document.createElement("a");
    link.href = result.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = `© Wikipedia: ${result.title}`;
    credit.innerHTML = "";
    credit.appendChild(link);
  }
}

function resetCityImage() {
  const img = $("city-img");
  img.classList.remove("loaded");
  img.removeAttribute("src");
  $("city-shimmer").classList.remove("hidden");
  $("city-img-credit").innerHTML = "";
}

function startClock(timezone) {
  state.clockTimezone = timezone;
  if (state.clockInterval) clearInterval(state.clockInterval);
  tickClock();
  state.clockInterval = setInterval(tickClock, 1000);
}

function tickClock() {
  if (!state.clockTimezone) return;
  const now = new Date();
  const hm = now.toLocaleTimeString("ru-RU", { timeZone: state.clockTimezone, hour: "2-digit", minute: "2-digit" });
  const sec = now.toLocaleTimeString("ru-RU", { timeZone: state.clockTimezone, second: "2-digit" });
  $("w-clock").innerHTML = `${hm}<span class="seconds">:${sec}</span>`;
  $("w-clock-date").textContent = now.toLocaleDateString("ru-RU", {
    timeZone: state.clockTimezone,
    weekday: "long",
    day: "numeric",
    month: "long"
  });
  $("w-clock-tz").textContent = state.clockTimezone.replace(/_/g, " ");
  const tzLabel = new Intl.DateTimeFormat("en", { timeZone: state.clockTimezone, timeZoneName: "short" })
    .formatToParts(now).find(part => part.type === "timeZoneName")?.value || "";
  $("w-utc").textContent = tzLabel;
  const localHour = parseInt(now.toLocaleTimeString("en-US", {
    timeZone: state.clockTimezone,
    hour: "numeric",
    hour12: false
  }), 10);
  $("w-day-night").textContent = localHour >= 6 && localHour < 21 ? "☀️" : "🌙";
}

async function fetchRates(countryCode) {
  state.localCurrency = COUNTRY_CURRENCY[countryCode?.toUpperCase()] || "USD";
  try {
    if (!state.ratesCache) {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await res.json();
      if (data.result === "success") state.ratesCache = data.rates;
    }
    renderCurrencyCard();
  } catch (_) {
    $("currency-card").style.display = "none";
  }
}

function renderCurrencyCard() {
  const rates = state.ratesCache;
  if (!rates) return;
  const code = state.localCurrency;
  const info = CURRENCY_INFO[code] || { name: code, sym: code };
  const rate = rates[code] ?? null;

  $("cur-name").innerHTML = `<strong>${escapeHtml(code)}</strong> ${escapeHtml(info.sym)}<small>${escapeHtml(info.name)}</small>`;
  $("cur-rate").innerHTML = rate
    ? `${fmtRate(rate)} <span>${escapeHtml(info.sym)}</span><small>= 1 USD</small>`
    : "—";

  const allCodes = [...new Set([code, ...POPULAR_CURRENCIES, ...Object.keys(CURRENCY_INFO)])];
  const fromSel = $("calc-from");
  const toSel = $("calc-to");
  [fromSel, toSel].forEach((select, index) => {
    select.innerHTML = "";
    allCodes.forEach(currency => {
      const option = document.createElement("option");
      const currencyInfo = CURRENCY_INFO[currency] || { name: currency };
      option.value = currency;
      option.textContent = `${currency} — ${currencyInfo.name}`;
      option.selected = currency === (index === 0 ? code : "USD");
      select.appendChild(option);
    });
  });

  const gridCodes = [...new Set([...POPULAR_CURRENCIES, code])].filter(currency => currency !== "USD" || code === "USD");
  $("rates-grid").innerHTML = gridCodes.map(currency => {
    const currencyInfo = CURRENCY_INFO[currency] || { name: currency, sym: currency };
    const value = rates[currency];
    return `<div class="rate-item">
      <div class="ri-code">${escapeHtml(currency)}</div>
      <div class="ri-val">${value ? fmtRate(value) : "—"} ${escapeHtml(currencyInfo.sym)}</div>
      <div class="ri-name">= 1 USD</div>
    </div>`;
  }).join("");

  $("currency-card").style.display = "block";
  calcCurrency();
}

function calcCurrency() {
  const rates = state.ratesCache;
  if (!rates) return;
  const amount = parseFloat($("calc-amount").value) || 0;
  const from = $("calc-from").value;
  const to = $("calc-to").value;
  if (!rates[from] || !rates[to]) {
    $("calc-result").textContent = "—";
    return;
  }
  const result = (amount / rates[from]) * rates[to];
  const info = CURRENCY_INFO[to] || { sym: to };
  $("calc-result").textContent = `${fmtRate(result)} ${info.sym}`;
}

function swapCalc() {
  const from = $("calc-from");
  const to = $("calc-to");
  const value = from.value;
  from.value = to.value;
  to.value = value;
  calcCurrency();
}

function setLoading(on) {
  $("loading").style.display = on ? "block" : "none";
}

function showError(message, retry) {
  const el = $("error");
  el.innerHTML = "";
  const text = document.createElement("span");
  text.textContent = message;
  el.appendChild(text);
  if (retry) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Повторить";
    button.addEventListener("click", retry);
    el.appendChild(button);
  }
  el.style.display = "block";
}

function clearError() {
  $("error").style.display = "none";
  $("error").innerHTML = "";
}

function hideDataCards() {
  ["weather-card", "forecast-card", "hourly-card", "currency-card"].forEach(id => {
    $(id).style.display = "none";
  });
}

function humanizeError(error) {
  const message = error?.message || "";
  if (message.includes("Failed to fetch") || message.includes("NetworkError")) {
    return "Нет соединения или сервис временно недоступен.";
  }
  return message || "Что-то пошло не так. Попробуйте еще раз.";
}

function windDirection(degrees) {
  if (degrees === undefined || degrees === null) return "—";
  const directions = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ"];
  return directions[Math.round(degrees / 45) % 8];
}

function airLabel(airData) {
  const aqi = airData?.current?.european_aqi ?? airData?.current?.us_aqi;
  if (aqi === undefined || aqi === null) return "—";
  if (aqi <= 20) return "Отлично";
  if (aqi <= 40) return "Хорошо";
  if (aqi <= 60) return "Средне";
  if (aqi <= 80) return "Плохо";
  return "Очень плохо";
}

function formatTime(isoStr) {
  if (!isoStr) return "—";
  return new Date(isoStr).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
}

function formatHour(isoStr, timezone) {
  return new Date(isoStr).toLocaleTimeString("ru-RU", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatNumber(value) {
  if (value === undefined || value === null || Number.isNaN(Number(value))) return "—";
  return Number(value).toFixed(1);
}

function fmtRate(value) {
  if (value >= 100) return value.toFixed(0);
  if (value >= 10) return value.toFixed(2);
  if (value >= 1) return value.toFixed(3);
  return value.toFixed(4);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
