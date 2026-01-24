export default function Botao({ children, type = "button" }) {
  return (
    <button className="btn" type={type}>
      {children}
    </button>
  );
}
