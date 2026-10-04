import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { eventService } from '../../../services/eventService';
import { CalendarEvent } from '../../../models/CalendarEvent';

export function useEvents() {
  const qc = useQueryClient();
  const refresh = () => qc.invalidateQueries({ queryKey: ['events'] });
  const list = useQuery({ queryKey: ['events'], queryFn: () => eventService.list() });
  const save = useMutation({ mutationFn: (e: CalendarEvent) => eventService.save(e), onSuccess: refresh });
  const remove = useMutation({ mutationFn: (id: string) => eventService.remove(id), onSuccess: refresh });
  return { events: list.data ?? [], save: save.mutate, remove: remove.mutate };
}
