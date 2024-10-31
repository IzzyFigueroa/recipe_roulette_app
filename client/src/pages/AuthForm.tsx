import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';

const initialFormData = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  error_message: ''
};

function AuthForm({ isLogin }: { isLogin: boolean }) {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Determine API endpoint based on form type
    const url = isLogin ? '/auth/login' : '/auth/register';

    try {
      const res = await axios.post(url, {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password
      });

      // Handle success: Navigate or store user data
      if (res.status === 200) {
        // You may want to store user info in context or state management
        navigate('/');
      }
    } catch (error: any) {
      setFormData((prevData) => ({
        ...prevData,
        error_message: error.response?.data?.message || "An error occurred"
      }));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <section className="row mt-5">
      <form onSubmit={handleSubmit} className="col-4 mx-auto">
        <h2 className="text-center">{isLogin ? 'Sign In' : 'Sign Up'}</h2>

        {formData.error_message && (
          <p className="text-danger text-center">{formData.error_message}</p>
        )}

        {!isLogin && (
          <>
            <div className="mb-3">
            <label htmlFor="first-name" className="form-label"></label>
              <input
                type="text"
                name="first_name"
                placeholder="first-name"
                className="form-control"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="last-name" className="form-label"></label>
              <input
                type="text"
                name="last_name"
                placeholder="last-name"
                className="form-control"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )}

        <div className="mb-3">
          <label htmlFor="email" className="form-label"></label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label"></label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="form-control"
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="on"
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary full-width">Submit</button>
          
          {isLogin ? (
            <NavLink className="text-center mt-3" to="/register">Haven't signed up? Click Here!</NavLink>
          ) : (
            <NavLink className="text-center mt-3" to="/login">Already signed up? Click Here!</NavLink>
          )}
        </div>        
      </form>
    </section>
  );
}

export default AuthForm;
