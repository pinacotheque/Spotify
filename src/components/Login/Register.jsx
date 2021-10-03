import styles from './Login.module.css'
import { Container } from 'react-bootstrap'
import spotify from '../assets/Spotify.png'

const Register = () => {
    return(
    <div id={styles.body}>

    <div className={styles.spotidiv}>
    <img className={styles.spotify} src={spotify}/>
    </div>
    
    <hr/>
    <div className={styles.outer}>
        <div className={styles.inner}>
        <form>
            <h3>Register</h3>

            <div className="form-group">
                    <label class={styles.labels}>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label class={styles.labels}>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label class={styles.labels}>Username</label>
                    <input type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                    <label class={styles.labels}>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label class={styles.labels}>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right text-dark">
                    Already registered <a href="login">log in?</a>
                </p>
        </form>
        </div>
    </div>
    </div>
    )
}
export default Register