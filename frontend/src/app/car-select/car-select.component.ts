import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { GetCarsService } from 'app/_services/get-cars.service';
import { LocationHeaderComponent } from 'app/location-header/location-header.component';
import { RouterLink, Router, ActivatedRoute, ParamMap } from '@angular/router';


declare var $: any;
@Component({
  selector: "app-car-select",
  templateUrl: "./car-select.component.html",
  styleUrls: ["./car-select.component.css"]
})
export class CarSelectComponent implements OnInit {
  flag: boolean = false;
  hatchbackFilter: boolean = false;
  sedanFilter: boolean = false;
  suvFilter: boolean = false;
  miniSUVFilter: boolean = false;
  autoTransmissionFilter: boolean = false;
  manualTransmissionFilter: boolean = false;
  petrolFilter: boolean = false;
  dieselFilter: boolean = false;
  withoutFuel: boolean = true;

  transmissionType: string = "";
  fuelType: string = "";
  carType: string[] = [];

  public cars: any = [];
  carId: number;
  public package;
  duplicateCarList: any[];
  showerr : boolean = false;
  

  constructor( private getCarsService: GetCarsService, private router: Router) { 

    // translate.addLangs(['en','fr','de','hi','pj'])
    // translate.setDefaultLang('en');
    // translate.use('en');
  }
  @ViewChild(LocationHeaderComponent, { static: false }) locationHeader: LocationHeaderComponent;

  ngOnInit() {
    $(function () {
      $("#sortMenu a").click(function () {
        $("#selected").text($(this).text());
        $("#selected").val($(this).text());
      });
    });

    this.getCarsService.getAllCars()
      .subscribe(data => {
        this.cars = data;
        this.duplicateCarList = data;
        if(this.cars.length == 0){
            this.showerr = true;
        }
      });

  }

  filter60Color() {
    document.getElementById("60km").style.backgroundColor = "#3aa5c5";
    document.getElementById("60km").style.color = "white";
    document.getElementById("120km").style.backgroundColor = "white";
    document.getElementById("120km").style.color = "black";
    document.getElementById("180km").style.backgroundColor = "white";
    document.getElementById("180km").style.color = "black";
    this.getCarsService.setCarPackage('60 kms');
  }

  filter120Color() {
    document.getElementById("60km").style.backgroundColor = "white";
    document.getElementById("120km").style.backgroundColor = "#3aa5c5";
    document.getElementById("120km").style.color = "white";
    document.getElementById("180km").style.backgroundColor = "white";
    document.getElementById("60km").style.color = "black";
    document.getElementById("180km").style.color = "black";
    this.getCarsService.setCarPackage('120 kms');
  }

  filter180Color() {
    document.getElementById("60km").style.backgroundColor = "white";
    document.getElementById("180km").style.backgroundColor = "#3aa5c5";
    document.getElementById("180km").style.color = "white";
    document.getElementById("120km").style.backgroundColor = "white";
    document.getElementById("60km").style.color = "black";
    document.getElementById("120km").style.color = "black";
    this.getCarsService.setCarPackage('180 kms');
  }

  onWithoutFuelSelect() {
    this.flag = false;
    document.getElementById("withoutFuel").style.backgroundColor = "#3aa5c5";
    document.getElementById("withoutFuel").style.color = "white";
    document.getElementById("withFuel").style.backgroundColor = "white";
    document.getElementById("withFuel").style.color = "black";
  }

  onWithFuelSelect() {
    this.flag = true;
    document.getElementById("withFuel").style.backgroundColor = "#3aa5c5";
    document.getElementById("withFuel").style.color = "white";
    document.getElementById("withoutFuel").style.backgroundColor = "white";
    document.getElementById("withoutFuel").style.color = "black";
  }

  toggleHatchback() {
    if (this.hatchbackFilter) {
      this.hatchbackFilter = false;

      let indexType = this.carType.indexOf("Hatchback");
      this.carType.splice(indexType, 1);
      document.getElementById("hatchback").style.backgroundColor = "white";
      document.getElementById("hatchback").style.color = "black";
    } else {
      this.hatchbackFilter = true;
      this.carType.push("Hatchback");
      document.getElementById("hatchback").style.backgroundColor = "#3aa5c5";
      document.getElementById("hatchback").style.color = "white";
    }
  }

  hideHatchback() {
    let indexType = this.carType.indexOf("Hatchback");
    this.carType.splice(indexType, 1);
    this.hatchbackFilter = false;
    document.getElementById("hatchback").style.backgroundColor = "white";
    document.getElementById("hatchback").style.color = "black";
  }

  toggleSedan() {
    if (this.sedanFilter) {

      var indexType = this.carType.indexOf("Sedan");
      this.carType.splice(indexType, 1);
      this.sedanFilter = false;
      document.getElementById("sedan").style.backgroundColor = "white";
      document.getElementById("sedan").style.color = "black";
    } else {
      this.sedanFilter = true;
      this.carType.push("Sedan");
      document.getElementById("sedan").style.backgroundColor = "#3aa5c5";
      document.getElementById("sedan").style.color = "white";
    }
  }

  hideSedan() {
    this.sedanFilter = false;
    document.getElementById("sedan").style.backgroundColor = "white";
    document.getElementById("sedan").style.color = "black";
  }

  toggleSUV() {
    if (this.suvFilter) {

      var indexType = this.carType.indexOf("SUV");
      this.carType.splice(indexType, 1);
      this.suvFilter = false;
      document.getElementById("suv").style.backgroundColor = "white";
      document.getElementById("suv").style.color = "black";
    } else {
      this.suvFilter = true;
      this.carType.push("SUV");
      document.getElementById("suv").style.backgroundColor = "#3aa5c5";
      document.getElementById("suv").style.color = "white";
    }
  }

  hideSUV() {
    this.suvFilter = false;
    document.getElementById("suv").style.backgroundColor = "white";
    document.getElementById("suv").style.color = "black";
  }

  toggleMiniSUV() {
    if (this.miniSUVFilter) {
      var indexType = this.carType.indexOf("Mini SUV");
      this.carType.splice(indexType, 1);
      this.miniSUVFilter = false;
      document.getElementById("miniSuv").style.backgroundColor = "white";
      document.getElementById("miniSuv").style.color = "black";
    } else {
      this.miniSUVFilter = true;
      this.carType.push("Mini SUV");

      document.getElementById("miniSuv").style.backgroundColor = "#3aa5c5";
      document.getElementById("miniSuv").style.color = "white";
    }
  }

  hideMiniSUV() {
    this.miniSUVFilter = false;
    document.getElementById("miniSuv").style.backgroundColor = "white";
    document.getElementById("miniSuv").style.color = "black";
  }

  displayPetrol() {
    this.petrolFilter = true;
    this.dieselFilter = false;
    this.fuelType = "Petrol";
    document.getElementById("petrol").style.backgroundColor = "#3aa5c5";
    document.getElementById("petrol").style.color = "white";
    document.getElementById("diesel").style.backgroundColor = "white";
    document.getElementById("diesel").style.color = "black";
  }

  hidePetrol() {
    this.petrolFilter = false;
    this.fuelType = "";
    document.getElementById("petrol").style.backgroundColor = "white";
    document.getElementById("petrol").style.color = "black";
  }

  displayDiesel() {
    this.petrolFilter = false;
    this.dieselFilter = true;
    this.fuelType = "Diesel";
    document.getElementById("diesel").style.backgroundColor = "#3aa5c5";
    document.getElementById("diesel").style.color = "white";
    document.getElementById("petrol").style.backgroundColor = "white";
    document.getElementById("petrol").style.color = "black";
  }

  hideDiesel() {
    this.fuelType = "";
    this.dieselFilter = false;
    document.getElementById("diesel").style.backgroundColor = "white";
    document.getElementById("diesel").style.color = "black";
  }
  displayManual() {
    this.manualTransmissionFilter = true;
    this.autoTransmissionFilter = false;
    this.transmissionType = "Manual";
    document.getElementById("manual").style.backgroundColor = "#3aa5c5";
    document.getElementById("manual").style.color = "white";
    document.getElementById("automatic").style.backgroundColor = "white";
    document.getElementById("automatic").style.color = "black";
  }
  hideManual() {
    this.manualTransmissionFilter = false;
    this.transmissionType = "";
    document.getElementById("manual").style.backgroundColor = "white";
    document.getElementById("manual").style.color = "black";
  }

  displayAutomatic() {
    this.autoTransmissionFilter = true;
    this.manualTransmissionFilter = false;
    this.transmissionType = "Automatic";
    document.getElementById("manual").style.backgroundColor = "white";
    document.getElementById("manual").style.color = "black";
    document.getElementById("automatic").style.backgroundColor = "#3aa5c5";
    document.getElementById("automatic").style.color = "white";
  }

  hideAutomatic() {
    this.autoTransmissionFilter = false;
    this.transmissionType = "";
    document.getElementById("automatic").style.backgroundColor = "white";
    document.getElementById("automatic").style.color = "black";
  }

  clearAll() {
    this.hideAutomatic();
    this.hideDiesel();
    this.hideHatchback();
    this.hideManual();
    this.hideMiniSUV();
    this.hidePetrol();
    this.hideSUV();
    this.hideSedan();
    this.fuelType = "";
    this.transmissionType = "";
    this.cars = this.duplicateCarList;
    this.carType = [];
    this.carsTemp = [];
  }
  GetSortOrderAsc(key) {
    return (a, b) => {
      if (a[key] > b[key]) {
        return 1;
      } else if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    }
  }

  GetSortOrderDesc(key) {
    return (a, b) => {
      if (a[key] < b[key]) {
        return 1;
      } else if (a[key] > b[key]) {
        return -1;
      }
      return 0;
    }
  }
  sortByPriceAsc() {
    this.cars.sort(this.GetSortOrderAsc("bookingPrice"));
  }
  sortByPriceDesc() {
    this.cars.sort(this.GetSortOrderDesc("bookingPrice"));
  }

  carsTemp: any[] = [];
  filterApply() {
    this.cars = this.duplicateCarList;
    this.carsTemp = [];
    if (this.carType.length != 0) {


      for (let m = 0; m < this.carType.length; m++) {
        if (this.carType[m] == "Hatchback") {
          if (this.fuelType == "Petrol") {
            this.carsTemp = [];
            if (this.transmissionType == "") {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Petrol" && this.cars[i].carType == "Hatchback") {
                  this.carsTemp.push(this.cars[i]);


                }
              }


            }
            else if (this.transmissionType == "Manual") {
              this.carsTemp = [];
              for (let i = 0; i < this.cars.length; i++) {

                if (this.cars[i].fuelType == "Petrol" && this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "Hatchback") {
                  this.carsTemp.push(this.cars[i]);
                  console.log("cars temp:" + this.carsTemp.length)
                }
              }

            } else if (this.transmissionType == "Automatic") {
              this.carsTemp = [];
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Petrol" && this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "Hatchback") {
                  this.carsTemp.push(this.cars[i]);

                }
              }
            }

          }
          else if (this.fuelType == "Diesel") {
            if (this.transmissionType == "") {
              this.carsTemp = [];
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].carType == "Hatchback") {
                  this.carsTemp.push(this.cars[i]);
                }
              }

            }
            else if (this.transmissionType == "Manual") {
              this.carsTemp = [];
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "Hatchback") {
                  this.carsTemp.push(this.cars[i]);
                }
              }


            } else if (this.transmissionType == "Automatic") {
              this.carsTemp = [];
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "Hatchback") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
          }
          else {
            if (this.transmissionType == "Manual") {
              this.carsTemp = [];
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "Hatchback") {
                  this.carsTemp.push(this.cars[i]);
                }
              }

            } else if (this.transmissionType == "Automatic") {
              this.carsTemp = [];
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "Hatchback") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
            else {
              this.carsTemp = [];
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].carType == "Hatchback") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
          }
        }

        if (this.carType[m] == "Sedan") {
          if (this.fuelType == "Petrol") {

            if (this.transmissionType == "") {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Petrol" && this.cars[i].carType == "Sedan") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
            else if (this.transmissionType == "Manual") {

              for (let i = 0; i < this.cars.length; i++) {

                if (this.cars[i].fuelType == "Petrol" && this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "Sedan") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            } else if (this.transmissionType == "Automatic") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Petrol" && this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "Sedan") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
          }
          else if (this.fuelType == "Diesel") {
            if (this.transmissionType == "") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].carType == "Sedan") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
            else if (this.transmissionType == "Manual") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "Sedan") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            } else if (this.transmissionType == "Automatic") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "Sedan") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
          }
          else {
            if (this.transmissionType == "Manual") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "Sedan") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            } else if (this.transmissionType == "Automatic") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "Sedan") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
            else {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].carType == "Sedan") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
          }
        }

        if (this.carType[m] == "SUV") {
          if (this.fuelType == "Petrol") {

            if (this.transmissionType == "") {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Petrol" && this.cars[i].carType == "SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }

            else if (this.transmissionType == "Manual") {
              for (let i = 0; i < this.cars.length; i++) {

                if (this.cars[i].fuelType == "Petrol" && this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            } 
            else if (this.transmissionType == "Automatic") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Petrol" && this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
          }
          else if (this.fuelType == "Diesel") {
            if (this.transmissionType == "") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].carType == "SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }

            }
            else if (this.transmissionType == "Manual") {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            } 
            else if (this.transmissionType == "Automatic") {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
          }

          else {
            if (this.transmissionType == "Manual") {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            } 
            else if (this.transmissionType == "Automatic") {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
            else {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].carType == "SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
          }
        }

        if (this.carType[m] == "Mini SUV") {
          if (this.fuelType == "Petrol") {

            if (this.transmissionType == "") {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Petrol" && this.cars[i].carType == "Mini SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }

            else if (this.transmissionType == "Manual") {
              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Petrol" && this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "Mini SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            } else if (this.transmissionType == "Automatic") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Petrol" && this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "Mini SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }

          }
          else if (this.fuelType == "Diesel") {
            if (this.transmissionType == "") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].carType == "Mini SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
            else if (this.transmissionType == "Manual") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "Mini SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            } else if (this.transmissionType == "Automatic") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].fuelType == "Diesel" && this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "Mini SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
          }
          else {
            if (this.transmissionType == "Manual") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].transmissionType == "Manual" && this.cars[i].carType == "Mini SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            } else if (this.transmissionType == "Automatic") {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].transmissionType == "Automatic" && this.cars[i].carType == "Mini SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }

            }
            else {

              for (let i = 0; i < this.cars.length; i++) {
                if (this.cars[i].carType == "Mini SUV") {
                  this.carsTemp.push(this.cars[i]);
                }
              }
            }
          }
        }
      }
      this.cars = this.carsTemp;
    }

    else {
      console.log("car type:" + this.carType.length)
      if (this.fuelType == "Petrol") {

        if (this.transmissionType == "") {
          for (let i = 0, j = 0; i < this.cars.length; i++) {
            if (this.cars[i].fuelType == "Petrol") {
              this.carsTemp[j] = this.cars[i];
              j = j + 1;

            }
          }
          //console.log("petrol:"+this.carsTemp.length)
          this.cars = [];

          this.cars = this.carsTemp;
        }
        else if (this.transmissionType == "Manual") {
          for (let i = 0, j = 0; i < this.cars.length; i++) {
            if (this.cars[i].fuelType == "Petrol" && this.cars[i].transmissionType == "Manual") {
              this.carsTemp[j] = this.cars[i];
              j = j + 1;
            }
          }
          this.cars = [];

          this.cars = this.carsTemp;

        } else if (this.transmissionType == "Automatic") {
          for (let i = 0, j = 0; i < this.cars.length; i++) {
            if (this.cars[i].fuelType == "Petrol" && this.cars[i].transmissionType == "Automatic") {
              this.carsTemp[j] = this.cars[i];
              j = j + 1;
            }
          }
          this.cars = [];

          this.cars = this.carsTemp;
        }

      }
      else if (this.fuelType == "Diesel") {
        if (this.transmissionType == "") {
          for (let i = 0, j = 0; i < this.cars.length; i++) {
            if (this.cars[i].fuelType == "Diesel") {
              this.carsTemp[j] = this.cars[i];
              j = j + 1;

            }
          }
          //console.log("petrol:"+this.carsTemp.length)
          this.cars = [];

          this.cars = this.carsTemp;
        }
        else if (this.transmissionType == "Manual") {
          for (let i = 0, j = 0; i < this.cars.length; i++) {
            if (this.cars[i].fuelType == "Diesel" && this.cars[i].transmissionType == "Manual") {
              this.carsTemp[j] = this.cars[i];
              j = j + 1;
            }
          }
          this.cars = [];

          this.cars = this.carsTemp;

        } else if (this.transmissionType == "Automatic") {
          for (let i = 0, j = 0; i < this.cars.length; i++) {
            if (this.cars[i].fuelType == "Diesel" && this.cars[i].transmissionType == "Automatic") {
              this.carsTemp[j] = this.cars[i];
              j = j + 1;
            }
          }
          this.cars = [];

          this.cars = this.carsTemp;
        }

      }
      else {
        if (this.transmissionType == "Manual") {
          for (let i = 0, j = 0; i < this.cars.length; i++) {
            if (this.cars[i].transmissionType == "Manual") {
              this.carsTemp[j] = this.cars[i];
              j = j + 1;
            }
          }
          this.cars = [];

          this.cars = this.carsTemp;

        } else {
          for (let i = 0, j = 0; i < this.cars.length; i++) {
            if (this.cars[i].transmissionType == "Automatic") {
              this.carsTemp[j] = this.cars[i];
              j = j + 1;
            }
          }
          this.cars = [];
          this.cars = this.carsTemp;
        }
      }
    }
  }

  runValidation(carId: number) {
    if (this.locationHeader.valuePickup != null && this.locationHeader.valueDrop != null) {
      this.router.navigateByUrl('/car/' + carId);
    }
    else {
      window.alert("Please select Pickup and Drop Date first")
    }
  }

   getAvailableCar(){
     
    }

}





