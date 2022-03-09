"use strict";
var core;
(function (core) {
    class Router {
        m_activeLink;
        m_routingTable;
        get ActiveLink() {
            return this.m_activeLink;
        }
        set ActiveLink(link) {
            this.m_activeLink = link;
        }
        constructor() {
            this.m_activeLink = "";
            this.m_routingTable = [];
        }
        Add(route) {
            this.m_routingTable.push(route);
        }
        AddTable(routingTable) {
            this.m_routingTable = routingTable;
        }
        Find(route) {
            return this.m_routingTable.indexOf(route);
        }
        Remove(route) {
            if (this.Find(route) > -1) {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false;
        }
        toString() {
            return this.m_routingTable.toString();
        }
    }
    core.Router = Router;
})(core || (core = {}));
let router = new core.Router();
router.AddTable([
    "/",
    "/home",
    "/about",
    "/services",
    "/contact",
    "/contact-list",
    "/products",
    "/register",
    "/login",
    "/edit"
]);
let route = location.pathname;
router.ActiveLink = (router.Find(route) > -1) ? (route == "/") ? "home" : route.substring(1) : "404";
(function (location) {
    if (location.search[1] === '/') {
        let decoded = location.search.slice(1).split('&').map(function (s) {
            return s.replace(/~and~/g, '&');
        }).join('?');
        window.history.replaceState(null, "", location.pathname.slice(0, -1) + decoded + location.hash);
    }
}(window.location));
//# sourceMappingURL=router.js.map