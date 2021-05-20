import React from "react";
import Tilt from "react-tilt";

export default function FolioBody() {
    return (
        <div className="wrapper" id="wrapper">
            <Tilt options={{max: 25, scale: 1.1}}>
                <div class="agency">
                    <img
                        src="https://res.cloudinary.com/bsao17/image/upload/v1621271218/devwebdino/agency_mo6swl.jpg"
                        alt=""
                    />
                    Projet de pure intégration, soit sur la base d'une maquette établie par un designer,
                    Le but est de la reproduire à l'identique.
                    Il est impératif de respecter la charte graphique, ainsi que les dispositions et animations.
                    Le rôle du développeur est de traduire ce projet en ligne de code, c'est-à-dire utiliser les outils,
                    les technologies et les librairies qui vont lui permettre de mener à bien le projet, mais surtout,
                    trouver les solutions qui vont le rendre disponible sur toutes les tailles d'écrans, de l'ordinateur
                    de bureau au téléphone portable passant par la TV du salon, c'est ce qu'on le " design"
                </div>
            </Tilt>

            <Tilt options={{max: 25, scale: 1.1}}>
                <div class="bikeRenting">
                    <img
                        src="https://res.cloudinary.com/bsao17/image/upload/v1621271227/devwebdino/bikeRenting_e5x9n3.jpg"
                        alt=""
                    />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sit
                    sint repellat ullam earum necessitatibus repudiandae harum laboriosam
                    et distinctio perspiciatis, molestiae eaque, nobis quidem quia dicta
                    voluptas ratione, nesciunt ipsa. Voluptate maxime facere dicta
                    quisquam fugit porro eveniet! Nostrum sint harum eos cumque corporis
                    maiores beatae quae dolore. Placeat.
                </div>
            </Tilt>

            <Tilt options={{max: 25, scale: 1.1}}>
                <div class="forteroche">
                    <img
                        src="https://res.cloudinary.com/bsao17/image/upload/v1621271224/devwebdino/forteroche_kgo8ux.jpg"
                        alt=""
                    />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sit
                    sint repellat ullam earum necessitatibus repudiandae harum laboriosam
                    et distinctio perspiciatis, molestiae eaque, nobis quidem quia dicta
                    voluptas ratione, nesciunt ipsa. Voluptate maxime facere dicta
                    quisquam fugit porro eveniet! Nostrum sint harum eos cumque corporis
                    maiores beatae quae dolore. Placeat.
                </div>
            </Tilt>

            <Tilt options={{max: 25, scale: 1.1}}>
                <div class="ireki">
                    <img
                        src="https://res.cloudinary.com/bsao17/image/upload/v1621271223/devwebdino/ireki_tssz7m.jpg"
                        alt=""
                    />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sit
                    sint repellat ullam earum necessitatibus repudiandae harum laboriosam
                    et distinctio perspiciatis, molestiae eaque, nobis quidem quia dicta
                    voluptas ratione, nesciunt ipsa. Voluptate maxime facere dicta
                    quisquam fugit porro eveniet! Nostrum sint harum eos cumque corporis
                    maiores beatae quae dolore. Placeat.
                </div>
            </Tilt>

            <Tilt options={{max: 25, scale: 1.1}}>
                <div class="jmpm">
                    <img
                        src="https://res.cloudinary.com/bsao17/image/upload/v1621271218/devwebdino/jmpm_egbkof.jpg"
                        alt=""
                    />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet sit
                    sint repellat ullam earum necessitatibus repudiandae harum laboriosam
                    et distinctio perspiciatis, molestiae eaque, nobis quidem quia dicta
                    voluptas ratione, nesciunt ipsa. Voluptate maxime facere dicta
                    quisquam fugit porro eveniet! Nostrum sint harum eos cumque corporis
                    maiores beatae quae dolore. Placeat.
                </div>
            </Tilt>
        </div>
    );
}

window.addEventListener('DOMContentLoaded', ()=>{
    const scroll = ()=>{
        const wrapper = document.getElementById('wrapper');
        wrapper.scrollIntoView()
    }
    setTimeout(scroll, 14000)
})
