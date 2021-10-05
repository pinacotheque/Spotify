import styles from './Login.module.css'
import spotify from '../assets/Spotify.png'

const Login = () => {

    
    return(
    <div id={styles.body}>
    <div className={styles.spotidiv}>
    <img className={styles.spotify} src={spotify}/>
    </div>

    <hr/>
    <div className={styles.outer}>
        <div className={styles.inner}>
        <form>
            <h3>Log in</h3>
            <div className="form-group">
                <label class={styles.labels}>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label class={styles.labels}>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label text-dark" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            <p className={styles.forgot_password}>
                Forgot <a href="#">password?</a>
            </p>
        </form>
        </div>
    </div>
    </div>
    )
}
export default Login