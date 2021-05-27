import { Component, OnInit, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(@Inject(TranslateService) public translate: TranslateService) {
    translate.addLangs(['en','ur','hi','pu'])
    translate.setDefaultLang('en');
    translate.use('en');
}




  ngOnInit() {
  }

}