import { useNavigate } from 'react-router-dom';

export default function Naslov() {
    const navigate = useNavigate(); // Inicijalizujte useNavigate

    const handleClick = () => {
        navigate('/'); 
    };

    return (
        <div>
            <div
                className="flex items-center justify-center w-full h-[20%] p-4 cursor-pointer"
                onClick={handleClick} 
            >
                <h1 className="font-lora font-light text-black text-4xl md:text-6xl">KODÉ COUTURE</h1>
            </div>
        </div>
    );
}
