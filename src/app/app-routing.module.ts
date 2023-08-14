import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./services/authguard/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "tabs",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "about",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./about/about.module").then((m) => m.AboutPageModule),
  },
  {
    path: "home",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./ffb-module/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "tabs",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "notification",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./notification/notification.module").then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: "profile",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./ffb-module/profile/profile.module").then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: "ffbdispatch",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./ffb-module/ffbdispatch/ffbdispatch.module").then(
        (m) => m.FfbdispatchPageModule
      ),
  },
  {
    path: "viewdestination",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./ffb-module/viewdestination/viewdestination.module").then(
        (m) => m.ViewdestinationPageModule
      ),
  },
  {
    path: "drivermaps",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./gps-module/drivermaps/drivermaps.module").then(
        (m) => m.DrivermapsPageModule
      ),
  },
  {
    path: "history",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./history/history.module").then((m) => m.HistoryPageModule),
  },
  {
    path: "more",
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import("./more/more.module").then((m) => m.MorePageModule),
  },
  {
    path: "securityhome",
    loadChildren: () =>
      import("./security-module/securityhome/securityhome.module").then(
        (m) => m.SecurityhomePageModule
      ),
  },
  {
    path: "ffbform",
    loadChildren: () =>
      import("./security-module/ffbform/ffbform.module").then(
        (m) => m.FfbformPageModule
      ),
  },
  {
    path: "cpoform",
    loadChildren: () =>
      import("./security-module/cpoform/cpoform.module").then(
        (m) => m.CpoformPageModule
      ),
  },
  {
    path: "pkform",
    loadChildren: () =>
      import("./security-module/pkform/pkform.module").then(
        (m) => m.PkformPageModule
      ),
  },
  {
    path: "gradinghome",
    loadChildren: () =>
      import("./grading-module/gradinghome/gradinghome.module").then(
        (m) => m.GradinghomePageModule
      ),
  },
  {
    path: "list",
    loadChildren: () =>
      import("./list/list.module").then((m) => m.ListPageModule),
  },
  {
    path: "mapview",
    loadChildren: () =>
      import("./gps-module/mapview/mapview.module").then(
        (m) => m.MapviewPageModule
      ),
  },
  {
    path: "gradingform",
    loadChildren: () =>
      import("./grading-module/grading-form/grading-form.module").then(
        (m) => m.GradingFormModule
      ),
  },
  {
    path: "storeorder",
    loadChildren: () =>
      import(
        "./store-module/store-order-request/store-order-request.module"
      ).then((m) => m.StoreOrderRequestModule),
  },
  {
    path: "store-order-detail",
    loadChildren: () =>
      import(
        "./store-module/store-order-detail/store-order-detail.module"
      ).then((m) => m.StoreOrderDetailPageModule),
  },
  {
    path: "detail-trans",
    loadChildren: () =>
      import("./detail-trans/detail-trans.module").then(
        (m) => m.DetailTransPageModule
      ),
  },
  {
    path: "contacts",
    loadChildren: () =>
      import("./component/miniapps/contacts/contacts.module").then(
        (m) => m.ContactsPageModule
      ),
  },
  {
    path: "boiler-log",
    loadChildren: () =>
      import("./boiler-module/boiler-log/boiler-log.module").then(
        (m) => m.BoilerLogPageModule
      ),
  },
  {
    path: "boiler-insert",
    loadChildren: () =>
      import("./boiler-module/boiler-insert/boiler-insert.module").then(
        (m) => m.BoilerInsertPageModule
      ),
  },
  {
    path: "home-supplier",
    loadChildren: () =>
      import("./supplier-store-module/home-supplier/home-supplier.module").then(
        (m) => m.HomeSupplierPageModule
      ),
  },
  {
    path: "supplier-update",
    loadChildren: () =>
      import(
        "./supplier-store-module/supplier-update/supplier-update.module"
      ).then((m) => m.SupplierUpdatePageModule),
  },
  {
    path: "supervisor-home",
    loadChildren: () =>
      import("./supervisor-module/supervisor-home/supervisor-home.module").then(
        (m) => m.SupervisorHomePageModule
      ),
  },
  {
    path: "attendance",
    loadChildren: () =>
      import("./supervisor-module/attendance/attendance.module").then(
        (m) => m.AttendancePageModule
      ),
  },
  {
    path: "sop-compliance",
    loadChildren: () =>
      import("./supervisor-module/sop-compliance/sop-compliance.module").then(
        (m) => m.SopCompliancePageModule
      ),
  },
  {
    path: "hourly-reporting",
    loadChildren: () =>
      import(
        "./supervisor-module/hourly-reporting/hourly-reporting.module"
      ).then((m) => m.HourlyReportingPageModule),
  },
  {
    path: "communication",
    loadChildren: () =>
      import("./supervisor-module/communication/communication.module").then(
        (m) => m.CommunicationPageModule
      ),
  },
  {
    path: "comments",
    loadChildren: () =>
      import("./supervisor-module/comments/comments.module").then(
        (m) => m.CommentsPageModule
      ),
  },
  {
    path: "leaveform",
    loadChildren: () =>
      import("./supervisor-module/leaveform/leaveform.module").then(
        (m) => m.LeaveformPageModule
      ),
  },
  {
    path: "weekly-maintenance",
    loadChildren: () =>
      import(
        "./store-module/weekly-maintenance/weekly-maintenance.module"
      ).then((m) => m.WeeklyMaintenancePageModule),
  },
  {
    path: "maintenance-home",
    loadChildren: () =>
      import("./store-module/maintenance-home/maintenance-home.module").then(
        (m) => m.MaintenanceHomePageModule
      ),
  },
  {
    path: "maintenance",
    loadChildren: () =>
      import("./store-module/maintenance/maintenance.module").then(
        (m) => m.MaintenancePageModule
      ),
  },
  {
    path: "weekly-maintenance-list",
    loadChildren: () =>
      import(
        "./store-module/weekly-maintenance-list/weekly-maintenance-list.module"
      ).then((m) => m.WeeklyMaintenanceListPageModule),
  },
  {
    path: "weekly-maintenance-view",
    loadChildren: () =>
      import(
        "./store-module/weekly-maintenance-view/weekly-maintenance-view.module"
      ).then((m) => m.WeeklyMaintenanceViewPageModule),
  },
  {
    path: "weekly-maintenance-edit",
    loadChildren: () =>
      import(
        "./store-module/weekly-maintenance-edit/weekly-maintenance-edit.module"
      ).then((m) => m.WeeklyMaintenanceEditPageModule),
  },
  {
    path: "greasing-list",
    loadChildren: () =>
      import("./store-module/greasing-list/greasing-list.module").then(
        (m) => m.GreasingListPageModule
      ),
  },
  {
    path: "lubricant-list",
    loadChildren: () =>
      import("./store-module/lubricant-list/lubricant-list.module").then(
        (m) => m.LubricantListPageModule
      ),
  },
  {
    path: "greasing-add",
    loadChildren: () =>
      import("./store-module/greasing-add/greasing-add.module").then(
        (m) => m.GreasingAddPageModule
      ),
  },
  {
    path: "lubricant-add",
    loadChildren: () =>
      import("./store-module/lubricant-add/lubricant-add.module").then(
        (m) => m.LubricantAddPageModule
      ),
  },
  {
    path: "shutdownmaintenance-list",
    loadChildren: () =>
      import(
        "./store-module/shutdownmaintenance-list/shutdownmaintenance-list.module"
      ).then((m) => m.ShutdownmaintenanceListPageModule),
  },
  {
    path: "shutdownmaintenance-add",
    loadChildren: () =>
      import(
        "./store-module/shutdownmaintenance-add/shutdownmaintenance-add.module"
      ).then((m) => m.ShutdownmaintenanceAddPageModule),
  },
  {
    path: "maintenance-order-details",
    loadChildren: () =>
      import(
        "./store-module/maintenance-order-details/maintenance-order-details.module"
      ).then((m) => m.MaintenanceOrderDetailsPageModule),
  },
  {
    path: "greasing-view",
    loadChildren: () =>
      import("./store-module/greasing-view/greasing-view.module").then(
        (m) => m.GreasingViewPageModule
      ),
  },
  {
    path: "greasing-edit",
    loadChildren: () =>
      import("./store-module/greasing-edit/greasing-edit.module").then(
        (m) => m.GreasingEditPageModule
      ),
  },
  {
    path: "lubricant-view",
    loadChildren: () =>
      import("./store-module/lubricant-view/lubricant-view.module").then(
        (m) => m.LubricantViewPageModule
      ),
  },
  {
    path: "lubricant-edit",
    loadChildren: () =>
      import("./store-module/lubricant-edit/lubricant-edit.module").then(
        (m) => m.LubricantEditPageModule
      ),
  },
  {
    path: "shutdownmaintenance-view",
    loadChildren: () =>
      import(
        "./store-module/shutdownmaintenance-view/shutdownmaintenance-view.module"
      ).then((m) => m.ShutdownmaintenanceViewPageModule),
  },
  {
    path: "shutdownmaintenance-edit",
    loadChildren: () =>
      import(
        "./store-module/shutdownmaintenance-edit/shutdownmaintenance-edit.module"
      ).then((m) => m.ShutdownmaintenanceEditPageModule),
  },
  {
    path: "forgotpassword",
    loadChildren: () =>
      import("./forgot-password/forgotpassword/forgotpassword.module").then(
        (m) => m.ForgotpasswordPageModule
      ),
  },
  {
    path: "notificationweekly",
    loadChildren: () =>
      import("./notificationweekly/notificationweekly.module").then(
        (m) => m.NotificationweeklyPageModule
      ),
  },
  {
    path: "ceohome",
    loadChildren: () =>
      import("./ceo-module/ceohome/ceohome.module").then(
        (m) => m.CeohomePageModule
      ),
  },
  {
    path: "ceoreports",
    loadChildren: () =>
      import("./ceo-module/ceoreports/ceoreports.module").then(
        (m) => m.CeoreportsPageModule
      ),
  },
  {
    path: "dailypl",
    loadChildren: () =>
      import("./ceo-module/dailyplreport/dailypl.module").then(
        (m) => m.DailyplPageModule
      ),
  },
  {
    path: "productionreport",
    loadChildren: () =>
      import("./ceo-module/productionreport/productionreport.module").then(
        (m) => m.ProductionreportPageModule
      ),
  },
  {
    path: "cashflowreport",
    loadChildren: () =>
      import("./ceo-module/cashflowreport/cashflowreport.module").then(
        (m) => m.CashflowreportPageModule
      ),
  },
  {
    path: "ffbcreditorsreport",
    loadChildren: () =>
      import("./ceo-module/ffbcreditorsreport/ffbcreditorsreport.module").then(
        (m) => m.FfbcreditorsreportPageModule
      ),
  },
  {
    path: "dailystockreport",
    loadChildren: () =>
      import("./ceo-module/dailystockreport/dailystockreport.module").then(
        (m) => m.DailystockreportPageModule
      ),
  },
  {
    path: "sorreport",
    loadChildren: () =>
      import("./ceo-module/sorreport/sorreport.module").then(
        (m) => m.SorreportPageModule
      ),
  },
  {
    path: "preventivemaintenance",
    loadChildren: () =>
      import(
        "./store-module/preventivemaintenance/preventivemaintenance.module"
      ).then((m) => m.PreventivemaintenancePageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./manager-module/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "ffblist",
    loadChildren: () =>
      import("./manager-module/ffblist/ffblist.module").then(
        (m) => m.FfblistPageModule
      ),
  },
  {
    path: "cashflowstatementreport",
    loadChildren: () =>
      import(
        "./ceo-module/cashflowstatementreport/cashflowstatementreport.module"
      ).then((m) => m.CashflowstatementreportPageModule),
  },
  {
    path: "report",
    loadChildren: () =>
      import("./supervisor-module/report/report.module").then(
        (m) => m.ReportPageModule
      ),
  },
  {
    path: "maintenancereport",
    loadChildren: () =>
      import("./store-module/maintenancereport/maintenancereport.module").then(
        (m) => m.MaintenancereportPageModule
      ),
  },
  {
    path: "sustainchecklist",
    loadChildren: () =>
      import("./ceo-module/sustainchecklist/sustainchecklist.module").then(
        (m) => m.SustainchecklistPageModule
      ),
  },
  {
    path: "abcdreport",
    loadChildren: () =>
      import("./ceo-module/abcdreport/abcdreport.module").then(
        (m) => m.AbcdreportPageModule
      ),
  },
  {
    path: "ffbdebitorreport",
    loadChildren: () =>
      import("./ceo-module/ffbdebitorreport/ffbdebitorreport.module").then(
        (m) => m.FfbdebitorreportPageModule
      ),
  },
  {
    path: "millreport",
    loadChildren: () =>
      import("./ceo-module/millreport/millreport.module").then(
        (m) => m.MillreportPageModule
      ),
  },
  {
    path: "budgetcomparereport",
    loadChildren: () =>
      import(
        "./ceo-module/budgetcomparereport/budgetcomparereport.module"
      ).then((m) => m.BudgetcomparereportPageModule),
  },
  {
    path: "purchasereport",
    loadChildren: () =>
      import("./ceo-module/purchasereport/purchasereport.module").then(
        (m) => m.PurchasereportPageModule
      ),
  },
  {
    path: "mmslogreport",
    loadChildren: () =>
      import("./ceo-module/mmslogreport/mmslogreport.module").then(
        (m) => m.MmslogreportPageModule
      ),
  },
  {
    path: "directorreport",
    loadChildren: () =>
      import("./ceo-module/directorreport/directorreport.module").then(
        (m) => m.DirectorreportPageModule
      ),
  },
  {
    path: "issuereport",
    loadChildren: () =>
      import("./ceo-module/issuereport/issuereport.module").then(
        (m) => m.IssuereportPageModule
      ),
  },
  {
    path: "costofproductionreport",
    loadChildren: () =>
      import(
        "./ceo-module/costofproductionreport/costofproductionreport.module"
      ).then((m) => m.CostofproductionreportPageModule),
  },
  {
    path: "ceomaintenancereport",
    loadChildren: () =>
      import(
        "./ceo-module/ceomaintenancereport/ceomaintenancereport.module"
      ).then((m) => m.CeomaintenancereportPageModule),
  },
  {
    path: "purchasemonthlyreport",
    loadChildren: () =>
      import(
        "./ceo-module/purchasemonthlyreport/purchasemonthlyreport.module"
      ).then((m) => m.PurchasemonthlyreportPageModule),
  },
  {
    path: "traceabilityreport",
    loadChildren: () =>
      import("./ceo-module/traceabilityreport/traceabilityreport.module").then(
        (m) => m.TraceabilityreportPageModule
      ),
  },
  {
    path: "compliancereport",
    loadChildren: () =>
      import("./ceo-module/compliancereport/compliancereport.module").then(
        (m) => m.CompliancereportPageModule
      ),
  },
  {
    path: "healthreport",
    loadChildren: () =>
      import("./ceo-module/healthreport/healthreport.module").then(
        (m) => m.HealthreportPageModule
      ),
  },
  {
    path: "dailystockissue",
    loadChildren: () =>
      import("./ceo-module/dailystockissue/dailystockissue.module").then(
        (m) => m.DailystockissuePageModule
      ),
  },
  {
    path: "reporthome",
    loadChildren: () =>
      import("./supervisor-module/reporthome/reporthome.module").then(
        (m) => m.ReporthomePageModule
      ),
  },
  {
    path: "report-hourlyreporting",
    loadChildren: () =>
      import(
        "./supervisor-module/report-hourlyreporting/report-hourlyreporting.module"
      ).then((m) => m.ReportHourlyreportingPageModule),
  },
  {
    path: "report-sopcompliance",
    loadChildren: () =>
      import(
        "./supervisor-module/report-sopcompliance/report-sopcompliance.module"
      ).then((m) => m.ReportSopcompliancePageModule),
  },
  {
    path: "maintenancecommunication",
    loadChildren: () =>
      import(
        "./store-module/maintenancecommunication/maintenancecommunication.module"
      ).then((m) => m.MaintenancecommunicationPageModule),
  },
  {
    path: "storecommunication",
    loadChildren: () =>
      import(
        "./store-module/storecommunication/storecommunication.module"
      ).then((m) => m.StorecommunicationPageModule),
  },
  {
    path: "storecommunication-put",
    loadChildren: () =>
      import(
        "./store-module/storecommunication-put/storecommunication-put.module"
      ).then((m) => m.StorecommunicationPutPageModule),
  },
  {
    path: "storecommunication-show",
    loadChildren: () =>
      import(
        "./store-module/storecommunication-show/storecommunication-show.module"
      ).then((m) => m.StorecommunicationShowPageModule),
  },
  {
    path: "securitycommunication",
    loadChildren: () =>
      import(
        "./security-module/securitycommunication/securitycommunication.module"
      ).then((m) => m.SecuritycommunicationPageModule),
  },
  {
    path: "securitycommunication-put",
    loadChildren: () =>
      import(
        "./security-module/securitycommunication-put/securitycommunication-put.module"
      ).then((m) => m.SecuritycommunicationPutPageModule),
  },
  {
    path: "securitycommunication-show",
    loadChildren: () =>
      import(
        "./security-module/securitycommunication-show/securitycommunication-show.module"
      ).then((m) => m.SecuritycommunicationShowPageModule),
  },
  {
    path: "boilercommunication-put",
    loadChildren: () =>
      import(
        "./boiler-module/boilercommunication-put/boilercommunication-put.module"
      ).then((m) => m.BoilercommunicationPutPageModule),
  },
  {
    path: "boilercommunication-show",
    loadChildren: () =>
      import(
        "./boiler-module/boilercommunication-show/boilercommunication-show.module"
      ).then((m) => m.BoilercommunicationShowPageModule),
  },
  {
    path: "engineerhome",
    loadChildren: () =>
      import("./engineer-module/engineerhome/engineerhome.module").then(
        (m) => m.EngineerhomePageModule
      ),
  },
  {
    path: "engineercommunication",
    loadChildren: () =>
      import(
        "./engineer-module/engineercommunication/engineercommunication.module"
      ).then((m) => m.EngineercommunicationPageModule),
  },
  {
    path: "engineercommunication-show",
    loadChildren: () =>
      import(
        "./engineer-module/engineercommunication-show/engineercommunication-show.module"
      ).then((m) => m.EngineercommunicationShowPageModule),
  },
  {
    path: "engineerproductionreport",
    loadChildren: () =>
      import(
        "./engineer-module/engineerproductionreport/engineerproductionreport.module"
      ).then((m) => m.EngineerproductionreportPageModule),
  },
  {
    path: "engineermaintenancereport",
    loadChildren: () =>
      import(
        "./engineer-module/engineermaintenancereport/engineermaintenancereport.module"
      ).then((m) => m.EngineermaintenancereportPageModule),
  },
  {
    path: "managerproductionreport",
    loadChildren: () =>
      import(
        "./manager-module/managerproductionreport/managerproductionreport.module"
      ).then((m) => m.ManagerproductionreportPageModule),
  },
  {
    path: "managermaintenancereport",
    loadChildren: () =>
      import(
        "./manager-module/managermaintenancereport/managermaintenancereport.module"
      ).then((m) => m.ManagermaintenancereportPageModule),
  },
  {
    path: "maintenancecommunicationreport",
    loadChildren: () =>
      import(
        "./store-module/maintenancecommunicationreport/maintenancecommunicationreport.module"
      ).then((m) => m.MaintenancecommunicationreportPageModule),
  },
  {
    path: "supervisorreport",
    loadChildren: () =>
      import("./ceo-module/supervisorreport/supervisorreport.module").then(
        (m) => m.SupervisorreportPageModule
      ),
  },
  {
    path: "supervisormillreport",
    loadChildren: () =>
      import(
        "./ceo-module/supervisormillreport/supervisormillreport.module"
      ).then((m) => m.SupervisormillreportPageModule),
  },
  {
    path: "supervisorproductionreport",
    loadChildren: () =>
      import(
        "./ceo-module/supervisorproductionreport/supervisorproductionreport.module"
      ).then((m) => m.SupervisorproductionreportPageModule),
  },
  {
    path: "sorhistory",
    loadChildren: () =>
      import("./supervisor-module/sorhistory/sorhistory.module").then(
        (m) => m.SorhistoryPageModule
      ),
  },
  {
    path: "engineersorhistory",
    loadChildren: () =>
      import(
        "./engineer-module/engineersorhistory/engineersorhistory.module"
      ).then((m) => m.EngineersorhistoryPageModule),
  },
  {
    path: "boilerview",
    loadChildren: () =>
      import("./boiler-module/boilerview/boilerview.module").then(
        (m) => m.BoilerviewPageModule
      ),
  },
  {
    path: "ceosorhistory",
    loadChildren: () =>
      import("./ceo-module/ceosorhistory/ceosorhistory.module").then(
        (m) => m.CeosorhistoryPageModule
      ),
  },
  {
    path: "orderreqlist",
    loadChildren: () =>
      import("./boiler-module/orderreqlist/orderreqlist.module").then(
        (m) => m.OrderreqlistPageModule
      ),
  },
  {
    path: "orderreq-add",
    loadChildren: () =>
      import("./boiler-module/orderreq-add/orderreq-add.module").then(
        (m) => m.OrderreqAddPageModule
      ),
  },
  {
    path: "orderreq-detail",
    loadChildren: () =>
      import("./boiler-module/orderreq-detail/orderreq-detail.module").then(
        (m) => m.OrderreqDetailPageModule
      ),
  },
  {
    path: "managerorderreqlist",
    loadChildren: () =>
      import(
        "./manager-module/managerorderreqlist/managerorderreqlist.module"
      ).then((m) => m.ManagerorderreqlistPageModule),
  },
  {
    path: "managerorderreq-add",
    loadChildren: () =>
      import(
        "./manager-module/managerorderreq-add/managerorderreq-add.module"
      ).then((m) => m.ManagerorderreqAddPageModule),
  },
  {
    path: "managerorderreq-detail",
    loadChildren: () =>
      import(
        "./manager-module/managerorderreq-detail/managerorderreq-detail.module"
      ).then((m) => m.ManagerorderreqDetailPageModule),
  },
  {
    path: "engineerorderreqlist",
    loadChildren: () =>
      import(
        "./engineer-module/engineerorderreqlist/engineerorderreqlist.module"
      ).then((m) => m.EngineerorderreqlistPageModule),
  },
  {
    path: "engineerorderreq-add",
    loadChildren: () =>
      import(
        "./engineer-module/engineerorderreq-add/engineerorderreq-add.module"
      ).then((m) => m.EngineerorderreqAddPageModule),
  },
  {
    path: "engineerorderreq-detail",
    loadChildren: () =>
      import(
        "./engineer-module/engineerorderreq-detail/engineerorderreq-detail.module"
      ).then((m) => m.EngineerorderreqDetailPageModule),
  },
  {
    path: "securityrounds",
    loadChildren: () =>
      import("./security-module/securityrounds/securityrounds.module").then(
        (m) => m.SecurityroundsPageModule
      ),
  },
  {
    path: "gradingcommunication",
    loadChildren: () =>
      import(
        "./grading-module/gradingcommunication/gradingcommunication.module"
      ).then((m) => m.GradingcommunicationPageModule),
  },
  {
    path: "gradingcommunication-put",
    loadChildren: () =>
      import(
        "./grading-module/gradingcommunication-put/gradingcommunication-put.module"
      ).then((m) => m.GradingcommunicationPutPageModule),
  },
  {
    path: "gradingcommunication-show",
    loadChildren: () =>
      import(
        "./grading-module/gradingcommunication-show/gradingcommunication-show.module"
      ).then((m) => m.GradingcommunicationShowPageModule),
  },
  {
    path: "historyhome",
    loadChildren: () =>
      import("./security-module/historyhome/historyhome.module").then(
        (m) => m.HistoryhomePageModule
      ),
  },
  {
    path: "overallhistory",
    loadChildren: () =>
      import("./security-module/overallhistory/overallhistory.module").then(
        (m) => m.OverallhistoryPageModule
      ),
  },
  {
    path: "securityroundshistory",
    loadChildren: () =>
      import(
        "./security-module/securityroundshistory/securityroundshistory.module"
      ).then((m) => m.SecurityroundshistoryPageModule),
  },
  {
    path: "managerproductioncomments",
    loadChildren: () =>
      import(
        "./manager-module/managerproductioncomments/managerproductioncomments.module"
      ).then((m) => m.ManagerproductioncommentsPageModule),
  },
  {
    path: "managermaintenancecomments",
    loadChildren: () =>
      import(
        "./manager-module/managermaintenancecomments/managermaintenancecomments.module"
      ).then((m) => m.ManagermaintenancecommentsPageModule),
  },
  {
    path: "engineermaintenancecomments",
    loadChildren: () =>
      import(
        "./engineer-module/engineermaintenancecomments/engineermaintenancecomments.module"
      ).then((m) => m.EngineermaintenancecommentsPageModule),
  },
  {
    path: "engineerproductioncomments",
    loadChildren: () =>
      import(
        "./engineer-module/engineerproductioncomments/engineerproductioncomments.module"
      ).then((m) => m.EngineerproductioncommentsPageModule),
  },
  {
    path: "ceosupervisorproductioncomments",
    loadChildren: () =>
      import(
        "./ceo-module/ceosupervisorproductioncomments/ceosupervisorproductioncomments.module"
      ).then((m) => m.CeosupervisorproductioncommentsPageModule),
  },
  {
    path: "ceosupervisormillcomments",
    loadChildren: () =>
      import(
        "./ceo-module/ceosupervisormillcomments/ceosupervisormillcomments.module"
      ).then((m) => m.CeosupervisormillcommentsPageModule),
  },
  {
    path: "supervisororder-request",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisororder-request/supervisororder-request.module"
      ).then((m) => m.SupervisororderRequestPageModule),
  },
  {
    path: "supervisororderrequest-list",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisororderrequest-list/supervisororderrequest-list.module"
      ).then((m) => m.SupervisororderrequestListPageModule),
  },
  {
    path: "supervisororderrequest-detail",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisororderrequest-detail/supervisororderrequest-detail.module"
      ).then((m) => m.SupervisororderrequestDetailPageModule),
  },
  {
    path: "machinerunninghour",
    loadChildren: () =>
      import(
        "./store-module/machinerunninghour/machinerunninghour.module"
      ).then((m) => m.MachinerunninghourPageModule),
  },
  {
    path: "reports",
    loadChildren: () =>
      import("./store-module/reports/reports.module").then(
        (m) => m.ReportsPageModule
      ),
  },
  {
    path: "weeklymaintenance-report",
    loadChildren: () =>
      import(
        "./store-module/weeklymaintenance-report/weeklymaintenance-report.module"
      ).then((m) => m.WeeklymaintenanceReportPageModule),
  },
  {
    path: "shutdownmaintenance-report",
    loadChildren: () =>
      import(
        "./store-module/shutdownmaintenance-report/shutdownmaintenance-report.module"
      ).then((m) => m.ShutdownmaintenanceReportPageModule),
  },
  {
    path: "orderrequestitemhistory-report",
    loadChildren: () =>
      import(
        "./store-module/orderrequestitemhistory-report/orderrequestitemhistory-report.module"
      ).then((m) => m.OrderrequestitemhistoryReportPageModule),
  },
  {
    path: "driver-detail",
    loadChildren: () =>
      import("./gps-module/driver-detail/driver-detail.module").then(
        (m) => m.DriverDetailPageModule
      ),
  },
  {
    path: "kpireport",
    loadChildren: () =>
      import("./ceo-module/kpireport/kpireport.module").then(
        (m) => m.KpireportPageModule
      ),
  },
  {
    path: "boilerlogreport",
    loadChildren: () =>
      import("./ceo-module/boilerlogreport/boilerlogreport.module").then(
        (m) => m.BoilerlogreportPageModule
      ),
  },
  {
    path: "securityroundsreport",
    loadChildren: () =>
      import(
        "./ceo-module/securityroundsreport/securityroundsreport.module"
      ).then((m) => m.SecurityroundsreportPageModule),
  },
  {
    path: "livetrackingreport",
    loadChildren: () =>
      import("./ceo-module/livetrackingreport/livetrackingreport.module").then(
        (m) => m.LivetrackingreportPageModule
      ),
  },
  {
    path: "communicationreport",
    loadChildren: () =>
      import(
        "./supervisor-module/communicationreport/communicationreport.module"
      ).then((m) => m.CommunicationreportPageModule),
  },
  {
    path: "attendancereport",
    loadChildren: () =>
      import(
        "./supervisor-module/attendancereport/attendancereport.module"
      ).then((m) => m.AttendancereportPageModule),
  },
  {
    path: "attendancereport",
    loadChildren: () =>
      import("./manager-module/attendancereport/attendancereport.module").then(
        (m) => m.AttendancereportPageModule
      ),
  },
  {
    path: "communicationreport",
    loadChildren: () =>
      import(
        "./manager-module/communicationreport/communicationreport.module"
      ).then((m) => m.CommunicationreportPageModule),
  },
  {
    path: "communication",
    loadChildren: () =>
      import("./store-module/communication/communication.module").then(
        (m) => m.CommunicationPageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./laboratory-module/home/home.module").then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: "communication",
    loadChildren: () =>
      import("./laboratory-module/communication/communication.module").then(
        (m) => m.CommunicationPageModule
      ),
  },
  {
    path: "communicationreport",
    loadChildren: () =>
      import(
        "./laboratory-module/communicationreport/communicationreport.module"
      ).then((m) => m.CommunicationreportPageModule),
  },
  {
    path: "reports",
    loadChildren: () =>
      import("./engineer-module/reports/reports.module").then(
        (m) => m.ReportsPageModule
      ),
  },
  {
    path: "compliance",
    loadChildren: () =>
      import("./engineer-module/compliance/compliance.module").then(
        (m) => m.CompliancePageModule
      ),
  },
  {
    path: "compliance",
    loadChildren: () =>
      import("./manager-module/compliance/compliance.module").then(
        (m) => m.CompliancePageModule
      ),
  },
  {
    path: "weekly-maintenance-action",
    loadChildren: () =>
      import(
        "./store-module/weekly-maintenance-action/weekly-maintenance-action.module"
      ).then((m) => m.WeeklyMaintenanceActionPageModule),
  },
  {
    path: "shutdownmaintenance-action",
    loadChildren: () =>
      import(
        "./store-module/shutdownmaintenance-action/shutdownmaintenance-action.module"
      ).then((m) => m.ShutdownmaintenanceActionPageModule),
  },
  {
    path: "productiontimelinehome",
    loadChildren: () =>
      import(
        "./ceo-module/productiontimelinehome/productiontimelinehome.module"
      ).then((m) => m.ProductiontimelinehomePageModule),
  },
  {
    path: "ceocommunication",
    loadChildren: () =>
      import("./ceo-module/ceocommunication/ceocommunication.module").then(
        (m) => m.CeocommunicationPageModule
      ),
  },
  {
    path: "quoteapproval",
    loadChildren: () =>
      import("./ceo-module/quoteapproval/quoteapproval.module").then(
        (m) => m.QuoteapprovalPageModule
      ),
  },
  {
    path: "quoteapproval",
    loadChildren: () =>
      import("./manager-module/quoteapproval/quoteapproval.module").then(
        (m) => m.QuoteapprovalPageModule
      ),
  },
  {
    path: "storestatusupdate",
    loadChildren: () =>
      import("./store-module/storestatusupdate/storestatusupdate.module").then(
        (m) => m.StorestatusupdatePageModule
      ),
  },
  {
    path: "sorengineerapproval",
    loadChildren: () =>
      import(
        "./engineer-module/sorengineerapproval/sorengineerapproval.module"
      ).then((m) => m.SorengineerapprovalPageModule),
  },
  {
    path: "profitandloss",
    loadChildren: () =>
      import("./ceo-module/profitandloss/profitandloss.module").then(
        (m) => m.ProfitandlossPageModule
      ),
  },
  {
    path: "balancesheet",
    loadChildren: () =>
      import("./ceo-module/balancesheet/balancesheet.module").then(
        (m) => m.BalancesheetPageModule
      ),
  },
  {
    path: "productiontallreport",
    loadChildren: () =>
      import(
        "./ceo-module/productiontallreport/productiontallreport.module"
      ).then((m) => m.ProductiontallreportPageModule),
  },
  {
    path: "debtorsaccountreport",
    loadChildren: () =>
      import(
        "./ceo-module/debtorsaccountreport/debtorsaccountreport.module"
      ).then((m) => m.DebtorsaccountreportPageModule),
  },
  {
    path: "directcostreport",
    loadChildren: () =>
      import("./ceo-module/directcostreport/directcostreport.module").then(
        (m) => m.DirectcostreportPageModule
      ),
  },
  {
    path: "monthlyffbcreditorsreport",
    loadChildren: () =>
      import(
        "./ceo-module/monthlyffbcreditorsreport/monthlyffbcreditorsreport.module"
      ).then((m) => m.MonthlyffbcreditorsreportPageModule),
  },
  {
    path: "staffovertime",
    loadChildren: () =>
      import("./ceo-module/staffovertime/staffovertime.module").then(
        (m) => m.StaffovertimePageModule
      ),
  },
  {
    path: "staffsalary",
    loadChildren: () =>
      import("./ceo-module/staffsalary/staffsalary.module").then(
        (m) => m.StaffsalaryPageModule
      ),
  },
  {
    path: "wageslocal",
    loadChildren: () =>
      import("./ceo-module/wageslocal/wageslocal.module").then(
        (m) => m.WageslocalPageModule
      ),
  },
  {
    path: "wagesforeign",
    loadChildren: () =>
      import("./ceo-module/wagesforeign/wagesforeign.module").then(
        (m) => m.WagesforeignPageModule
      ),
  },
  {
    path: "ceomonthlyreports",
    loadChildren: () =>
      import("./ceo-module/ceomonthlyreports/ceomonthlyreports.module").then(
        (m) => m.CeomonthlyreportsPageModule
      ),
  },
  {
    path: "exttraordinaryexpensereport",
    loadChildren: () =>
      import(
        "./ceo-module/exttraordinaryexpensereport/exttraordinaryexpensereport.module"
      ).then((m) => m.ExttraordinaryexpensereportPageModule),
  },
  {
    path: "dailyexpensereport",
    loadChildren: () =>
      import("./ceo-module/dailyexpensereport/dailyexpensereport.module").then(
        (m) => m.DailyexpensereportPageModule
      ),
  },
  {
    path: "monthlyrepairmaintenancereport",
    loadChildren: () =>
      import(
        "./ceo-module/monthlyrepairmaintenancereport/monthlyrepairmaintenancereport.module"
      ).then((m) => m.MonthlyrepairmaintenancereportPageModule),
  },
  {
    path: "ceodashboard",
    loadChildren: () =>
      import("./ceo-module/ceodashboard/ceodashboard.module").then(
        (m) => m.CeodashboardPageModule
      ),
  },
  {
    path: "palletplantreport",
    loadChildren: () =>
      import("./ceo-module/palletplantreport/palletplantreport.module").then(
        (m) => m.PalletplantreportPageModule
      ),
  },
  {
    path: "storecreditorreport",
    loadChildren: () =>
      import(
        "./ceo-module/storecreditorreport/storecreditorreport.module"
      ).then((m) => m.StorecreditorreportPageModule),
  },
  {
    path: "sealsexpensereport",
    loadChildren: () =>
      import("./ceo-module/sealsexpensereport/sealsexpensereport.module").then(
        (m) => m.SealsexpensereportPageModule
      ),
  },
  {
    path: "trialbalancereport",
    loadChildren: () =>
      import("./ceo-module/trialbalancereport/trialbalancereport.module").then(
        (m) => m.TrialbalancereportPageModule
      ),
  },
  {
    path: "directcostlubricantreport",
    loadChildren: () =>
      import(
        "./ceo-module/directcostlubricantreport/directcostlubricantreport.module"
      ).then((m) => m.DirectcostlubricantreportPageModule),
  },
  {
    path: "financialstatementreport",
    loadChildren: () =>
      import(
        "./ceo-module/financialstatementreport/financialstatementreport.module"
      ).then((m) => m.FinancialstatementreportPageModule),
  },
  {
    path: "prepaymentreport",
    loadChildren: () =>
      import("./ceo-module/prepaymentreport/prepaymentreport.module").then(
        (m) => m.PrepaymentreportPageModule
      ),
  },
  {
    path: "accuredchargesreport",
    loadChildren: () =>
      import(
        "./ceo-module/accuredchargesreport/accuredchargesreport.module"
      ).then((m) => m.AccuredchargesreportPageModule),
  },
  {
    path: "abstractexpensereport",
    loadChildren: () =>
      import(
        "./ceo-module/abstractexpensereport/abstractexpensereport.module"
      ).then((m) => m.AbstractexpensereportPageModule),
  },
  {
    path: "laboratorychemicalreport",
    loadChildren: () =>
      import(
        "./ceo-module/laboratorychemicalreport/laboratorychemicalreport.module"
      ).then((m) => m.LaboratorychemicalreportPageModule),
  },
  {
    path: "consumablesreport",
    loadChildren: () =>
      import("./ceo-module/consumablesreport/consumablesreport.module").then(
        (m) => m.ConsumablesreportPageModule
      ),
  },
  {
    path: "notebalancesheetreport",
    loadChildren: () =>
      import(
        "./ceo-module/notebalancesheetreport/notebalancesheetreport.module"
      ).then((m) => m.NotebalancesheetreportPageModule),
  },
  {
    path: "productionturnoverreport",
    loadChildren: () =>
      import(
        "./ceo-module/productionturnoverreport/productionturnoverreport.module"
      ).then((m) => m.ProductionturnoverreportPageModule),
  },
  {
    path: "diesolineconsumptionreport",
    loadChildren: () =>
      import(
        "./ceo-module/diesolineconsumptionreport/diesolineconsumptionreport.module"
      ).then((m) => m.DiesolineconsumptionreportPageModule),
  },
  {
    path: "lubricantconsumptionreport",
    loadChildren: () =>
      import(
        "./ceo-module/lubricantconsumptionreport/lubricantconsumptionreport.module"
      ).then((m) => m.LubricantconsumptionreportPageModule),
  },
  {
    path: "factorychemicalconsumptionreport",
    loadChildren: () =>
      import(
        "./ceo-module/factorychemicalconsumptionreport/factorychemicalconsumptionreport.module"
      ).then((m) => m.FactorychemicalconsumptionreportPageModule),
  },
  {
    path: "closingstockreport",
    loadChildren: () =>
      import("./ceo-module/closingstockreport/closingstockreport.module").then(
        (m) => m.ClosingstockreportPageModule
      ),
  },
  {
    path: "vehiclehirereport",
    loadChildren: () =>
      import("./ceo-module/vehiclehirereport/vehiclehirereport.module").then(
        (m) => m.VehiclehirereportPageModule
      ),
  },
  {
    path: "ffbpurchasecostreport",
    loadChildren: () =>
      import(
        "./ceo-module/ffbpurchasecostreport/ffbpurchasecostreport.module"
      ).then((m) => m.FfbpurchasecostreportPageModule),
  },
  {
    path: "journalentryreport",
    loadChildren: () =>
      import("./ceo-module/journalentryreport/journalentryreport.module").then(
        (m) => m.JournalentryreportPageModule
      ),
  },
  {
    path: "oerkerreport",
    loadChildren: () =>
      import("./grading-module/oerkerreport/oerkerreport.module").then(
        (m) => m.OerkerreportPageModule
      ),
  },
  {
    path: "storereports",
    loadChildren: () =>
      import("./store-module/storereports/storereports.module").then(
        (m) => m.StorereportsPageModule
      ),
  },
  {
    path: "stocktakereport",
    loadChildren: () =>
      import("./store-module/stocktakereport/stocktakereport.module").then(
        (m) => m.StocktakereportPageModule
      ),
  },
  {
    path: "stockissueonlocationreport",
    loadChildren: () =>
      import(
        "./store-module/stockissueonlocationreport/stockissueonlocationreport.module"
      ).then((m) => m.StockissueonlocationreportPageModule),
  },
  {
    path: "stockissueoncategoryreport",
    loadChildren: () =>
      import(
        "./store-module/stockissueoncategoryreport/stockissueoncategoryreport.module"
      ).then((m) => m.StockissueoncategoryreportPageModule),
  },
  {
    path: "stockissueonstationreport",
    loadChildren: () =>
      import(
        "./store-module/stockissueonstationreport/stockissueonstationreport.module"
      ).then((m) => m.StockissueonstationreportPageModule),
  },
  {
    path: "boiler-hourlyview",
    loadChildren: () =>
      import("./boiler-module/boiler-hourlyview/boiler-hourlyview.module").then(
        (m) => m.BoilerHourlyviewPageModule
      ),
  },
  {
    path: "grading-manualform",
    loadChildren: () =>
      import(
        "./grading-module/grading-manualform/grading-manualform.module"
      ).then((m) => m.GradingManualformPageModule),
  },
  {
    path: "grading-suppliersearch",
    loadChildren: () =>
      import(
        "./grading-module/grading-suppliersearch/grading-suppliersearch.module"
      ).then((m) => m.GradingSuppliersearchPageModule),
  },
  {
    path: "manualffbform",
    loadChildren: () =>
      import("./security-module/manualffbform/manualffbform.module").then(
        (m) => m.ManualffbformPageModule
      ),
  },
  {
    path: "suppliersearch",
    loadChildren: () =>
      import("./security-module/suppliersearch/suppliersearch.module").then(
        (m) => m.SuppliersearchPageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./estatemanager-module/home/home.module").then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: "emprofile",
    loadChildren: () =>
      import("./estatemanager-module/emprofile/emprofile.module").then(
        (m) => m.EmprofilePageModule
      ),
  },
  {
    path: "records",
    loadChildren: () =>
      import("./estatemanager-module/records/records.module").then(
        (m) => m.RecordsPageModule
      ),
  },
  {
    path: "broadcastcommunicationreport",
    loadChildren: () =>
      import(
        "./supervisor-module/broadcastcommunicationreport/broadcastcommunicationreport.module"
      ).then((m) => m.BroadcastcommunicationreportPageModule),
  },
  {
    path: "personlizecommunicationreport",
    loadChildren: () =>
      import(
        "./supervisor-module/personlizecommunicationreport/personlizecommunicationreport.module"
      ).then((m) => m.PersonlizecommunicationreportPageModule),
  },
  {
    path: "broadcastcommunicationreport",
    loadChildren: () =>
      import(
        "./grading-module/broadcastcommunicationreport/broadcastcommunicationreport.module"
      ).then((m) => m.BroadcastcommunicationreportPageModule),
  },
  {
    path: "personalizedcommunicationreport",
    loadChildren: () =>
      import(
        "./grading-module/personalizedcommunicationreport/personalizedcommunicationreport.module"
      ).then((m) => m.PersonalizedcommunicationreportPageModule),
  },
  {
    path: "broadcastcommunicationreport",
    loadChildren: () =>
      import(
        "./security-module/broadcastcommunicationreport/broadcastcommunicationreport.module"
      ).then((m) => m.BroadcastcommunicationreportPageModule),
  },
  {
    path: "personalizedcommunicationreport",
    loadChildren: () =>
      import(
        "./security-module/personalizedcommunicationreport/personalizedcommunicationreport.module"
      ).then((m) => m.PersonalizedcommunicationreportPageModule),
  },
  {
    path: "securityothervehicle",
    loadChildren: () =>
      import(
        "./security-module/securityothervehicle/securityothervehicle.module"
      ).then((m) => m.SecurityothervehiclePageModule),
  },
  {
    path: "securityothervehiclehistory",
    loadChildren: () =>
      import(
        "./security-module/securityothervehiclehistory/securityothervehiclehistory.module"
      ).then((m) => m.SecurityothervehiclehistoryPageModule),
  },
  {
    path: "googlemap",
    loadChildren: () =>
      import("./gps-module/googlemap/googlemap.module").then(
        (m) => m.GooglemapPageModule
      ),
  },
  {
    path: "ffbreceive",
    loadChildren: () =>
      import("./security-module/ffbreceive/ffbreceive.module").then(
        (m) => m.FfbreceivePageModule
      ),
  },
  {
    path: "othersuppliersearch",
    loadChildren: () =>
      import(
        "./security-module/othersuppliersearch/othersuppliersearch.module"
      ).then((m) => m.OthersuppliersearchPageModule),
  },
  {
    path: "zoomimage",
    loadChildren: () =>
      import("./security-module/zoomimage/zoomimage.module").then(
        (m) => m.ZoomimagePageModule
      ),
  },
  {
    path: "communicationreport",
    loadChildren: () =>
      import(
        "./boiler-module/communicationreport/communicationreport.module"
      ).then((m) => m.CommunicationreportPageModule),
  },
  {
    path: "personalizedcommunicationreport",
    loadChildren: () =>
      import(
        "./boiler-module/personalizedcommunicationreport/personalizedcommunicationreport.module"
      ).then((m) => m.PersonalizedcommunicationreportPageModule),
  },
  {
    path: "broadcastcommunicationreport",
    loadChildren: () =>
      import(
        "./boiler-module/broadcastcommunicationreport/broadcastcommunicationreport.module"
      ).then((m) => m.BroadcastcommunicationreportPageModule),
  },
  {
    path: "broadcastcommunicationreport",
    loadChildren: () =>
      import(
        "./manager-module/broadcastcommunicationreport/broadcastcommunicationreport.module"
      ).then((m) => m.BroadcastcommunicationreportPageModule),
  },
  {
    path: "personalizecommunicationreport",
    loadChildren: () =>
      import(
        "./manager-module/personalizecommunicationreport/personalizecommunicationreport.module"
      ).then((m) => m.PersonalizecommunicationreportPageModule),
  },
  {
    path: "managercommunication",
    loadChildren: () =>
      import(
        "./manager-module/managercommunication/managercommunication.module"
      ).then((m) => m.ManagercommunicationPageModule),
  },
  {
    path: "broadcastcommunication",
    loadChildren: () =>
      import(
        "./engineer-module/broadcastcommunication/broadcastcommunication.module"
      ).then((m) => m.BroadcastcommunicationPageModule),
  },
  {
    path: "personalizecommunication",
    loadChildren: () =>
      import(
        "./engineer-module/personalizecommunication/personalizecommunication.module"
      ).then((m) => m.PersonalizecommunicationPageModule),
  },
  {
    path: "broadcastcommunication",
    loadChildren: () =>
      import(
        "./laboratory-module/broadcastcommunication/broadcastcommunication.module"
      ).then((m) => m.BroadcastcommunicationPageModule),
  },
  {
    path: "personalizecommunication",
    loadChildren: () =>
      import(
        "./laboratory-module/personalizecommunication/personalizecommunication.module"
      ).then((m) => m.PersonalizecommunicationPageModule),
  },
  {
    path: "broadcastcommunicationreport",
    loadChildren: () =>
      import(
        "./store-module/broadcastcommunicationreport/broadcastcommunicationreport.module"
      ).then((m) => m.BroadcastcommunicationreportPageModule),
  },
  {
    path: "personalizecommunicationreport",
    loadChildren: () =>
      import(
        "./store-module/personalizecommunicationreport/personalizecommunicationreport.module"
      ).then((m) => m.PersonalizecommunicationreportPageModule),
  },
  {
    path: "boiler-log-home",
    loadChildren: () =>
      import("./boiler-module/boiler-log-home/boiler-log-home.module").then(
        (m) => m.BoilerLogHomePageModule
      ),
  },
  {
    path: "boiler-log-entry",
    loadChildren: () =>
      import("./boiler-module/boiler-log-entry/boiler-log-entry.module").then(
        (m) => m.BoilerLogEntryPageModule
      ),
  },
  {
    path: "onehourentry",
    loadChildren: () =>
      import("./boiler-module/onehourentry/onehourentry.module").then(
        (m) => m.OnehourentryPageModule
      ),
  },
  {
    path: "twohoursentry",
    loadChildren: () =>
      import("./boiler-module/twohoursentry/twohoursentry.module").then(
        (m) => m.TwohoursentryPageModule
      ),
  },
  {
    path: "fourhoursentry",
    loadChildren: () =>
      import("./boiler-module/fourhoursentry/fourhoursentry.module").then(
        (m) => m.FourhoursentryPageModule
      ),
  },
  {
    path: "twelvehoursentry",
    loadChildren: () =>
      import("./boiler-module/twelvehoursentry/twelvehoursentry.module").then(
        (m) => m.TwelvehoursentryPageModule
      ),
  },
  {
    path: "boilerlevels",
    loadChildren: () =>
      import("./boiler-module/boilerlevels/boilerlevels.module").then(
        (m) => m.BoilerlevelsPageModule
      ),
  },
  {
    path: "turbineperformance",
    loadChildren: () =>
      import(
        "./boiler-module/turbineperformance/turbineperformance.module"
      ).then((m) => m.TurbineperformancePageModule),
  },
  {
    path: "boilerperformancedata",
    loadChildren: () =>
      import(
        "./boiler-module/boilerperformancedata/boilerperformancedata.module"
      ).then((m) => m.BoilerperformancedataPageModule),
  },
  {
    path: "boilelogbook",
    loadChildren: () =>
      import("./boiler-module/boilelogbook/boilelogbook.module").then(
        (m) => m.BoilelogbookPageModule
      ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./boiler-module/dashboard/dashboard.module").then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: "maintenance-dashboard",
    loadChildren: () =>
      import(
        "./store-module/maintenance-dashboard/maintenance-dashboard.module"
      ).then((m) => m.MaintenanceDashboardPageModule),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./maintenance-module/dashboard/dashboard.module").then(
        (m) => m.DashboardPageModule
      ),
  },
  {
    path: "maintenance-detail",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-detail/maintenance-detail.module"
      ).then((m) => m.MaintenanceDetailPageModule),
  },
  {
    path: "communication",
    loadChildren: () =>
      import("./maintenance-module/communication/communication.module").then(
        (m) => m.CommunicationPageModule
      ),
  },
  {
    path: "broadcastcommunicationreport",
    loadChildren: () =>
      import(
        "./maintenance-module/broadcastcommunicationreport/broadcastcommunicationreport.module"
      ).then((m) => m.BroadcastcommunicationreportPageModule),
  },
  {
    path: "personalizecommunicationreport",
    loadChildren: () =>
      import(
        "./maintenance-module/personalizecommunicationreport/personalizecommunicationreport.module"
      ).then((m) => m.PersonalizecommunicationreportPageModule),
  },
  {
    path: "maintenance-home",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-home/maintenance-home.module"
      ).then((m) => m.MaintenanceHomePageModule),
  },
  {
    path: "report-home",
    loadChildren: () =>
      import("./maintenance-module/report-home/report-home.module").then(
        (m) => m.ReportHomePageModule
      ),
  },
  {
    path: "planning",
    loadChildren: () =>
      import("./maintenance-module/planning/planning.module").then(
        (m) => m.PlanningPageModule
      ),
  },
  {
    path: "maintenance-attendance",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-attendance/maintenance-attendance.module"
      ).then((m) => m.MaintenanceAttendancePageModule),
  },
  {
    path: "maintenance-orderreq-list",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-orderreq-list/maintenance-orderreq-list.module"
      ).then((m) => m.MaintenanceOrderreqListPageModule),
  },
  {
    path: "maintenance-addnewjob",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-addnewjob/maintenance-addnewjob.module"
      ).then((m) => m.MaintenanceAddnewjobPageModule),
  },
  {
    path: "maintenance-orderreq-add",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-orderreq-add/maintenance-orderreq-add.module"
      ).then((m) => m.MaintenanceOrderreqAddPageModule),
  },
  {
    path: "maintenance-orderreq-detail",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-orderreq-detail/maintenance-orderreq-detail.module"
      ).then((m) => m.MaintenanceOrderreqDetailPageModule),
  },
  {
    path: "requestitemhistory-report",
    loadChildren: () =>
      import(
        "./maintenance-module/requestitemhistory-report/requestitemhistory-report.module"
      ).then((m) => m.RequestitemhistoryReportPageModule),
  },
  {
    path: "maintenanceorder-details",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenanceorder-details/maintenanceorder-details.module"
      ).then((m) => m.MaintenanceorderDetailsPageModule),
  },
  {
    path: "breakdown-list",
    loadChildren: () =>
      import("./maintenance-module/breakdown-list/breakdown-list.module").then(
        (m) => m.BreakdownListPageModule
      ),
  },
  {
    path: "breakdown-detail",
    loadChildren: () =>
      import(
        "./maintenance-module/breakdown-detail/breakdown-detail.module"
      ).then((m) => m.BreakdownDetailPageModule),
  },
  {
    path: "breakdown-new",
    loadChildren: () =>
      import("./maintenance-module/breakdown-new/breakdown-new.module").then(
        (m) => m.BreakdownNewPageModule
      ),
  },
  {
    path: "schedule",
    loadChildren: () =>
      import("./maintenance-module/schedule/schedule.module").then(
        (m) => m.SchedulePageModule
      ),
  },
  {
    path: "engineer-breakdown-list",
    loadChildren: () =>
      import(
        "./engineer-module/engineer-breakdown-list/engineer-breakdown-list.module"
      ).then((m) => m.EngineerBreakdownListPageModule),
  },
  {
    path: "engineer-breakdown-new",
    loadChildren: () =>
      import(
        "./engineer-module/engineer-breakdown-new/engineer-breakdown-new.module"
      ).then((m) => m.EngineerBreakdownNewPageModule),
  },
  {
    path: "engineer-dashboard",
    loadChildren: () =>
      import(
        "./engineer-module/engineer-dashboard/engineer-dashboard.module"
      ).then((m) => m.EngineerDashboardPageModule),
  },
  {
    path: "broadcastcommunicationreport",
    loadChildren: () =>
      import(
        "./engineer-module/broadcastcommunicationreport/broadcastcommunicationreport.module"
      ).then((m) => m.BroadcastcommunicationreportPageModule),
  },
  {
    path: "personlizecommunicationreport",
    loadChildren: () =>
      import(
        "./engineer-module/personlizecommunicationreport/personlizecommunicationreport.module"
      ).then((m) => m.PersonlizecommunicationreportPageModule),
  },
  {
    path: "manager-dashboard",
    loadChildren: () =>
      import(
        "./manager-module/manager-dashboard/manager-dashboard.module"
      ).then((m) => m.ManagerDashboardPageModule),
  },
  {
    path: "manager-breakdown-list",
    loadChildren: () =>
      import(
        "./manager-module/manager-breakdown-list/manager-breakdown-list.module"
      ).then((m) => m.ManagerBreakdownListPageModule),
  },
  {
    path: "supervisor-breakdown-list",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-breakdown-list/supervisor-breakdown-list.module"
      ).then((m) => m.SupervisorBreakdownListPageModule),
  },
  {
    path: "supervisor-breakdown-new",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-breakdown-new/supervisor-breakdown-new.module"
      ).then((m) => m.SupervisorBreakdownNewPageModule),
  },
  {
    path: "manager-breakdown-new",
    loadChildren: () =>
      import(
        "./manager-module/manager-breakdown-new/manager-breakdown-new.module"
      ).then((m) => m.ManagerBreakdownNewPageModule),
  },
  {
    path: "laboratory-breakdown-list",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratory-breakdown-list/laboratory-breakdown-list.module"
      ).then((m) => m.LaboratoryBreakdownListPageModule),
  },
  {
    path: "laboratory-breakdown-new",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratory-breakdown-new/laboratory-breakdown-new.module"
      ).then((m) => m.LaboratoryBreakdownNewPageModule),
  },
  {
    path: "laboratory-dashboard",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratory-dashboard/laboratory-dashboard.module"
      ).then((m) => m.LaboratoryDashboardPageModule),
  },
  {
    path: "supervisor-dashboard",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-dashboard/supervisor-dashboard.module"
      ).then((m) => m.SupervisorDashboardPageModule),
  },
  {
    path: "maintenance-report",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-report/maintenance-report.module"
      ).then((m) => m.MaintenanceReportPageModule),
  },
  {
    path: "boiler-breakdown-list",
    loadChildren: () =>
      import(
        "./boiler-module/boiler-breakdown-list/boiler-breakdown-list.module"
      ).then((m) => m.BoilerBreakdownListPageModule),
  },
  {
    path: "boiler-breakdown-new",
    loadChildren: () =>
      import(
        "./boiler-module/boiler-breakdown-new/boiler-breakdown-new.module"
      ).then((m) => m.BoilerBreakdownNewPageModule),
  },
  {
    path: "supervisor-machinerunninghours",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-machinerunninghours/supervisor-machinerunninghours.module"
      ).then((m) => m.SupervisorMachinerunninghoursPageModule),
  },
  {
    path: "weighbridgereport",
    loadChildren: () =>
      import(
        "./supervisor-module/weighbridgereport/weighbridgereport.module"
      ).then((m) => m.WeighbridgereportPageModule),
  },
  {
    path: "weighbridgereport",
    loadChildren: () =>
      import(
        "./manager-module/weighbridgereport/weighbridgereport.module"
      ).then((m) => m.WeighbridgereportPageModule),
  },
  {
    path: "maintenance-observationreport",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-observationreport/maintenance-observationreport.module"
      ).then((m) => m.MaintenanceObservationreportPageModule),
  },
  {
    path: "grading-dashboard",
    loadChildren: () =>
      import(
        "./grading-module/grading-dashboard/grading-dashboard.module"
      ).then((m) => m.GradingDashboardPageModule),
  },
  {
    path: "grading-chat",
    loadChildren: () =>
      import("./grading-module/grading-chat/grading-chat.module").then(
        (m) => m.GradingChatPageModule
      ),
  },
  {
    path: "language-popover",
    loadChildren: () =>
      import("./pages/language-popover/language-popover.module").then(
        (m) => m.LanguagePopoverPageModule
      ),
  },
  {
    path: "grading-personalizedchatdepartments",
    loadChildren: () =>
      import(
        "./grading-module/grading-personalizedchatdepartments/grading-personalizedchatdepartments.module"
      ).then((m) => m.GradingPersonalizedchatdepartmentsPageModule),
  },
  {
    path: "grading-personalizedchat",
    loadChildren: () =>
      import(
        "./grading-module/grading-personalizedchat/grading-personalizedchat.module"
      ).then((m) => m.GradingPersonalizedchatPageModule),
  },
  {
    path: "maintenance-braodcastchat",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-braodcastchat/maintenance-braodcastchat.module"
      ).then((m) => m.MaintenanceBraodcastchatPageModule),
  },
  {
    path: "maintenance-personalizedchatdepartments",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-personalizedchatdepartments/maintenance-personalizedchatdepartments.module"
      ).then((m) => m.MaintenancePersonalizedchatdepartmentsPageModule),
  },
  {
    path: "maintenance-personalizedchat",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-personalizedchat/maintenance-personalizedchat.module"
      ).then((m) => m.MaintenancePersonalizedchatPageModule),
  },
  {
    path: "preventivemaintenancereport",
    loadChildren: () =>
      import(
        "./supervisor-module/preventivemaintenancereport/preventivemaintenancereport.module"
      ).then((m) => m.PreventivemaintenancereportPageModule),
  },
  {
    path: "laboratoryreport",
    loadChildren: () =>
      import(
        "./supervisor-module/laboratoryreport/laboratoryreport.module"
      ).then((m) => m.LaboratoryreportPageModule),
  },
  {
    path: "supervisor-broadcastchat",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-broadcastchat/supervisor-broadcastchat.module"
      ).then((m) => m.SupervisorBroadcastchatPageModule),
  },
  {
    path: "supervisor-personalizedchatdepartment",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-personalizedchatdepartment/supervisor-personalizedchatdepartment.module"
      ).then((m) => m.SupervisorPersonalizedchatdepartmentPageModule),
  },
  {
    path: "supervisor-personalizedchat",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-personalizedchat/supervisor-personalizedchat.module"
      ).then((m) => m.SupervisorPersonalizedchatPageModule),
  },
  {
    path: "laboratory-broadcastchat",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratory-broadcastchat/laboratory-broadcastchat.module"
      ).then((m) => m.LaboratoryBroadcastchatPageModule),
  },
  {
    path: "laboratory-personalizedchatdepartments",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratory-personalizedchatdepartments/laboratory-personalizedchatdepartments.module"
      ).then((m) => m.LaboratoryPersonalizedchatdepartmentsPageModule),
  },
  {
    path: "laboratory-personalizedchat",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratory-personalizedchat/laboratory-personalizedchat.module"
      ).then((m) => m.LaboratoryPersonalizedchatPageModule),
  },
  {
    path: "laboratory-reportedmaintenace",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratory-reportedmaintenace/laboratory-reportedmaintenace.module"
      ).then((m) => m.LaboratoryReportedmaintenacePageModule),
  },
  {
    path: "laboratory-reportedmaintenace-list",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratory-reportedmaintenace-list/laboratory-reportedmaintenace-list.module"
      ).then((m) => m.LaboratoryReportedmaintenaceListPageModule),
  },
  {
    path: "laboratory-reporthome",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratory-reporthome/laboratory-reporthome.module"
      ).then((m) => m.LaboratoryReporthomePageModule),
  },
  {
    path: "laboratory-generallabreport",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratory-generallabreport/laboratory-generallabreport.module"
      ).then((m) => m.LaboratoryGenerallabreportPageModule),
  },
  {
    path: "maintenance-jobdonereport",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-jobdonereport/maintenance-jobdonereport.module"
      ).then((m) => m.MaintenanceJobdonereportPageModule),
  },
  {
    path: "maintenance-reportedmaintenance-list",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-reportedmaintenance-list/maintenance-reportedmaintenance-list.module"
      ).then((m) => m.MaintenanceReportedmaintenanceListPageModule),
  },
  {
    path: "maintenance-reportedmaintenance-new",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-reportedmaintenance-new/maintenance-reportedmaintenance-new.module"
      ).then((m) => m.MaintenanceReportedmaintenanceNewPageModule),
  },
  {
    path: "maintenance-reportedmaintenance-detail",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-reportedmaintenance-detail/maintenance-reportedmaintenance-detail.module"
      ).then((m) => m.MaintenanceReportedmaintenanceDetailPageModule),
  },
  {
    path: "boiler-reportedmaintenance-list",
    loadChildren: () =>
      import(
        "./boiler-module/boiler-reportedmaintenance-list/boiler-reportedmaintenance-list.module"
      ).then((m) => m.BoilerReportedmaintenanceListPageModule),
  },
  {
    path: "boiler-reportedmaintenance-new",
    loadChildren: () =>
      import(
        "./boiler-module/boiler-reportedmaintenance-new/boiler-reportedmaintenance-new.module"
      ).then((m) => m.BoilerReportedmaintenanceNewPageModule),
  },
  {
    path: "boiler-broadcastchat",
    loadChildren: () =>
      import(
        "./boiler-module/boiler-broadcastchat/boiler-broadcastchat.module"
      ).then((m) => m.BoilerBroadcastchatPageModule),
  },
  {
    path: "boiler-personalizedchatdepartments",
    loadChildren: () =>
      import(
        "./boiler-module/boiler-personalizedchatdepartments/boiler-personalizedchatdepartments.module"
      ).then((m) => m.BoilerPersonalizedchatdepartmentsPageModule),
  },
  {
    path: "boiler-personalizedchat",
    loadChildren: () =>
      import(
        "./boiler-module/boiler-personalizedchat/boiler-personalizedchat.module"
      ).then((m) => m.BoilerPersonalizedchatPageModule),
  },
  {
    path: "chathome",
    loadChildren: () =>
      import("./ceo-module/chathome/chathome.module").then(
        (m) => m.ChathomePageModule
      ),
  },
  {
    path: "ceo-broadcastchat",
    loadChildren: () =>
      import("./ceo-module/ceo-broadcastchat/ceo-broadcastchat.module").then(
        (m) => m.CeoBroadcastchatPageModule
      ),
  },
  {
    path: "ceo-personalizedchatdepartments",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-personalizedchatdepartments/ceo-personalizedchatdepartments.module"
      ).then((m) => m.CeoPersonalizedchatdepartmentsPageModule),
  },
  {
    path: "ceo-personalizedchat",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-personalizedchat/ceo-personalizedchat.module"
      ).then((m) => m.CeoPersonalizedchatPageModule),
  },
  {
    path: "approvals-home",
    loadChildren: () =>
      import("./ceo-module/approvals-home/approvals-home.module").then(
        (m) => m.ApprovalsHomePageModule
      ),
  },
  {
    path: "workorderreport",
    loadChildren: () =>
      import("./ceo-module/workorderreport/workorderreport.module").then(
        (m) => m.WorkorderreportPageModule
      ),
  },
  {
    path: "manager-reportedmaintenance",
    loadChildren: () =>
      import(
        "./manager-module/manager-reportedmaintenance/manager-reportedmaintenance.module"
      ).then((m) => m.ManagerReportedmaintenancePageModule),
  },
  {
    path: "manager-broadcastchat",
    loadChildren: () =>
      import(
        "./manager-module/manager-broadcastchat/manager-broadcastchat.module"
      ).then((m) => m.ManagerBroadcastchatPageModule),
  },
  {
    path: "manager-personalizedchatdepartments",
    loadChildren: () =>
      import(
        "./manager-module/manager-personalizedchatdepartments/manager-personalizedchatdepartments.module"
      ).then((m) => m.ManagerPersonalizedchatdepartmentsPageModule),
  },
  {
    path: "manager-personalizedchat",
    loadChildren: () =>
      import(
        "./manager-module/manager-personalizedchat/manager-personalizedchat.module"
      ).then((m) => m.ManagerPersonalizedchatPageModule),
  },
  {
    path: "communicationhome",
    loadChildren: () =>
      import(
        "./manager-module/communicationhome/communicationhome.module"
      ).then((m) => m.CommunicationhomePageModule),
  },
  {
    path: "manager-reportedmaintenance-new",
    loadChildren: () =>
      import(
        "./manager-module/manager-reportedmaintenance-new/manager-reportedmaintenance-new.module"
      ).then((m) => m.ManagerReportedmaintenanceNewPageModule),
  },
  {
    path: "manager-reportedmaintenance-detail",
    loadChildren: () =>
      import(
        "./manager-module/manager-reportedmaintenance-detail/manager-reportedmaintenance-detail.module"
      ).then((m) => m.ManagerReportedmaintenanceDetailPageModule),
  },
  {
    path: "manager-logbook",
    loadChildren: () =>
      import("./manager-module/manager-logbook/manager-logbook.module").then(
        (m) => m.ManagerLogbookPageModule
      ),
  },
  {
    path: "manager-reports",
    loadChildren: () =>
      import("./manager-module/manager-reports/manager-reports.module").then(
        (m) => m.ManagerReportsPageModule
      ),
  },
  {
    path: "security-personalizedchat",
    loadChildren: () =>
      import(
        "./security-module/security-personalizedchat/security-personalizedchat.module"
      ).then((m) => m.SecurityPersonalizedchatPageModule),
  },
  {
    path: "security-broadcastchat",
    loadChildren: () =>
      import(
        "./security-module/security-broadcastchat/security-broadcastchat.module"
      ).then((m) => m.SecurityBroadcastchatPageModule),
  },
  {
    path: "security-personalizedchatdepartment",
    loadChildren: () =>
      import(
        "./security-module/security-personalizedchatdepartment/security-personalizedchatdepartment.module"
      ).then((m) => m.SecurityPersonalizedchatdepartmentPageModule),
  },
  {
    path: "playvideo",
    loadChildren: () =>
      import("./security-module/playvideo/playvideo.module").then(
        (m) => m.PlayvideoPageModule
      ),
  },
  {
    path: "supervisor-productionreport",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-productionreport/supervisor-productionreport.module"
      ).then((m) => m.SupervisorProductionreportPageModule),
  },
  {
    path: "laboratoryreport-hourly",
    loadChildren: () =>
      import(
        "./laboratory-module/laboratoryreport-hourly/laboratoryreport-hourly.module"
      ).then((m) => m.LaboratoryreportHourlyPageModule),
  },
  {
    path: "report-labdailyreport",
    loadChildren: () =>
      import(
        "./manager-module/report-labdailyreport/report-labdailyreport.module"
      ).then((m) => m.ReportLabdailyreportPageModule),
  },
  {
    path: "report-millperformancereport",
    loadChildren: () =>
      import(
        "./manager-module/report-millperformancereport/report-millperformancereport.module"
      ).then((m) => m.ReportMillperformancereportPageModule),
  },
  {
    path: "report-hourlyreport",
    loadChildren: () =>
      import(
        "./manager-module/report-hourlyreport/report-hourlyreport.module"
      ).then((m) => m.ReportHourlyreportPageModule),
  },
  {
    path: "report-boilerlogreport",
    loadChildren: () =>
      import(
        "./manager-module/report-boilerlogreport/report-boilerlogreport.module"
      ).then((m) => m.ReportBoilerlogreportPageModule),
  },
  {
    path: "report-productionreport",
    loadChildren: () =>
      import(
        "./manager-module/report-productionreport/report-productionreport.module"
      ).then((m) => m.ReportProductionreportPageModule),
  },
  {
    path: "report-breakdown",
    loadChildren: () =>
      import("./manager-module/report-breakdown/report-breakdown.module").then(
        (m) => m.ReportBreakdownPageModule
      ),
  },
  {
    path: "report-boilerlog",
    loadChildren: () =>
      import(
        "./supervisor-module/report-boilerlog/report-boilerlog.module"
      ).then((m) => m.ReportBoilerlogPageModule),
  },
  {
    path: "report-breakdown",
    loadChildren: () =>
      import(
        "./supervisor-module/report-breakdown/report-breakdown.module"
      ).then((m) => m.ReportBreakdownPageModule),
  },
  {
    path: "report-maintenance-breakdownlist",
    loadChildren: () =>
      import(
        "./maintenance-module/report-maintenance-breakdownlist/report-maintenance-breakdownlist.module"
      ).then((m) => m.ReportMaintenanceBreakdownlistPageModule),
  },
  {
    path: "report-maintenance-breakdown",
    loadChildren: () =>
      import(
        "./maintenance-module/report-maintenance-breakdown/report-maintenance-breakdown.module"
      ).then((m) => m.ReportMaintenanceBreakdownPageModule),
  },
  {
    path: "report-maintenance-boilerlog",
    loadChildren: () =>
      import(
        "./maintenance-module/report-maintenance-boilerlog/report-maintenance-boilerlog.module"
      ).then((m) => m.ReportMaintenanceBoilerlogPageModule),
  },
  {
    path: "report-maintenance-hourly",
    loadChildren: () =>
      import(
        "./maintenance-module/report-maintenance-hourly/report-maintenance-hourly.module"
      ).then((m) => m.ReportMaintenanceHourlyPageModule),
  },
  {
    path: "ceo-hourlyreport",
    loadChildren: () =>
      import("./ceo-module/ceo-hourlyreport/ceo-hourlyreport.module").then(
        (m) => m.CeoHourlyreportPageModule
      ),
  },
  {
    path: "ceo-boilerlogreport",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-boilerlogreport/ceo-boilerlogreport.module"
      ).then((m) => m.CeoBoilerlogreportPageModule),
  },
  {
    path: "ceo-millperformancereport",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-millperformancereport/ceo-millperformancereport.module"
      ).then((m) => m.CeoMillperformancereportPageModule),
  },
  {
    path: "ceo-dailylabreport",
    loadChildren: () =>
      import("./ceo-module/ceo-dailylabreport/ceo-dailylabreport.module").then(
        (m) => m.CeoDailylabreportPageModule
      ),
  },
  {
    path: "ceo-hourlylabreport",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-hourlylabreport/ceo-hourlylabreport.module"
      ).then((m) => m.CeoHourlylabreportPageModule),
  },
  {
    path: "report-labhourlyreport",
    loadChildren: () =>
      import(
        "./manager-module/report-labhourlyreport/report-labhourlyreport.module"
      ).then((m) => m.ReportLabhourlyreportPageModule),
  },
  {
    path: "report-labdailyreport",
    loadChildren: () =>
      import(
        "./supervisor-module/report-labdailyreport/report-labdailyreport.module"
      ).then((m) => m.ReportLabdailyreportPageModule),
  },
  {
    path: "report-labhourlyreport",
    loadChildren: () =>
      import(
        "./supervisor-module/report-labhourlyreport/report-labhourlyreport.module"
      ).then((m) => m.ReportLabhourlyreportPageModule),
  },
  {
    path: "report-labhourlyreport",
    loadChildren: () =>
      import(
        "./maintenance-module/report-labhourlyreport/report-labhourlyreport.module"
      ).then((m) => m.ReportLabhourlyreportPageModule),
  },
  {
    path: "report-labdailyreport",
    loadChildren: () =>
      import(
        "./maintenance-module/report-labdailyreport/report-labdailyreport.module"
      ).then((m) => m.ReportLabdailyreportPageModule),
  },
  {
    path: "hourly-reports-home",
    loadChildren: () =>
      import(
        "./ceo-module/hourly-reports-home/hourly-reports-home.module"
      ).then((m) => m.HourlyReportsHomePageModule),
  },
  {
    path: "manager-reports-home",
    loadChildren: () =>
      import(
        "./ceo-module/manager-reports-home/manager-reports-home.module"
      ).then((m) => m.ManagerReportsHomePageModule),
  },
  {
    path: "scheduling-report",
    loadChildren: () =>
      import(
        "./maintenance-module/scheduling-report/scheduling-report.module"
      ).then((m) => m.SchedulingReportPageModule),
  },
  {
    path: "ceo-breakdownlist",
    loadChildren: () =>
      import("./ceo-module/ceo-breakdownlist/ceo-breakdownlist.module").then(
        (m) => m.CeoBreakdownlistPageModule
      ),
  },
  {
    path: "ceo-breakdown",
    loadChildren: () =>
      import("./ceo-module/ceo-breakdown/ceo-breakdown.module").then(
        (m) => m.CeoBreakdownPageModule
      ),
  },
  {
    path: "ceo-schedulingreport",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-schedulingreport/ceo-schedulingreport.module"
      ).then((m) => m.CeoSchedulingreportPageModule),
  },
  {
    path: "supervisor-checklist",
    loadChildren: () =>
      import(
        "./supervisor-module/supervisor-checklist/supervisor-checklist.module"
      ).then((m) => m.SupervisorChecklistPageModule),
  },
  {
    path: "maintenance-checklist",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-checklist/maintenance-checklist.module"
      ).then((m) => m.MaintenanceChecklistPageModule),
  },
  {
    path: "report-productionchecklist",
    loadChildren: () =>
      import(
        "./supervisor-module/report-productionchecklist/report-productionchecklist.module"
      ).then((m) => m.ReportProductionchecklistPageModule),
  },
  {
    path: "report-maintenance-checklistreport",
    loadChildren: () =>
      import(
        "./maintenance-module/report-maintenance-checklistreport/report-maintenance-checklistreport.module"
      ).then((m) => m.ReportMaintenanceChecklistreportPageModule),
  },
  {
    path: "ceo-productionandmaintenancechecklistreport",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-productionandmaintenancechecklistreport/ceo-productionandmaintenancechecklistreport.module"
      ).then((m) => m.CeoProductionandmaintenancechecklistreportPageModule),
  },
  {
    path: "ceo-machinerunninghoursreport",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-machinerunninghoursreport/ceo-machinerunninghoursreport.module"
      ).then((m) => m.CeoMachinerunninghoursreportPageModule),
  },
  {
    path: "ceo-useractivity-home",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-useractivity-home/ceo-useractivity-home.module"
      ).then((m) => m.CeoUseractivityHomePageModule),
  },
  {
    path: "ceo-useractivity-maintenance",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-useractivity-maintenance/ceo-useractivity-maintenance.module"
      ).then((m) => m.CeoUseractivityMaintenancePageModule),
  },
  {
    path: "ceo-useractivity-production",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-useractivity-production/ceo-useractivity-production.module"
      ).then((m) => m.CeoUseractivityProductionPageModule),
  },
  {
    path: "ceo-vsinformationcycle",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-vsinformationcycle/ceo-vsinformationcycle.module"
      ).then((m) => m.CeoVsinformationcyclePageModule),
  },
  {
    path: "ceo-vshourlypressure",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-vshourlypressure/ceo-vshourlypressure.module"
      ).then((m) => m.CeoVshourlypressurePageModule),
  },
  {
    path: "ceo-gradingreport",
    loadChildren: () =>
      import("./ceo-module/ceo-gradingreport/ceo-gradingreport.module").then(
        (m) => m.CeoGradingreportPageModule
      ),
  },
  {
    path: "report-gradingreport",
    loadChildren: () =>
      import(
        "./supervisor-module/report-gradingreport/report-gradingreport.module"
      ).then((m) => m.ReportGradingreportPageModule),
  },
  {
    path: "maintenance-gradingreport",
    loadChildren: () =>
      import(
        "./maintenance-module/maintenance-gradingreport/maintenance-gradingreport.module"
      ).then((m) => m.MaintenanceGradingreportPageModule),
  },
  {
    path: "ceo-weighbridgereport",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-weighbridgereport/ceo-weighbridgereport.module"
      ).then((m) => m.CeoWeighbridgereportPageModule),
  },
  {
    path: "ceo-userlogreport",
    loadChildren: () =>
      import("./ceo-module/ceo-userlogreport/ceo-userlogreport.module").then(
        (m) => m.CeoUserlogreportPageModule
      ),
  },
  {
    path: "ceo-dailyreports",
    loadChildren: () =>
      import("./ceo-module/ceo-dailyreports/ceo-dailyreports.module").then(
        (m) => m.CeoDailyreportsPageModule
      ),
  },
  {
    path: "ceo-gradingreports-home",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-gradingreports-home/ceo-gradingreports-home.module"
      ).then((m) => m.CeoGradingreportsHomePageModule),
  },
  {
    path: "ceo-productionreports-home",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-productionreports-home/ceo-productionreports-home.module"
      ).then((m) => m.CeoProductionreportsHomePageModule),
  },
  {
    path: "ceo-storereports-home",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-storereports-home/ceo-storereports-home.module"
      ).then((m) => m.CeoStorereportsHomePageModule),
  },
  {
    path: "ceo-maintenancereports-home",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-maintenancereports-home/ceo-maintenancereports-home.module"
      ).then((m) => m.CeoMaintenancereportsHomePageModule),
  },
  {
    path: "ceo-financialreports-home",
    loadChildren: () =>
      import(
        "./ceo-module/ceo-financialreports-home/ceo-financialreports-home.module"
      ).then((m) => m.CeoFinancialreportsHomePageModule),
  },
  {
    path: "livetracking",
    loadChildren: () =>
      import("./ffb-module/livetracking/livetracking.module").then(
        (m) => m.LivetrackingPageModule
      ),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: 'supervisor-reportedmaintenance-list',
    loadChildren: () => import('./supervisor-module/supervisor-reportedmaintenance-list/supervisor-reportedmaintenance-list.module').then( m => m.SupervisorReportedmaintenanceListPageModule)
  },
  {
    path: 'supervisor-reportedmaintenance-new',
    loadChildren: () => import('./supervisor-module/supervisor-reportedmaintenance-new/supervisor-reportedmaintenance-new.module').then( m => m.SupervisorReportedmaintenanceNewPageModule)
  },
  {
    path: 'maintenance-attendancereport',
    loadChildren: () => import('./maintenance-module/maintenance-attendancereport/maintenance-attendancereport.module').then( m => m.MaintenanceAttendancereportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
