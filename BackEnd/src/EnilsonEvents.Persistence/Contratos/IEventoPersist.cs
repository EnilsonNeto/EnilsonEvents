using System.Threading.Tasks;
using EnilsonEvents.Domain;

namespace EnilsonEvents.Persistence.Contratos
{
    public interface IEventoPersist
    {
         //Eventos
         Task<Evento[]> GetAllEventosTemaAsync(string tema, bool includePalestrantes = false);
         Task<Evento[]> GetAllEventosAsync(bool includePalestrantes = false);
         Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrantes = false);
    }
}