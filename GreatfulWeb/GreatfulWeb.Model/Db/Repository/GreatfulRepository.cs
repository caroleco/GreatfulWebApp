using GreatfulWeb.Model.Db.Model;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GreatfulWeb.Model.Db.Repository
{
    public class GreatfulRepository : RepositoryBase<Greatful>
    {
        public GreatfulRepository(ISession session) : base(session)
        {
        }
    }
}
