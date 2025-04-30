import Header from "../../components/header";
import Switcher from "../../components/lang/lang";
import styles from "./style.module.scss";
export default function Parking() {
    return (
        <>
         <Header menuLang="en" />
         <Switcher title="Ge" link="/ge/parking" />
         <main className={styles.parking}>
            <section className={styles.rates}>
                <div className={styles.panel}>
                    <div className={styles.panelHeading}>
                        <h1>Parking Rates</h1>
                    </div>
                    <div className={styles.panelBody}>
                    <table className={styles.tableLatitude}>
                        <thead>
                            <tr>
                            <th>Duration</th>
                            <th>Rate</th>
                            </tr>
                        </thead>
                        
                        <tfoot>
                            <tr>
                            <td colSpan="2">base pricing for parking inside the Vake Plaza building</td>
                            </tr>
                        </tfoot>
                        
                        <tbody>
                            <tr>
                            <th>up to 10 minutes</th>
                            <td>Free of Charge</td>
                            </tr>
                            <tr>
                            <th>10 to 30 minutes</th>
                            <td>2 Gel</td>
                            </tr>
                            <tr>
                            <th>30 to 60 minutes</th>
                            <td>3 Gel</td>
                            </tr>
                            <tr>
                            <th>Every next hour</th>
                            <td>3 Gel</td>
                            </tr>
                            <tr>
                            <th>Every Next hour after 20:00 to 9:00</th>
                            <td>2 Gel</td>
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