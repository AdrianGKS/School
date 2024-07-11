import {useState} from "react";


function Card({curso, onSelect}) {
    const [isSelected, setIsSelected] = useState(false);
    const handleSelect = () => {
        setIsSelected(!isSelected);
        onSelect(curso.id); // Passa o ID do curso selecionado
    };
    return (
        <div className={`curso-card ${isSelected ? 'selected' : ''}`}
             onClick={handleSelect}>
            {/* Exibe detalhes do curso aqui */}
            {curso.nome}
        </div>
    );

}

export default Card