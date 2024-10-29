import './TemperatureToggle.css';

interface TemperatureToggleProps {
  unit: string;
  setUnit: (unit: string) => void;
}

export default function TemperatureToggle({ unit, setUnit }: TemperatureToggleProps) {
  return (
    <div>
      <button onClick={() => setUnit('C')} className={unit === 'C' ? 'active' : ''}>Celsius</button>
      <button onClick={() => setUnit('F')} className={unit === 'F' ? 'active' : ''}>Fahrenheit</button>
    </div>
  );
}