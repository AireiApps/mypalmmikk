import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoilerServiceService } from 'src/app/services/boiler-service/boiler-service.service';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { AIREIService } from 'src/app/api/api.service';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.page.html',
  styleUrls: ['./supplier-update.page.scss'],
})
export class SupplierUpdatePage implements OnInit {
  detailArr = [];
  userlist = JSON.parse(localStorage.getItem('userlist'));
  detailValue;
  supplierdetailValue;
  supplierform;

  constructor(private route: ActivatedRoute, private service: BoilerServiceService, private commonservice: AIREIService, private fb: FormBuilder) {
    const detailform = this.route.snapshot.paramMap.get('item');
    this.detailValue = JSON.parse(detailform);
    console.log(this.detailValue);

    this.supplierform = this.fb.group({
      itemRows: this.fb.array([])
    });
  }

  ngAfterViewInit(): void {
    this.getRecentSuppliersDetail();
  }

  ionViewDidEnter() {
    this.getRecentSuppliersDetail();
  }

  onChangePrice(event, index) {
    console.log(event.target.value);
    let eachval = this.supplierform.get("itemRows").at(index) as FormGroup
    console.log(eachval.value);
    let total_price = eachval.value.qty * eachval.value.price;
    console.log(total_price);

    eachval.patchValue({
      total: total_price,
    });

  }

  get formArr() {
    return this.supplierform.get('itemRows') as FormArray;
  }

  initItemRows(value) {
    return this.fb.group({
      sorDetId: new FormControl(value.sorDetId, Validators.required),
      item: new FormControl(value.partsName, Validators.required),
      station: new FormControl(value.stationName, Validators.required),
      unit: new FormControl(value.unit, Validators.required),
      price: new FormControl(value.price, Validators.required),
      qty: new FormControl(value.qty, Validators.required),
      total: new FormControl(value.total, Validators.required),
    });
  }

  getRecentSuppliersDetail() {
    const req = {
      'acc_id': this.userlist.accId,
      'quote_id': this.detailValue.quoteId,
      'millcode': this.userlist.millcode
    };

    this.service.supplierDetail(req).then(result => {
      let resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {

        const arr = this.supplierform.controls.itemRows as FormArray;
        arr.controls = [];

        console.log(resultdata.data);
        console.log(resultdata.data.length);

        for (let i = 0; i < resultdata.data.length; i++) {
          const eachitem = resultdata.data[i];
          let total_price = eachitem.qty * eachitem.price;
          eachitem['total'] = total_price;
          // this.initItemRows(eachitem);
          this.formArr.push(this.initItemRows(eachitem));

        }

        console.log(this.supplierform.value.itemRows);
      }
    });
  }


  ngOnInit() {
  }

  // http://103.27.72.29:8080/supplier_quote_update?acc_id=101&quote_id=2&Qty=1,2&sor_det_id=18,19&supplier_price=200,100
  btn_save() {
    let qty_Arr = [];
    let sor_det_id_Arr = [];
    let supplier_price_Arr = [];

    const control = (
      this.supplierform.get('itemRows')
    ) as FormArray;

    for (let i = 0; i < control.length; i++) {


      // tslint:disable-next-line: no-angle-bracket-type-assertion
      const controlsub = <FormGroup>(
        this.supplierform.get(['itemRows', i])
      );

      // const eachitem = JSON.parse(controlsub.get('item').value);
      // const eachstation = JSON.parse(controlsub.get('station').value);
      // const eachlocation = JSON.parse(controlsub.get('unit').value);
      const eachprice = controlsub.get('price').value;
      const eachqty = controlsub.get('qty').value;
      const eachtotal = controlsub.get('total').value;
      const sorDetId = controlsub.get('sorDetId').value;
      qty_Arr.push(eachqty);
      sor_det_id_Arr.push(sorDetId);
      supplier_price_Arr.push(eachprice);

    }

    const req = {
      acc_id: this.userlist.accId,
      quote_id: this.detailValue.quoteId,
      millcode: this.userlist.millcode,
      supplier_price: supplier_price_Arr.join(),
      Qty: qty_Arr.join(),
      sor_det_id: sor_det_id_Arr.join(),

    };


    this.service.insertBoilerUpdate(req).then(result => {
      var resultdata: any;
      resultdata = result;
      // this.profileForm.reset();
      if (resultdata.httpcode == 200) {
        this.getRecentSuppliersDetail();

        this.commonservice.presentToast('Saved Successfully!');
      } else {
        this.commonservice.presentToast('Saved Failed!');
      }
    });
  }
}
