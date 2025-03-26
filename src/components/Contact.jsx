// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import { MdContentCopy } from "react-icons/md";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [copySuccess, setCopySuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText('colinlespilette@gmail.com')
            .then(() => {
                setCopySuccess('Email copié dans le presse-papiers!');
                setTimeout(() => setCopySuccess(''), 2000);
            })
            .catch((err) => {
                console.error('Erreur de copie : ', err);
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-content">
                <h2>Contactez-moi</h2>
                <div className="contact-info">
                    <div className="contact-address">
                        <p>colinlespilette@gmail.com</p>
                        <MdContentCopy className="copy-icon" onClick={copyToClipboard} />
                    </div>
                    {copySuccess && <div className="copy-message">{copySuccess}</div>}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Votre message"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
