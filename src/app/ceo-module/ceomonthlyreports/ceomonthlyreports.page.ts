import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AIREIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-ceomonthlyreports',
  templateUrl: './ceomonthlyreports.page.html',
  styleUrls: ['./ceomonthlyreports.page.scss'],
})
export class CeomonthlyreportsPage implements OnInit {

  userlist = JSON.parse(localStorage.getItem("userlist"));

  constructor(private router: Router, private zone: NgZone, private commonservice: AIREIService) { }

  ngOnInit() {
  }

  profitloss()
  {
    this.router.navigate(["/profitandloss"]);
  }

  balancesheet()
  {
    this.router.navigate(["/balancesheet"]);
  } 
  
  productiontally()
  {
    this.router.navigate(["/productiontallreport"]);
  }

  debtorsaccount()
  {
    this.router.navigate(["/debtorsaccountreport"]);
  }

  directcost()
  {
    this.router.navigate(["/directcostreport"]);
  }

  ffbcreditormonthly()
  {
    this.router.navigate(["/monthlyffbcreditorsreport"]);
  }

  staffovertime()
  {
    this.router.navigate(["/staffovertime"]);
  }

  staffsalary()
  {
    this.router.navigate(["/staffsalary"]);
  }

  wageslocal()
  {
    this.router.navigate(["/wageslocal"]);
  }

  wagesforeign()
  {
    this.router.navigate(["/wagesforeign"]);
  }

  exordinaryexpense()
  {
    this.router.navigate(["/exttraordinaryexpensereport"]);
  }

  expense()
  {
    this.router.navigate(["/dailyexpensereport"]);
  }

  repairandmaintenace()
  {
    this.router.navigate(["/monthlyrepairmaintenancereport"]);
  }

  palletplant()
  {
    this.router.navigate(["/palletplantreport"]);
  }

  storecreditor()
  {
    this.router.navigate(["/storecreditorreport"]);
  }

  sealsexpense()
  {
    this.router.navigate(["/sealsexpensereport"]);
  }

  financialstatement()
  {
    this.router.navigate(["/financialstatementreport"]);
  }

  prepayment()
  {
    this.router.navigate(["/prepaymentreport"]);
  }

  trialbalance()
  {
    this.router.navigate(["/trialbalancereport"]);
  }

  directcostlubricant()
  {
    this.router.navigate(["/directcostlubricantreport"]);
  }

  accruedcharges()
  {
    this.router.navigate(["/accuredchargesreport"]);
  }

  abstractexpense()
  {
    this.router.navigate(["/abstractexpensereport"]);
  }

  laboratorychemical()
  {
    this.router.navigate(["/laboratorychemicalreport"]);
  }

  consumables()
  {
    this.router.navigate(["/consumablesreport"]);
  }

  notebalancesheet()
  {
    this.router.navigate(["/notebalancesheetreport"]);
  }

  productionturnover()
  {
    this.router.navigate(["/productionturnoverreport"]);
  }

  diesoline()
  {
    this.router.navigate(["/diesolineconsumptionreport"]);
  }

  lubricantconsumption()
  {
    this.router.navigate(["/lubricantconsumptionreport"]);
  }

  factorychemicalconsumption()
  {
    this.router.navigate(["/factorychemicalconsumptionreport"]);
  }

  closingstock()
  {
    this.router.navigate(["/closingstockreport"]);
  }

  vehiclehire()
  {
    this.router.navigate(["/vehiclehirereport"]);
  }

  ffbpurchasecost()
  {
    this.router.navigate(["/ffbpurchasecostreport"]);
  }
  
  journalentry()
  {
    this.router.navigate(["/journalentryreport"]);
  }
}
