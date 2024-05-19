import styles from '../pages/styles.module.css';

export default function Home(){
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Welcome to Developer Rooms</h1>
                <input type="text" className={styles.input} placeholder="Enter Username" />

                <select className={styles.input}>
                    <option value="">Select Room</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Node">NodeJS</option>
                    <option value="Express">ExpressJS</option>
                    <option value="React">ReactJS</option>
                </select>

                <button className='btn btn-secondary'>Join Room</button>
            </div>
            </div>
    )  
};
