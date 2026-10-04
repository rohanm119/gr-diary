# Architecture rules
- **Models** (`src/models`): classes extending `BaseEntity` (id, createdAt, updatedAt, owner). Domain logic lives here (e.g. `daysUntil()`).
- **Repository** (`src/services/Repository.ts`): the only code that touches storage. Maps rows to model instances. Currently localStorage; swap the read/write for Supabase later without touching features.
- **Services**: one per model (`eventService`, `memoryService`), each a configured `Repository`.
- **Features** (`src/features/<section>/`): `Page.tsx`, `components/`, `hooks/`. Pages call hooks; hooks use TanStack Query over services. Pages never call storage directly.
- **Shared UI** in `src/components/shared`; app frame in `src/components/layout`.
- Motion only on user action; respect `prefers-reduced-motion`. Keep visible focus outlines.
