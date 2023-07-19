using System.Threading.Tasks;
using EnilsonEvents.Domain;

namespace EnilsonEvents.Application.Contratos
{
    public interface IEventoService
    {
         Task<Evento> AddEventos(Evento model);
         Task<Evento> UpdateEvento(int eventoId, Evento model);
         Task<bool> DeleteEvento(int eventoId);

         Task<Evento[]> GetAllEventosAsync(bool includePalestrantes = false);
         Task<Evento[]> GetAllEventosTemaAsync(string tema, bool includePalestrantes = false);
         Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrantes = false);
    }
}