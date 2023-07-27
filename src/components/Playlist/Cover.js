import './Card.module.css';

export default function Cover({ cover, alt, onClick }) {
  return (
    <img
      src={cover}
      alt={alt}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  )
}