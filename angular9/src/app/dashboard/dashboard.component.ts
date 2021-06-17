import {
  Component,
  OnInit,
  AfterContentInit,
  ElementRef,
  ViewChild,
  NgZone,
} from '@angular/core';
import { ApiService } from '../api.service';
import {
  StatsData, areaData, violationCountGraphData1, distanceViolationData1,
  violationCountGraphData2, distanceViolationData2, areaLocality, locality, demandSupply, lineChart
} from '../stats-data';
import * as Highcharts from 'highcharts';
import { ToastService } from '../_services/toast.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterContentInit {
  public graphicalData: StatsData[];
  isChangeLocation: boolean;
  public areaData: StatsData[] = areaData;
  public areaLocality: locality[] = areaLocality;
  public selectedLocality: locality;
  public selectedArea: StatsData;
  currentVideo: string;
  areaVideo1: string;
  areaVideo2: string;
  areaVideo3: string;
  isVideoLoaded: boolean;
  isPlay = false;
  isCreateAlert: boolean;
  violationLevel;
  islocationChanged: Boolean;
  isPhoneDisabled = true;
  isEmailDisabled = false;
  pipeblockage;
  pipetimespan;
  flowrate;
  covidSummary;
  isShareOpen: boolean;
  isShareOpen1: boolean;
  isActive;
  isActiveShare;
  closeResult = '';
  today = new Date();
  todaysDataTime = '';
  lineChart1: {};
  barGraph1: {};
  lineChart2: {};
  barGraph2: {};
  selectedLineChart: {};
  selectedGraph: {};
  demandSupplyGraph: {};
  blockageSupplyGraph: {};
  Highcharts = Highcharts;

  //map
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  //@ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;

  constructor(private apiService: ApiService, public toastService: ToastService, private modalService: NgbModal, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
    this.isChangeLocation = false;
    this.currentVideo = '../../assets/video/PipeFootage2.mp4';
    this.areaVideo1 = '../../assets/video/PipeFootage3.mp4';
    this.areaVideo2 = '../../assets/video/PipeFootage1.mp4'; 
    this.areaVideo3 = '../../assets/video/PipeFootage4.mp4';
    this.isVideoLoaded = true;
    this.pipeblockage = 80;
    this.pipetimespan = 2;
    this.flowrate = 70;
    this.isShareOpen = false;
    this.isShareOpen1 = false;
    this.islocationChanged =false;
    this.todaysDataTime = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }

  showSuccess(headerText, successMsg) {
    this.toastService.show(successMsg, {
      classname: 'bg-success text-light',
      delay: 3000,
      autohide: true,
      headertext: headerText
    });
  }

  showError() {
    this.toastService.show('Flow rate is increasing in this area. Would you like to share this information with higher authorities', {
      classname: 'bg-danger text-light',
      delay: 2000,
      autohide: false,
      headertext: `Flow Rate Exceeded ALERT !!!`
    });
  }

  showAlert(){
    this.toastService.show('Maintenance required in Najafgarh. For more information, visit the area information.',{
      classname: 'bg-danger text-light test',
      titleClass: 'maintenanceAlert',
      messageClass: 'maintenanceAlert',
      delay: 2000,
      autohide: false,
      headertext: 'Maintenance ALERT !'
    });
  }

  //map
   private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  } 

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  public ngOnInit(): void {
    this.showError();
    this.showAlert();
    //map
    this.setCurrentLocation();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

    // mockData
    //  this.graphicalData = mockData;
    this.selectedArea = areaData[1];
    this.lineChart1 = violationCountGraphData1;
    this.barGraph1 = distanceViolationData1;
    this.lineChart2 = violationCountGraphData2;
    this.barGraph2 = distanceViolationData2;
    this.selectedLineChart = this.lineChart1;
    this.blockageSupplyGraph = lineChart;
    this.demandSupplyGraph = demandSupply;
    this.selectedGraph = this.barGraph1;

    this.apiService.getData().subscribe((data: StatsData[]) => {
      console.log(data);
      this.graphicalData = data;
    });
    this.selectedLineChart = this.selectedArea === areaData[1] ? this.lineChart2 : this.lineChart1;
    this.selectedGraph = this.selectedArea === areaData[1] ? this.barGraph2 : this.barGraph1;

    this.apiService.getCovidHighlight().subscribe((data) => {
      const res = data;
      this.covidSummary = data;
    });
  }

  doughnutPieChartData = [
    {
      data: [172, 47, 52, 3],
    }
  ];

  doughnutPieChartLabels = ["Domestic", "Industrial, Comercial, Community", "Embassies, hotels, airports, railways, floating population", "Fire Stations"];

  doughnutPieChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  doughnutPieChartColors = [
    {
      backgroundColor: [
        '#25425F',
        '#008A09',
        '#E6B800',
        '#D9182D'
      ],
      borderColor: [
        'rgba(255, 255, 255, 1)'
      ]
    }
  ];


  

  ngAfterContentInit() { }

  openChangeLocationPopup() {
    this.isChangeLocation = true;
    this.islocationChanged = true;
  }

  closeChangeLocationPopup() {
    this.isChangeLocation = false;
  }
  openCreateAlertPopup() {
    this.isCreateAlert = true;
  }

  closeCreateAlertPopup() {
    this.isCreateAlert = false;
  }

  createAlert() {
    this.showSuccess('Success', 'Alert created sucessfully');
    this.closeCreateAlertPopup();
  }



  shareNow() {
    this.showSuccess('Success', 'Shared successfully !');
  }

  shareIt() {
    this.isShareOpen = !this.isShareOpen;
  }

  shareIt1() {
    this.isShareOpen1 = !this.isShareOpen1;
  }

  closeShareModal() {
    this.isShareOpen = false;
  }

  changeLocation() {
    this.selectedArea = this.selectedArea === areaData[1] ? areaData[0] : areaData[1];
    this.selectedLineChart = this.selectedArea === areaData[1] ? this.lineChart2 : this.lineChart1;
    this.selectedGraph = this.selectedArea === areaData[1] ? this.barGraph2 : this.barGraph1;
    this.switchVideo();
    this.closeChangeLocationPopup();
    this.showSuccess('Success', 'Location has been changed.');
  }

  enablePhoneTextBox(this) {
    this.isPhoneDisabled = false;
  }

  enableEmailTextBox(this) {
    this.isEmailDisabled = false;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  switchVideo() {
    this.isVideoLoaded = false;
    if (this.selectedArea === areaData[0]) {
      this.isVideoLoaded = true;
      this.currentVideo = '../../assets/video/PipeFootage1.mp4';
    } else {
      this.currentVideo = '../../assets/video/PipeFootage1.mp4';
    }
  }

  
  
}
