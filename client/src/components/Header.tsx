import { NavLink, useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import axios from 'axios';

function Header() {
    const store = useStore();
    const navigate = useNavigate();

    const logoutUser = async (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        await axios.get('/auth/logout');
        store?.setState((oldState) => ({
            ...oldState, 
            user: null
        }));
        navigate('/');
    }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img className="logo" src="/images/New_logo.png" alt="Logo" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        {store?.state.user && <NavLink className="nav-link" to="/recipebook">My Recipes</NavLink>}
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </div>
                    <div className="navbar-nav ms-auto">
                    {store && !store.state.user ? (
                        <>
                            <NavLink className="nav-link" to="/register">Sign Up</NavLink>
                            <NavLink className="nav-link" to="/login">Sign In</NavLink>
                        </>
                    ) : (
                        <a onClick={logoutUser} className="nav-link" href="/logout">Log Out</a>

                    )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;