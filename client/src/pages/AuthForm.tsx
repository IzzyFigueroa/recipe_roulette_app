import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useStore } from '../store';

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
  const store = useStore();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Determine API endpoint based on form type
    const url = isLogin ? '/auth/login' : '/auth/register';

    try {
      const res: any = await axios.post(url, {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password
      });

      if (res.status === 200) {
        store?.setState((oldState) => ({
          ...oldState,
          user: res.data.user
        }));
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
    <section className="row">
      <form onSubmit={handleSubmit} className="col-4 mx-auto">
        <h2 className="text-center text-white mt-3 mb-3">{isLogin ? 'Sign In' : 'Sign Up'}</h2>

        {formData.error_message && (
          <p className="text-danger text-center">{formData.error_message}</p>
        )}

        {/* Grouped input fields in a styled box */}
        <div className="auth-box">
          {!isLogin && (
            <>
              <div className="mb-3">
                <input 
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  className="form-control"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="form-control"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </>
          )}

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              value={formData.password}
              onChange={handleInputChange}
              autoComplete="on"
              required
            />
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success full-width">Submit</button>
          
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
