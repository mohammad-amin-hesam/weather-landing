import { useEffect, useState } from "react";
import Api from "../api";

const useWeather = () => {
	const [weatherDetails, setWeatherDetails] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleUserLocation = () => {
		const success = async (position) => {
			const api = new Api();
			setLoading(true);
			try {
				const res = await api.Get(
					`/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature&forecast_days=5`
				);
				setWeatherDetails(res.data);
			} catch (err) {
				// Handle Err
			} finally {
				setLoading(false);
			}
		};

		const error = () => {
			alert("Access to the user location is needed to load weather details..");
		};

		const options = {
			enableHighAccuracy: true,
			maximumAge: 30000,
			timeout: 27000,
		};

		navigator.geolocation.watchPosition(success, error, options);
	};

	useEffect(() => {
		(() => {
			handleUserLocation();
		})();
	}, []);

	return { weatherDetails, loading };
};

export default useWeather;
