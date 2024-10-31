import React, { useState } from "react";


function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] =  useState('');
    const [error] = useState('');
    const [result, setResult] = useState('');


    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target as HTMLFormElement);
        formData.append("access_key", "4a4450d5-f7d4-4de1-a573-e3b3a00a3aec");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            (event.target as HTMLFormElement).reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100" style={{
                backgroundImage: 'linear-gradient(rgba(184, 184, 184, 0.6), rgba(0, 0, 0, 0.6)), url(https://fal.media/files/tiger/oTtBmzuEwByUPUFbvq47P.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '20px',
                borderRadius: '8px',
            }}>
                <form onSubmit={onSubmit} style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '20px',
                    borderRadius: '8px',
                    width: '500px',

                }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold" >First Name</label>
                        <input type="name" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Last Name</label>
                        <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label fw-bold">Send Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={message} rows={3} onChange={(e) => setMessage(e.target.value)}
                        required></textarea>
                    </div>
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    <button type="submit" className="btn btn-success">Send Message</button>
                    <span>{result}</span>
                </form>
            </div>
        </>
    );

}

export default ContactForm;


