export default function InputData({ label, type, min, max, onChange }) {
    return (
      <label>
        {label}
        <input type={type} min={min} max={max} onChange={onChange} />
      </label>
    );
  }
  