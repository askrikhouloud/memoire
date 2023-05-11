import { Component ,OnInit} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {  FormationService } from 'src/app/services/formation.service';



@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent   {
  formationForm!: FormGroup;

    id: any;
  formation: any;
  idFormation: any;
    constructor(
      private fb: FormBuilder,
      private router: Router,
      private route: ActivatedRoute,
      private service: FormationService
    ) {
      let formControls = {
        titre: new FormControl('', [Validators.required]),
        datedébut: new FormControl('', [Validators.required]),
        datefin: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
    
      };
      this.formationForm = this.fb.group(formControls);
    }
  
    ngOnInit(): void {
      let idFormation = this.route.snapshot.params['idFormation'];
      this.id = idFormation;
      console.log(this.id);
      console.log(idFormation);
  
      this.service.getbyId(idFormation).subscribe((result) => {
        let formation = result;
        console.log(formation);
        this.formationForm.patchValue({
          titre: formation.titre,
           datedébut: formation.datedébut,
           datefin: formation.datefin,
           description: formation.description,
        
        });
      });
    }
  
    updateformation() {
      let data = this.formationForm.value;
      console.log(data);
  
      const formation = {
        idFormation: this.idFormation,
        titre: data.titre,
        datedébut: data.datedébut,
        datefin: data.datefin,
        description: data.description,
       
  
      };
      console.log(formation);
  
      this.service.updateformation(formation).subscribe((res) => {
        console.log(res);
  
        alert('formation est Modifié');
  
        this.router.navigate(['/formation']);
      });
    }
  }
  
  


