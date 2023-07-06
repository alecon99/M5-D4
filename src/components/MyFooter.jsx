import {useContext} from "react";
import { ThemeContext } from '../context/ThemeContext';

const MyFooter = () => {

    const myThemeContext = useContext(ThemeContext)
    const { dark , toggleTheme } = myThemeContext

    return (
        <footer className="text-center text-lg-start text-muted">
            <section  className={`${dark ? 'bg-dark text-white ' : 'bg-light'}`}>
                <div className="container text-center text-md-start mt-5">
                    <div className="row pt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>BookShop
                            </h6>
                            <p>
                                È la libreria online dove acquistare libri, eBook, cd, dvd, videogiochi e idee regalo. Letture e intrattenimento per ogni occasione!
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">professional books</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">school books</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">collections</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>

                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                info@bookshop.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>

                        </div>
                    </div>
                </div>
                <div className="text-center p-4">
                © 2023 Copyright: Alessio Conte
            </div>
            </section>
            
        </footer>
    )
}

export default MyFooter