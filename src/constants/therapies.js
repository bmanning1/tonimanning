import DeepRelaxation from '../static/TherapiesPage/DeepRelaxation.jpeg';
import Swedish from '../static/TherapiesPage/Swedish.jpeg';
import SportsMassage from '../static/TherapiesPage/SportsMassage.jpeg';
import HotStone from '../static/TherapiesPage/HotStone.jpeg';
import FacialReflexology from '../static/TherapiesPage/FacialReflexology.jpeg';
import IndianHead from '../static/TherapiesPage/IndianHead.jpeg';
import Bespoke from '../static/TherapiesPage/Bespoke.jpg';
import Reflexology from '../static/TherapiesPage/Reflexology.jpeg';
import Online from '../static/TherapiesPage/Online.jpeg';

export default {
    'deep-relaxation': {
        name: 'Deep Relaxation Massage',
        img: DeepRelaxation,
        prices: [
            {
                label: '60 minutes',
                value: '45.00'
            },
            {
                label: '45 minutes',
                value: '40.00'
            },
            {
                label: '30 minutes',
                value: '30.00'
            },
            {
                label: 'Massage package',
                value: '120.00',
                subtext: '4 x 45 minutes'
            }
        ],
        description: `The Deep Relaxation Massage is a gentle but effective and deeply soothing treatment combining
             Eastern and Western techniques, including acupressure and table shiatsu. It is often used to treat
             conditions like digestive complaints, headaches, insomnia, chronic fatigue and neck & back pain. An
             initial consultation is required for all clients and the price will be included in the purchase of a 60
             minute session.`
    },
    'swedish': {
        name: 'Swedish Massage',
        prices: [
            {
                label: '60 minutes',
                value: '45.00'
            }
        ],
        img: Swedish,
        description: 'blah'
    },
    'sports': {
        name: 'Sports Massage',
        prices: [
            {
                label: '60 minutes',
                value: '45.00'
            }
        ],
        img: SportsMassage,
        description: 'blah'
    },
    'hot-stone': {
        name: 'Hot Stone Massage',
        prices: [
            {
                label: '60 minutes',
                value: '45.00'
            }
        ],
        img: HotStone,
        description: 'blah'
    },
    'facial': {
        name: 'Facial Reflexology',
        prices: [
            {
                label: '60 minutes',
                value: '45.00'
            }
        ],
        img: FacialReflexology,
        description: 'blah'
    },
    'indian-head': {
        name: 'Indian Head Massage',
        prices: [
            {
                label: '60 minutes',
                value: '45.00'
            }
        ],
        img: IndianHead,
        description: 'blah'
    },
    'bespoke': {
        name: 'Bespoke Massage Packages',
        prices: [
            {
                label: '60 minutes',
                value: '45.00'
            }
        ],
        img: Bespoke,
        description: 'blah'
    },
    'reflexology': {
        name: 'Reflexology',
        prices: [
            {
                label: '60 minutes',
                value: '45.00'
            }
        ],
        img: Reflexology,
        description: 'blah'
    },
    'online': {
        name: 'Online & Virtual Sessions',
        prices: [
            {
                label: '60 minutes',
                value: '45.00'
            }
        ],
        img: Online,
        description: 'blah'
    }
}