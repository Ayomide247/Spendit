import lamin from "../assets/images/lamin.png";
import laura from "../assets/images/laura.png";
import Ayobami from "../assets/images/Ayobami.png";
import { FiChevronUp } from "react-icons/fi";



export const Users = [
    {
        id: 1,
        comment: 'Spendit has been a game-changer for me. Their credit card has helped me manage unexpected expenses and build my credit history. Thanks to Spendit, I feel more confident about my financial future',
        image: laura,
        name: 'Laura Koffi',
        occupation: 'Enterpreneur'
    },
    {
        id: 2,
        comment: "As someone who's always been intimidated by finances, I was hesitant to use Spendit at first.But their app made it easy for me to track my expenses and set financial goals",
        image: lamin,
        name: 'Lamin Njie',
        occupation: 'Nysc Corper'
    },
    {
        id: 3,
        comment: "The rewards and perks have been amazing, and their app has helped me stay on track with my finances. Thanks to Spendit, I've been able to achieve my financial goals faster than I ever thought",
        image: Ayobami,
        name: 'Ayobami Sobowale',
        occupation: 'Teacher'
    },
    {
        id: 4,
        comment: "The rewards and perks have been amazing, and their app has helped me stay on track with my finances. Thanks to Spendit, I've been able to achieve my financial goals faster than I ever thought",
        image: Ayobami,
        name: 'Ayobami Sobowale',
        occupation: 'Teacher'
    },
    {
        id: 5,
        comment: "The rewards and perks have been amazing, and their app has helped me stay on track with my finances. Thanks to Spendit, I've been able to achieve my financial goals faster than I ever thought",
        image: Ayobami,
        name: 'Ayobami Sobowale',
        occupation: 'Teacher'
    }
];

export const faqsData = [
    {
        id: 1,
        title: "What is the Spendit credit card?",
        text: "The Spendit credit card is a credit card designed specifically for Nigerian graduates participating in the NYSC program, providing access to credit that works for them.",
        icon: (
            <span className="absolute right-0 top-6 w-8 h-8 rounded-full border border-[#ff620071] text-[#ff620071] grid place-content-center cursor-pointer">
                <FiChevronUp />
            </span>
        ),
        isOpen: false,
    },
    {
        id: 2,
        title: "How do I apply for the Spendit credit card?",
        text: "The Spendit credit card is a credit card designed specifically for Nigerian graduates participating in the NYSC program, providing access to credit that works for them.",
        icon: (
            <span className="absolute right-0 top-6 w-8 h-8 rounded-full border border-[#ff620071] text-[#ff620071] grid place-content-center cursor-pointer">
                <FiChevronUp />
            </span>
        ),
        isOpen: false,
    },
    {
        id: 3,
        title: "Is my financial information safe with Spendit?",
        text: "The Spendit credit card is a credit card designed specifically for Nigerian graduates participating in the NYSC program, providing access to credit that works for them.",
        icon: (
            <span className="absolute right-0 top-6 w-8 h-8 rounded-full border border-[#ff620071] text-[#ff620071] grid place-content-center cursor-pointer">
                <FiChevronUp />
            </span>
        ),
        isOpen: false,
    },
    {
        id: 4,
        title: "Are there any hidden fees with Spendit?",
        text: "The Spendit credit card is a credit card designed specifically for Nigerian graduates participating in the NYSC program, providing access to credit that works for them.",
        icon: (
            <span className="absolute right-0 top-6 w-8 h-8 rounded-full border border-[#ff620071] text-[#ff620071] grid place-content-center cursor-pointer">
                <FiChevronUp />
            </span>
        ),
        isOpen: false,
    },

];

