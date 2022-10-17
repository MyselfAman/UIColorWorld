import  {React ,useState} from 'react'
import styles from '../styles/Home.module.css'
export default function card({cards, title}) {
    console.log(cards);
  return (
    <div>
        <p className={styles.subtitle}>{title}</p>
        
        <div className={styles.grid}>
            {
                cards.ColorCards.map(card=>{
                    return(
                       <div className={styles.eggCard}>
                             <a  href="#" key={card.id} className={styles.card} style={{backgroundColor : `${card.hexDecimalCode}`}} >
                          
                            </a>
                            <p className={styles.eggCradCode}>{card.hexDecimalCode}</p>
                       </div>
                    )
                })
            }
        </div>
    </div>
  )
}
