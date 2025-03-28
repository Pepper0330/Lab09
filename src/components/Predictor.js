import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Predictor() {
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [lease, setLease] = useState('');
    const [houseType, setHouseType] = useState('');
    const [bedNum, setBedNum] = useState('');
    const [bathNum, setBathNum] = useState('');
    const [squareFeet, setSquareFeet] = useState('');
    const [furnish, setFurnish] = useState('');
    const [smoking, setSmoking] = useState('');
    const [pets, setPets] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        fetch('http://127.0.0.1:5000/predict_house_price', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'city': city,
                'province': province,
                'latitude': latitude,
                'longitude': longitude,
                'lease_term': lease,
                'type': houseType,
                'beds': bedNum,
                'baths': bathNum,
                'sq_feet': squareFeet,
                'furnishing': furnish,
                'smoking': smoking,
                'pets': pets,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user data!');
            }
            return response.json();
        })
        .then(data => {
            setMessage("Predicted House Price: $" + data.predicted_price);
        })
        .catch(error => {
            setMessage('Failed to fetch user data!');
        });
    };

    return (
        <main>
            <form onSubmit={handleLogin} className="PredictorForm">
                <h1>House Price Predictor</h1>  

                <label htmlFor="city">City:</label>
                <input 
                    type="text" 
                    id="city" 
                    className="city-input"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required 
                />

                <label htmlFor="province">Province:</label>
                <input 
                    type="text" 
                    id="province" 
                    className="province-input"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    required 
                />

                <label htmlFor="latitude">Latitude:</label>
                <input 
                    type="text" 
                    id="latitude" 
                    className="latitude-input"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    required 
                />

                <label htmlFor="longitude">Longitude:</label>
                <input 
                    type="text" 
                    id="longitude" 
                    className="longitude-input"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    required 
                />

                <label htmlFor="lease">Lease Term:</label>
                <input 
                    type="text" 
                    id="lease" 
                    className="lease-input"
                    value={lease}
                    onChange={(e) => setLease(e.target.value)}
                    required 
                />

                <label htmlFor="houseType">Type of House:</label>
                <input 
                    type="text" 
                    id="houseType" 
                    className="house-type-input"
                    value={houseType}
                    onChange={(e) => setHouseType(e.target.value)}
                    required 
                />

                <label htmlFor="bedNum">Number Of Beds:</label>
                <input 
                    type="number" 
                    id="bedNum" 
                    className="bed-num-input"
                    value={bedNum}
                    onChange={(e) => setBedNum(e.target.value)}
                    required 
                />

                <label htmlFor="bathNum">Number Of Baths:</label>
                <input 
                    type="number" 
                    id="bathNum" 
                    className="bath-num-input"
                    value={bathNum}
                    onChange={(e) => setBathNum(e.target.value)}
                    required 
                />

                <label htmlFor="squareFeet">Square Feet:</label>
                <input 
                    type="number" 
                    id="squareFeet" 
                    className="square-feet"
                    value={squareFeet}
                    onChange={(e) => setSquareFeet(e.target.value)}
                    required 
                />

                <label htmlFor="furnish">Furnishing:</label>
                <select
                    id="furnish" 
                    className="furnish"
                    value={furnish} 
                    onChange={(e) => setFurnish(e.target.value)}
                    required
                >
                    <option value="">Select Furnishing Option</option>
                    <option value="Unfurnished">Fully Furnished</option>
                    <option value="Partially Furnished">Unfurnished</option>
                    <option value="Fully Furnished">Partially Furnished</option>
                </select>

                <label htmlFor="smoking">Smoking:</label>
                <select
                    id="smoking" 
                    className="smoking"
                    value={smoking} 
                    onChange={(e) => setSmoking(e.target.value)}
                    required
                >
                    <option value="no">Non-smoking</option>
                    <option value="yes">Smoking</option>
                </select>

                <label htmlFor="pets">Pets:</label>
                <input 
                    type="checkbox" 
                    id="pets" 
                    className="pets"
                    checked={pets}
                    onChange={(e) => setPets(e.target.checked)}
                />

                <button type="submit" className="main-button">Submit</button>
            </form>

            {message && <div style={{ margin: '20px', padding: '10px' }}>{message}</div>}
        </main>
    );
}

export default Predictor;
