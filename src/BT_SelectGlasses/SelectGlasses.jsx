import React, { useState } from 'react'
import styles from './style.module.css'
import data from './dataGlasses.json'

function SelectGlasses() {
    const [glassesUrl, setglasses] = useState({
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./img/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    });

    const glassesList = () => {
        return data.map((glassesItem, index) => {
            return (
                <div className='col-sm mb-3' onClick={() => setglasses(glassesItem)} key={index}>
                    <img src={glassesItem.url} width="120px" height="60px" className={styles.border} alt={glassesItem.name} />
                </div>
            );
        });
    };

    return (
        <div className={styles.background}>
            <div style={{ backgroundColor: 'rgba(0,0,0,.3)', height: "1000px" }}>
                <h3 className='text-center text-light p-5' style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>TRY GLASSES APP ONLINE</h3>
                <div className='container-fluid mt-5 text-center'>
                    <div className={`position-relative d-inline-block ${styles.margin}`}>
                        <img className='' src="./img/model.jpg" alt="" width="220px" height="300px" />
                        <img className={`position-absolute ${styles.glassesPosition}`} src={glassesUrl.url} />
                        <span className={styles.glassesInfo}>
                            <h3 className={styles.glassesName}>{glassesUrl.name}</h3>
                            <p className={styles.glassesDesc}>{glassesUrl.desc}</p>
                        </span>
                    </div>
                    <div className={`d-inline-block ${styles.margin}`}>
                        <img src="./img/model.jpg" alt="" width="220px" height="300px" />
                    </div>
                    <div className='container p-5 my-5 border bg-white'>
                        <div className='row' >
                            {glassesList()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectGlasses