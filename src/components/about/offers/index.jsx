import React from 'react';
import Offer from './offer';
import vases from '../../../images/vase.png';
import mugs from '../../../images/mugs.png';
import plates from '../../../images/plates.png';

const Offers = () => {
    return (
        <>
            <div className="offers">
                <Offer img={vases} title="Vases" />
                <Offer img={mugs} title="Mugs" />
                <Offer img={plates} title="Plates" />
            </div>
            <div className="offer-description">
                <div>
                    <div className="title small">Hand Grafted <br /> Pottery since 1990</div>
                    <p className="paragraph small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                </div>
                <div>
                    <div className="title small">Hand Grafted <br /> Pottery since 1990</div>
                    <p className="paragraph small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                </div>
            </div>
        </>

    );
}

export default Offers;

