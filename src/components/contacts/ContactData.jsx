import {AiOutlineMail} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';

export const ContactData = [
    {
        'icon': <AiOutlineMail className='contact__option-icon'/>,
        'type': "Email",
        'value': "rkeshari50@gmail.com",
        'link': "mailto:rkeshari50@gmail.com"
    },
    {
        'icon': <BsWhatsapp className='contact__option-icon'/>,
        'type': "WhatsApp",
        'value': "+91-9354537763",
        'link': "https://wa.me/+919354537763"
    },
    {
        'icon': <BsLinkedin className='contact__option-icon'/>,
        'type': "LinkedIn",
        'value': "Raghavendra Kesari",
        'link': "https://www.linkedin.com/in/raghavendra-kesari-7b113b209/"
    }
]