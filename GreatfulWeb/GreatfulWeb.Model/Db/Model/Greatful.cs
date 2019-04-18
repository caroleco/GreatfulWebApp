using NHibernate.Mapping.ByCode;
using NHibernate.Mapping.ByCode.Conformist;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreatfulWeb.Model.Db.Model
{
    public class Greatful
    {
        [Required(ErrorMessage ="Campo Obrigatório")]
        public virtual int Id { get; set; }
        public virtual string GreatfulFor { get; set; }
        public virtual DateTime Date { get; set; }
    }

    public class GreatfulMap : ClassMapping<Greatful>
    {
        public GreatfulMap()
        {
            Id(x => x.Id, m => m.Generator(Generators.Identity));

            Property(x => x.GreatfulFor);
            Property(x => x.Date);
        }
    }
}
