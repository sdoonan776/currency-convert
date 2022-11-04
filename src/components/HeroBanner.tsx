import React, {ReactElement} from 'react';
import styles from '../styles/components/HeroBanner.module.scss';

function HeroBanner(): ReactElement {
    return (
       <>
            <div className={styles.heroBanner}></div>
       </>
    );
};

export default HeroBanner;