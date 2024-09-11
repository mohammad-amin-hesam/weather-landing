import React from "react";
import useWeather from "../hooks/useWeather";
import Loading from "./Loading";

import "../styles/weather.css";

const Weather = () => {
	const { weatherDetails, loading } = useWeather();
	return (
		<>
			{loading ? (
				<div className="loading-container">
					<Loading />
				</div>
			) : (
				<div className="weather-container">
					{weatherDetails ? (
						<div className="card">
							<h2>Your Location</h2>
							<h3>
								Cloudy
								<span>
									Wind 10km/h <span className="dot">•</span> Precip 0%
								</span>
							</h3>
							<h1>{weatherDetails?.hourly?.temperature[0]}°</h1>
							<table>
								<tbody>
									<tr>
										{weatherDetails?.hourly?.time.map((item, index) => {
											if (!item.includes("T00:00")) return null;
											return (
												<td key={`time-header-${index}`}>
													{new Date(item)
														.toLocaleString("en-us", { weekday: "long" })
														.slice(0, 3)}
												</td>
											);
										})}
									</tr>
									<tr>
										{weatherDetails?.hourly?.time.map((item, index) => {
											if (!item.includes("T00:00")) return null;
											const temp = weatherDetails?.hourly?.temperature[index];
											return <td key={`temp-item-${index}`}>{temp}</td>;
										})}
									</tr>
								</tbody>
							</table>
						</div>
					) : (
						<h4>Waiting for location..</h4>
					)}
				</div>
			)}
		</>
	);
};

export default Weather;
