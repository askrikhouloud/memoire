import { Component ,OnInit} from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent  implements OnInit {
  formationList: any[] = [];
  constructor(private service: FormationService) {}
  ngOnInit(): void {
    this.getAllformation();

}  
  getAllformation() {
    this.service.getAllFormation().subscribe(
      (res:any) => {
        this.formationList = res.data;
        console.log(this.formationList)
      },

      (error) => {
        console.log(error);
      }
    );
  }

  deleteFormation(formation: any) {
    const model = {
      idFormation: formation.idFormation,
    };

    console.log(model);

    this.service.deleteFormation(model).subscribe(
      (result) => {
        console.log(result);
        let index = this.formationList.indexOf(formation);
        this.formationList.splice(index, 1);
      },
    
    );
  }
}
