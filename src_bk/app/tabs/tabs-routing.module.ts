import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { AuthGuardService } from "../services/authguard/auth-guard.service";
let userlist = JSON.parse(localStorage.getItem("userlist"));
let newRoutes: any;
let router: Router;
const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tab1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../ffb-module/home/home.module").then(
                (m) => m.HomePageModule
              ),
          },
        ],
      },
      {
        path: "tab2",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../history/history.module").then(
                (m) => m.HistoryPageModule
              ),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tab1",
        pathMatch: "full",
      },
    ],
  },
];

const routes_truck: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabdriver1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../gps-module/drivermaps/drivermaps.module").then(
                (m) => m.DrivermapsPageModule
              ),
          },
        ],
      },
      {
        path: "tabdriverhistory1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../history/history.module").then(
                (m) => m.HistoryPageModule
              ),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabdriver1",
        pathMatch: "full",
      },
    ],
  },
];

const routes_security: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabsecurity",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../security-module/securityhome/securityhome.module"
              ).then((m) => m.SecurityhomePageModule),
          },
        ],
      },
      {
        path: "tabdriverhistory1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../security-module/historyhome/historyhome.module").then(
                (m) => m.HistoryhomePageModule
              ),
          },
        ],
      },
      {
        path: "tabchats",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../security-module/securitycommunication/securitycommunication.module"
              ).then((m) => m.SecuritycommunicationPageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabsecurity",
        pathMatch: "full",
      },
    ],
  },
];

const routes_grading: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      // {
      //   path: "tabsgrading",
      //   children: [
      //     {
      //       path: "",
      //       loadChildren: () =>
      //         import("../grading-module/gradinghome/gradinghome.module").then(
      //           (m) => m.GradinghomePageModule
      //         ),
      //     },
      //   ],
      // },
      {
        path: "tabsgrading",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../grading-module/grading-dashboard/grading-dashboard.module"
              ).then((m) => m.GradingDashboardPageModule),
          },
        ],
      },
      {
        path: "tabdriverhistory1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../history/history.module").then(
                (m) => m.HistoryPageModule
              ),
          },
        ],
      },
      {
        path: "tabcommunication",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../grading-module/gradingcommunication/gradingcommunication.module"
              ).then((m) => m.GradingcommunicationPageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabsgrading",
        pathMatch: "full",
      },
    ],
  },
];

const routes_store: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabstore",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../store-module/store-order-home/store-order-home.module"
              ).then((m) => m.StoreOrderHomeModule),
          },
        ],
      },
      {
        path: "tabcommunication",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../store-module/storecommunication/storecommunication.module"
              ).then((m) => m.StorecommunicationPageModule),
          },
        ],
      },
      {
        path: "tabreports",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../store-module/storereports/storereports.module").then(
                (m) => m.StorereportsPageModule
              ),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabstore",
        pathMatch: "full",
      },
    ],
  },
];

const routes_maintenance: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabmaintenancedashboard",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../maintenance-module/dashboard/dashboard.module").then(
                (m) => m.DashboardPageModule
              ),
          },
        ],
      },
      {
        path: "tabmaintenancehome",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../maintenance-module/maintenance-home/maintenance-home.module"
              ).then((m) => m.MaintenanceHomePageModule),
          },
        ],
      },
      {
        path: "tabchecklist",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../maintenance-module/maintenance-checklist/maintenance-checklist.module"
              ).then((m) => m.MaintenanceChecklistPageModule),
          },
        ],
      },
      {
        path: "tabreports",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../maintenance-module/report-home/report-home.module"
              ).then((m) => m.ReportHomePageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabmaintenancedashboard",
        pathMatch: "full",
      },
    ],
  },
];

const routes_foreman: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabforemandashboard",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../maintenance-module/dashboard/dashboard.module").then(
                (m) => m.DashboardPageModule
              ),
          },
        ],
      },
      {
        path: "tabforemanhome",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../maintenance-module/maintenance-home/maintenance-home.module"
              ).then((m) => m.MaintenanceHomePageModule),
          },
        ],
      },
      {
        path: "tabforemanreports",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../maintenance-module/report-home/report-home.module"
              ).then((m) => m.ReportHomePageModule),
          },
        ],
      },
      {
        path: "tabforemanmore",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabforemandashboard",
        pathMatch: "full",
      },
    ],
  },
];

const routes_chargeman: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabchargemandashboard",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../maintenance-module/dashboard/dashboard.module").then(
                (m) => m.DashboardPageModule
              ),
          },
        ],
      },
      {
        path: "tabchargemanhome",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../maintenance-module/maintenance-home/maintenance-home.module"
              ).then((m) => m.MaintenanceHomePageModule),
          },
        ],
      },
      {
        path: "tabchargemanreports",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../maintenance-module/report-home/report-home.module"
              ).then((m) => m.ReportHomePageModule),
          },
        ],
      },
      {
        path: "tabchargemanmore",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabchargemandashboard",
        pathMatch: "full",
      },
    ],
  },
];

const routes_boiler: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabdashboard",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../boiler-module/dashboard/dashboard.module").then(
                (m) => m.DashboardPageModule
              ),
          },
        ],
      },
      {
        path: "tabboiler",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../boiler-module/boiler-log-home/boiler-log-home.module"
              ).then((m) => m.BoilerLogHomePageModule),
          },
        ],
      },
      {
        path: "tabchats",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../boiler-module/communicationreport/communicationreport.module"
              ).then((m) => m.CommunicationreportPageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabdashboard",
        pathMatch: "full",
      },
    ],
  },
];

const routes_supplier: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabsupplier",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../supplier-store-module/home-supplier/home-supplier.module"
              ).then((m) => m.HomeSupplierPageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabsupplier",
        pathMatch: "full",
      },
    ],
  },
];

const routes_Production: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabsupervisordashboard",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../supervisor-module/supervisor-dashboard/supervisor-dashboard.module"
              ).then((m) => m.SupervisorDashboardPageModule),
          },
        ],
      },
      {
        path: "tabsupervisior",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../supervisor-module/supervisor-home/supervisor-home.module"
              ).then((m) => m.SupervisorHomePageModule),
          },
        ],
      },
      {
        path: "tabchecklist",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../supervisor-module/supervisor-checklist/supervisor-checklist.module"
              ).then((m) => m.SupervisorChecklistPageModule),
          },
        ],
      },
      {
        path: "tabchats",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../supervisor-module/communication/communication.module"
              ).then((m) => m.CommunicationPageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabsupervisordashboard",
        pathMatch: "full",
      },
    ],
  },
];

const routes_CEO: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabceo",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              //import("../ceo-module/ceodashboard/ceodashboard.module").then((m) => m.CeodashboardPageModule),
              import("../ceo-module/ceohome/ceohome.module").then(
                (m) => m.CeohomePageModule
              ),
          },
        ],
      },
      {
        path: "tabchats",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../ceo-module/chathome/chathome.module").then(
                (m) => m.ChathomePageModule
              ),
          },
        ],
      },
      {
        path: "tabreports",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../ceo-module/hourly-reports-home/hourly-reports-home.module"
              ).then((m) => m.HourlyReportsHomePageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabceo",
        pathMatch: "full",
      },
    ],
  },
];

const routes_Manager: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabmanagerdashboard",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../manager-module/manager-dashboard/manager-dashboard.module"
              ).then((m) => m.ManagerDashboardPageModule),
          },
        ],
      },
      {
        path: "tabhome",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import("../manager-module/home/home.module").then(
                (m) => m.HomePageModule
              ),
          },
        ],
      },
      {
        path: "tabchats",
        children: [
          {
            path: "",
            loadChildren: () =>
              import(
                "../manager-module/communicationhome/communicationhome.module"
              ).then((m) => m.CommunicationhomePageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabmanagerdashboard",
        pathMatch: "full",
      },
    ],
  },
];

const routes_Engineer: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabengineerdashboard",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../engineer-module/engineer-dashboard/engineer-dashboard.module"
              ).then((m) => m.EngineerDashboardPageModule),
          },
        ],
      },
      {
        path: "tabhome",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../engineer-module/engineerhome/engineerhome.module"
              ).then((m) => m.EngineerhomePageModule),
          },
        ],
      },
      {
        path: "tabreports",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../engineer-module/reports/reports.module").then(
                (m) => m.ReportsPageModule
              ),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabengineerdashboard",
        pathMatch: "full",
      },
    ],
  },
];

const routes_laboratory: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tablaboratorydashboard",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../laboratory-module/laboratory-dashboard/laboratory-dashboard.module"
              ).then((m) => m.LaboratoryDashboardPageModule),
          },
        ],
      },
      {
        path: "tablabhome",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import("../laboratory-module/home/home.module").then(
                (m) => m.HomePageModule
              ),
          },
        ],
      },
      {
        path: "tabchats",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../laboratory-module/communication/communication.module"
              ).then((m) => m.CommunicationPageModule),
          },
        ],
      },
      {
        path: "tabreports",
        children: [
          {
            path: "",
            // tslint:disable-next-line: max-line-length
            loadChildren: () =>
              import(
                "../laboratory-module/laboratory-reporthome/laboratory-reporthome.module"
              ).then((m) => m.LaboratoryReporthomePageModule),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tablaboratorydashboard",
        pathMatch: "full",
      },
    ],
  },
];

const routes_estatemanager: Routes = [
  {
    path: "",
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "tabemhome",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../estatemanager-module/home/home.module").then(
                (m) => m.HomePageModule
              ),
          },
        ],
      },
      {
        path: "tabrecords",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../estatemanager-module/records/records.module").then(
                (m) => m.RecordsPageModule
              ),
          },
        ],
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../more/more.module").then((m) => m.MorePageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tabemhome",
        pathMatch: "full",
      },
    ],
  },
];

//console.log(userlist);

if (userlist) {
  if (userlist.department) {
    if (userlist.department == "Ffbsupplier") {
      newRoutes = routes;
    } else if (userlist.department == "Driver") {
      newRoutes = routes_truck;
    } else if (userlist.department == "Security") {
      newRoutes = routes_security;
    } else if (userlist.department == "Grading") {
      newRoutes = routes_grading;
    } else if (userlist.department == "Procurement") {
      newRoutes = routes_store;
    } else if (userlist.department == "Maintenance") {
      newRoutes = routes_maintenance;
    } else if (userlist.department == "Foreman") {
      newRoutes = routes_foreman;
    } else if (userlist.department == "Charge Man") {
      newRoutes = routes_chargeman;
    } else if (userlist.department == "Boiler") {
      newRoutes = routes_boiler;
    } else if (userlist.department == "Supplier") {
      newRoutes = routes_supplier;
    } else if (userlist.department == "Production") {
      newRoutes = routes_Production;
    } else if (
      userlist.department == "CEO" ||
      userlist.department == "Visiting Consultant" ||
      userlist.department == "Manager"
    ) {
      newRoutes = routes_CEO;
    } /*else if (userlist.department == "Manager") {
      newRoutes = routes_Manager;
    }*/ else if (
      userlist.department == "Engineer"
    ) {
      newRoutes = routes_Engineer;
    } else if (userlist.department == "Laboratory") {
      newRoutes = routes_laboratory;
    } else if (userlist.department == "Estate Manager") {
      newRoutes = routes_estatemanager;
    } else {
      localStorage.clear();
      router.navigateByUrl("/login");
    }
  } else {
    localStorage.clear();
    router.navigateByUrl("/login");
  }
} else {
  newRoutes = routes;
}

//console.log(newRoutes);

//  = routes.concat(routes_truck);

@NgModule({
  imports: [RouterModule.forChild(newRoutes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
