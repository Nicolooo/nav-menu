import Header from "../../../components/header";
import Switcher from "../../../components/lang/lang";
import styles from "./style.module.scss";
export default function ParkingGe() {
    return (
        <>
         <Header menuLang="ge" />
         <Switcher title="En" link="/parking" />
         <main className={styles.parking}>
            <section className={styles.hero}>
                <h1>პარკინგი</h1>
            </section>
            <section className={styles.rates}>
                <div className={styles.panel}>
                    <div className={styles.panelHeading}>
                        <h1>ავტოსადგომის ტარიფები</h1>
                    </div>
                    <div className={styles.panelBody}>
                    <table className={styles.tableLatitude}>
                        <thead>
                            <tr>
                            <th>ხანგძლივობა</th>
                            <th>ტარიფები</th>
                            </tr>
                        </thead>
                        
                        <tfoot>
                            <tr>
                            <td colSpan="2">ავტოფარეხით სარგებლობის ტარიფები ვაკე პლაზას შენობაში</td>
                            </tr>
                        </tfoot>
                        
                        <tbody>
                            <tr>
                            <th>10 წუთამდე</th>
                            <td>უფასო</td>
                            </tr>
                            <tr>
                            <th>10 დან 30 წუთამდე</th>
                            <td>2 ლარი</td>
                            </tr>
                            <tr>
                            <th>30 დან 60 წუთამდე</th>
                            <td>3 ლარი</td>
                            </tr>
                            <tr>
                            <th>ყოველი მომდევნო საათი</th>
                            <td>3 ლარი</td>
                            </tr>
                            <tr>
                            <th>ყოველი მომდევნო საათი 20:00-დან 9:00 მდე</th>
                            <td>2 ლარი</td>
                            </tr>
                        </tbody>
                        </table>

                    </div>
                </div>
            </section>
         </main>
        </>
    )
}