using System.Threading.Tasks;
using EnilsonEvents.Domain;

namespace EnilsonEvents.Persistence.Contratos
{
    public interface IPalestrantePersist
    {
         //Palestrantes
         Task<Palestrante[]> GetAllPalestrantesByNomeAsync(string nome, bool includeEventos);
         Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos);
         Task<Palestrante> GetPalestranteByIdAsync(int palestranteId, bool includeEventos);
    }
}