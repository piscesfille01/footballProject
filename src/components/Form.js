import React, { useState } from "react";
import './Form.css';

export default function Form() {
    
    const [formData, setFormData] = useState({
        imageString: '',
        price: '',
        teamOrcountry: '',
        size: '',
        productDescription: '',
        playerName: '',
        uniformYear: '',
        sellLocation: '',
        sellerLocation: '',
        sellerName: ''
    });

    // const options = useMemo(() => countryList().getData(), []);

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
            <h1 className="form-logo">🎽</h1>
            <h1 className="form-title">Upload your uniform and make it valuable!</h1>
            <form onSubmit={handleSubmit}>
                <label className="eachItem">
                    Image String:
                    <input type="text" name="imageString" value={formData.imageString} onChange={handleChange} />
                </label>
                <label className="eachItem">
                    Price:
                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                </label>
                <label className="eachItem">
                    Team/Country:
                    <input type="text" name="teamOrcountry" value={formData.teamOrcountry} onChange={handleChange} />


                </label>
                <label className="eachItem">
                    Size:
                    <input type="text" name="size" value={formData.size} onChange={handleChange} />
                </label>
                <label className="eachItem">
                    Product Description:
                    <input type="text" name="productDescription" value={formData.productDescription} onChange={handleChange} />
                </label>
                <label className="eachItem">
                    Player Name:
                    <input type="text" name="playerName" value={formData.playerName} onChange={handleChange} />
                </label>
                <label className="eachItem">
                    Uniform Year:
                    <input type="text" name="uniformYear" value={formData.uniformYear} onChange={handleChange} />
                </label>
                <label className="eachItem">
                    Sell Location:
                    <input type="text" name="sellLocation" value={formData.sellLocation} onChange={handleChange} />
                </label>
                <label className="eachItem">
                    Seller Location:
                    <input type="text" name="sellerLocation" value={formData.sellerLocation} onChange={handleChange} />
                </label>
                <label className="eachItem">
                    Seller Name:
                    <input type="text" name="sellerName" value={formData.sellerName} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
   )
}