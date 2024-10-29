// Estilos
import './radio.css'

interface RadioProps {
    value: string
    taller: string
    descripcion: string
    name: string
}

export default function Radio({
    value,
    taller,
    name,
    descripcion: description,
}: RadioProps) {
    return (
        <label className="taller">
            <div>
                <input type="radio" name={name} value={value} />
                {taller}
            </div>
            <p>{description}</p>
        </label>
    )
}
