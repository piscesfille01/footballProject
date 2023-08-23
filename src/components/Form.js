import React, { useState } from 'react';
import './Form.css';

export default function Form() {

    const soccerFamousCountries = [
        'Argentina',
        'Belgium',
        'Brazil',
        'Cameroon',
        'Chile',
        'Colombia',
        'Croatia',
        'England',
        'France',
        'Germany',
        'Ghana',
        'Italy',
        'Ivory Coast',
        'Korea, Republic of',
        'Mexico',
        'Netherlands',
        'Nigeria',
        'Portugal',
        'Russia',
        'Spain',
        'Uruguay'].sort();
    const uniformPrice = [
        '$0 ~ $50',
        '$50 ~ $100',
        '$100 ~ $150',
        '$150 ~ $200',
        '$200 ~ $300',
        '$300 ~ $400',
        '$400 ~ $500',
        '$500 ~ $700',
        '$700 ~ $900',
        '$900 ~ $1000',
        '$1000 +'
    ]
    const uniformSize = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    
    const [formData, setFormData] = useState({
        // imageString temporarily removed
        // imageString: '',
        price: '',
        team:'',
        country: '',
        size: '',
        productDescription: '',
        playerName: '',
        uniformYear: '',
        sellLocation: '',
        sellerLocation: '',
        sellerName: '',
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    }


   return (
        <div className="form-container">
            {/* <h1 className="form-logo">🎽</h1> */}
            <h1 className="form-title">Upload your uniform</h1>
            <h1 className="form-subtitle">Tell us more about your uniform so that yours can be more valuable!</h1>
            
            <form className="form-container2">
                
                <label className="label-text">
                    Uniform Image
                </label>

                <div className='image-upload'>
                    <img className='uniform-img' alt='' src={require('./uniform.png')} />
                    <button className='upload-btn'>Upload Image</button>
                </div>

                <label className="label-text">
                    Price
                </label>
                <select name="price" value={formData.price} onChange={handleChange}>
                    {uniformPrice.map((c, index) => <option key={index} value={c}>{c}</option>)}
                </select>

            
                <label className="label-text">
                    Country
                </label>
                <select name="country" value={formData.country} onChange={handleChange}>
                    {soccerFamousCountries.map((c, index) => <option key={index} value={c}>{c}</option>)}
                </select>

                <label className="label-text">
                    Team
                </label>

                <input type="text" name="team" value={formData.team} onChange={handleChange} />
                
                <label className="label-text">
                    Size
                </label>

                <select name="size" value={formData.size} onChange={handleChange}>
                    {uniformSize.map((c, index) => <option key={index} value={c}>{c}</option>)}
                </select>

                <label className="label-text">
                    Product Description
                </label>

                <input type="text" name="productDescription" value={formData.productDescription} onChange={handleChange} />

                <label className="label-text">
                    Player Name
                </label>

                <input type="text" name="playerName" value={formData.playerName} onChange={handleChange} />

                <label className="label-text">
                    Uniform Year
                </label>

                <input type="text" name="uniformYear" value={formData.uniformYear} onChange={handleChange} />

                <label className="label-text">
                    Sell Location
                </label>

                <input type="text" name="sellLocation" value={formData.sellLocation} onChange={handleChange} />

                <label className="label-text">
                    Your Location
                </label>

                <input type="text" name="sellerLocation" value={formData.sellerLocation} onChange={handleChange} />

                <label className="label-text">
                    Your Name
                </label>

                <input type="text" name="sellerName" value={formData.sellerName} onChange={handleChange} />

                <button onClick={handleSubmit} className="submit-btn">Submit</button>
            </form>
        </div>
   )
}
