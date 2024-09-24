import React, { useState } from 'react';

function Forms() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [hobbies, setHobbies] = useState([]);
    const [country, setCountry] = useState('');

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setHobbies([...hobbies, value]);
        } else {
            setHobbies(hobbies.filter((hobby) => hobby !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted name:', name);
        console.log('Selected gender:', gender);
        console.log('Selected hobbies:', hobbies);
        console.log('Selected country:', country);
    };

    return (
        <div className='center'>
            <h2>React Form Example</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nameInput">Name:</label>
                    <input
                        type="text"
                        id="nameInput"
                        value={name}
                        onChange={handleChange}
                    />
                </div><br />
                <div>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === 'male'}
                            onChange={handleGenderChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === 'female'}
                            onChange={handleGenderChange}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={gender === 'other'}
                            onChange={handleGenderChange}
                        />
                        Other
                    </label>

                </div> <br />

                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="reading"
                            checked={hobbies.includes('reading')}
                            onChange={handleCheckboxChange}
                        />
                        Reading
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="sports"
                            checked={hobbies.includes('sports')}
                            onChange={handleCheckboxChange}
                        />
                        Sports
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="cooking"
                            checked={hobbies.includes('cooking')}
                            onChange={handleCheckboxChange}
                        />
                        Cooking
                    </label>

                </div>
                <br />
                <div>
                    <label htmlFor="countrySelect">Select Country:</label>
                    <select
                        id="countrySelect"
                        value={country}
                        onChange={handleCountryChange}
                    >
                        <option value="">-- Select --</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                        <option value="uk">UK</option>
                        <option value="australia">Australia</option>
                    </select>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Forms;