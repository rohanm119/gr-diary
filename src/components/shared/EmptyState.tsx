export default function EmptyState({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div className="card empty">
      <div className="em">{icon}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
