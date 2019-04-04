using GreatfulWeb.Model.Db;
using GreatfulWeb.Model.Db.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreatfulWeb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GreatfulFor()
        {
            return View();
        }

        public ActionResult ListMotives()
        {
            var m = DbFactory.Instance.GreatfulRepository.FindAll();

            if (m != null)
                return View(m);
            else
                return RedirectToAction("Index");
        }

        public ActionResult Record(Greatful greateful)
        {
            var g = DbFactory.Instance.GreatfulRepository.SaveOrUpdate(greateful);
            return RedirectToAction("Index");
        }
    }
}