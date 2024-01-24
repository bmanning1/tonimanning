import DeepRelaxation from '../static/Therapies/DeepRelaxation.jpg';
import GiftVouchers from '../static/Therapies/GiftVouchers.jpg';
import Sports from '../static/Therapies/Sports.jpg';
import HotStone from '../static/Therapies/HotStone.jpg';
import Facial from '../static/Therapies/Facial.jpg';
import IndianHead from '../static/Therapies/IndianHead.jpg';
import Bespoke from '../static/Therapies/Bespoke.jpg';
import Reflexology from '../static/Therapies/Reflexology.jpg';
import Online from '../static/Therapies/Online.jpg';

export const extraDetails = `An initial consultation is required for all new clients.
     All courses must be completed within 3 months of the initial treatment.`;

export default {
    sports: {
        name: 'Sports Massage',
        img: Sports,
        pricesFrom: '34.00',
        prices: [
            {
                label: 'Initial consulation and massage (60 minutes)',
                value: '49.00'
            },
            {
                label: '45 minutes',
                value: '44.00'
            },
            {
                label: '30 minutes',
                value: '34.00'
            },
            {
                label: 'Massage package (4 x 45 minutes)',
                value: '130.00'
            }
        ],
        description: `Sports Massage can be used to treat many types of soft tissue injury such as back pain, stiff
             neck and shoulders, muscle strains, knee pain or post exercise stiff and sore muscles. Sports Massages
             can reduce pain, speed up recovery time and reduce the risk of future injury.  Pre-event massages can
             improve performance and reduce the risk of injury. Post-event massages help to relax the muscles, reduce
             muscle soreness and speed up the recovery process.`
    },
    'deep-relaxation': {
        name: 'Deep Relaxation Massage',
        img: DeepRelaxation,
        pricesFrom: '34.00',
        prices: [
            {
                label: 'Initial consulation and massage (60 minutes)',
                value: '49.00'
            },
            {
                label: '45 minutes',
                value: '44.00'
            },
            {
                label: '30 minutes',
                value: '34.00'
            },
            {
                label: 'Massage package (4 x 45 minutes)',
                value: '130.00'
            }
        ],
        description: `A gentle but effective and deeply soothing treatment combining Eastern and Western techniques. It
             is often used to treat conditions like digestive complaints, headaches, insomnia, chronic fatigue and neck
             and back pain.`
    },
    aromatherapy: {
        name: 'Aromatherapy Massage',
        img: GiftVouchers,
        pricesFrom: '34.00',
        prices: [
            {
                label: 'Initial consulation and massage (60 minutes)',
                value: '59.00'
            },
            {
                label: '45 minutes',
                value: '49.00'
            },
            {
                label: '30 minutes',
                value: '44.00'
            },
            {
                label: 'Massage package (4 x 45 minutes)',
                value: '162.00'
            }
        ],
        description: `A deeply relaxing massage that can be tailored to your needs. Choose from a range of aromatherapy
             blends including: Calming (for over-tired adults and children), De-Stress (to relax body and mind to
             create a feeling of peace and calm), Vitality (to help boost energy levels), Women’s Balance (to help with
             hormonal imbalances from PMS to menopause).`
    },
    'indian-head': {
        name: 'Indian Head Massage',
        img: IndianHead,
        pricesFrom: '34.00',
        prices: [
            {
                label: '45 minute initial consultation and massage',
                value: '39.00'
            },
            {
                label: '30 minutes',
                value: '34.00'
            },
            {
                label: 'Massage package (4 x 30 minutes)',
                value: '110.00'
            }
        ],
        description: `A soothing and calming treatment, beneficial for stress related conditions such as tension
             headaches, fatigue and insomnia. It is a lovely, gentle treatment during which you sit on a chair, fully
             clothed.`
    },
    facials: {
        name: 'Facials',
        img: Facial,
        pricesFrom: '29.00',
        prices: [
            {
                label: '75 minutes luxury',
                value: '59.00'
            },
            {
                label: '60 minutes',
                value: '49.00'
            },
            {
                label: '45 minutes',
                value: '39.00'
            },
            {
                label: '30 minutes',
                value: '29.00'
            },
            {
                label: 'Facials package (4 x 45 minutes)',
                value: '139.00'
            }
        ],
        description: `Wonderfully relaxing, aromatic facials using Neal’s Yard Remedies (NYR) gentle, organic products.
             Choose from:  Frankincense (calming and hydrating), Rose (uplifting and balancing), Palmarosa (cleansing
             and balancing for oily/combination/blemish prone skin), Sensitive (soothing and refreshing), Frankincense
             Intense (for an intensely brightening and hydrating treatment). Please note for Frankincense Intense
             products add £10.`
    },
    facial: {
        name: 'Facial Reflexology',
        img: Facial,
        pricesFrom: '34.00',
        prices: [
            {
                label: 'Initial consultation and massage 60 minutes',
                value: '49.00'
            },
            {
                label: '45 minutes',
                value: '44.00'
            },
            {
                label: '30 minutes',
                value: '34.00'
            },
            {
                label: 'Massage package (4 x 45 minutes)',
                value: '130.00'
            }
        ],
        description: `A gentle, luxurious and deeply relaxing treatment that works on the principle that the body's
             major systems and organs are mapped out on the face. Facial reflexology is particularly good for treating
             stress-related conditions such as insomnia, tension headaches and Irritable Bowel Syndrome (IBS) with the
             added benefit of improving skin tone, circulation and giving your face a healthy glow. Due to skin types,
             the treatment is performed with or without facial oil.`
    },
    'hot-stone': {
        name: 'Hot Stone Massage',
        img: HotStone,
        pricesFrom: '54.00',
        prices: [
            {
                label: 'Initial consulation and massage (60 minutes)',
                value: '54.00'
            },
            {
                label: '45 minutes',
                value: '59.00'
            },
            {
                label: 'Massage package (4 x 45 minutes)',
                value: '170.00'
            }
        ],
        description: `A comforting and deeply relaxing advanced massage, using hot stones. The use of heated stones
             aids the release of muscle tension without the need for deep pressure which results in a therapeutic
             treatment that is also a wonderfully soothing experience.`
    },
    reflexology: {
        name: 'Reflexology',
        img: Reflexology,
        pricesFrom: '34.00',
        prices: [
            {
                label: 'Initial consulation and massage (60 minutes)',
                value: '49.00'
            },
            {
                label: '45 minutes',
                value: '44.00'
            },
            {
                label: '30 minutes',
                value: '34.00'
            },
            {
                label: 'Massage package (4 x 45 minutes)',
                value: '130.00'
            }
        ],
        description: `A treatment that works on the principle that the major organs and systems of the body are mapped
             out on the feet and so by treating the feet, it is possible to treat the whole body. It is particularly
             beneficial for stress-related conditions such as Irritable Bowel Syndrome (IBS) or insomnia.`
    },
    bespoke: {
        name: 'Bespoke Massage Packages',
        img: Bespoke,
        pricesFrom: '34.00',
        prices: [],
        description: `Tailor-made packages based on a combination of treatments. Please get in contact to discuss
             requirements.`
    },
    online: {
        name: 'Online and Virtual Sessions',
        img: Online,
        pricesFrom: '34.00',
        prices: [
            {
                label: 'Initial consulation and massage (60 minutes)',
                value: '39.00'
            },
            {
                label: '45 minutes',
                value: '34.00'
            },
            {
                label: '30 minutes',
                value: '24.00'
            },
            {
                label: 'Massage package (4 x 45 minutes)',
                value: '110.00'
            }
        ],
        description: `Tailor made remote appointments via Zoom are also available. These can cover self-massage
             techniques, gentle breathing and stretching exercises and meditations.`
    },
    vouchers: {
        name: 'Gift Vouchers',
        img: GiftVouchers,
        pricesFrom: '22.00',
        prices: [],
        description: `Gift vouchers are available starting at just £22 so they can be used to cover a whole
             treatment/course, or to go towards part of the cost of a treatment.

             Gift vouchers are valid for 6 months.`
    }
};
