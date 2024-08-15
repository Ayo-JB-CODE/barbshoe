import styles from './Newsletter.module.css';

const Newsletter = () => {
    return (
        <div className={styles.newsletter_container}>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className={styles.form}>
                <input type="email" placeholder='Your Email Here' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter;