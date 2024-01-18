import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ListComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  listProducts: any[] = [];
  isLoaded:boolean = false;

  constructor(
    private httpService: HttpService
  ){}

  ngOnInit(): void {
  }
  
  getRow() {
    this.isLoaded = true;
    this.httpService.getProducts().subscribe(result => {
      this.listProducts = result.products;
    })
  }
}
