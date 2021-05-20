import React from "react";
import Navigation from "../components/Navigation";

const Price = () => {
    return (
        <>
            <Navigation/>
            <div className="columns w-100 d-flex flex-wrap justify-content-center align-items-center my-5">
                <ul className="price w-25 mx-1">
                    <li className="header bg-dark">Base CMS <br/> (Wordpress, Prestashop etc...)</li>
                    <li className="grey">450€</li>
                    <li>Choix Hébergement</li>
                    <li>Installation CMS</li>
                    <li>Paramétrage SQL</li>
                    <li>Premier pas</li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
                </ul>

                <ul className="price w-25 mx-1">
                    <li className="header bg-dark">Site Vitrine CMS <br/> Wordpress, Prestashop</li>
                    <li className="grey">1690€</li>
                    <li>Base CMS</li>
                    <li>De 1 à 5 pages</li>
                    <li>Nom de domaine offert*</li>
                    <li>Déploiement du site</li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
                </ul>

                <ul className="price w-25 mx-1">
                    <li className="header bg-success">Formule Freelance <br/> site, app mobile, SPA</li>
                    <li className="grey">350€ / jour</li>
                    <li>10GB Storage</li>
                    <li>10 Emails</li>
                    <li>Nom de domaine offert*</li>
                    <li>1GB Bandwidth</li>
                    <li className="grey"><a href="#" className="button">Sign Up</a></li>
                </ul>
            </div>
        </>
    )
}

export default Price
