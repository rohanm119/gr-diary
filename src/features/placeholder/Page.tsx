import EmptyState from '../../components/shared/EmptyState';
import { Section } from '../../data/sections';
export default function PlaceholderPage({ section }: { section: Section }) {
  return (
    <div className="page">
      <h1>{section.icon} {section.title}</h1>
      <p className="sub">{section.blurb}</p>
      <EmptyState icon={section.icon} title="Add your first item" text="Nothing here yet. This section arrives in a later pass." />
    </div>
  );
}
