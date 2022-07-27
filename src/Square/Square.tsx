import './styles.css';

export const Square: React.FC<{  value?: string; onClick: () => void }> = ({ value, onClick }) => {
    return <div className="square" onClick={onClick}>{value}</div>
}