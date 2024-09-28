import { NetflixRegister } from '../netflix-register/netflix-register';
import './netflix-main.css';

export function NetflixMain(){
    return(
        <main>
            <div className="main-title">Unlimited movies, TV shows and more</div>
            <div className="main-subtitle">Starts at Rs149. Cancel anytime</div>
            <NetflixRegister></NetflixRegister>
        </main>
    )
}