import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { Step6SimpleDatatable } from '../step6-simple-datatable/step6-simple-datatable';

@Component({
  selector: 'app-step7-component-output',
  imports: [Step6SimpleDatatable],
  templateUrl: './step7-component-output.html',
  styleUrl: './step7-component-output.css',
})
export class Step7ComponentOutput {
      persons: Person[] = [
  {"firstname":"Franciska","lastname":"Jorin","email":"fjorin0@youtu.be"},
  {"firstname":"Ric","lastname":"Dominguez","email":"rdominguez1@techcrunch.com"},
  {"firstname":"Dulce","lastname":"Enderby","email":"denderby2@typepad.com"},
  {"firstname":"Betteanne","lastname":"MacKinnon","email":"bmackinnon3@dagondesign.com"},
  {"firstname":"Irene","lastname":"Gerriet","email":"igerriet4@creativecommons.org"},
  {"firstname":"Loreen","lastname":"Braunstein","email":"lbraunstein5@nymag.com"},
  {"firstname":"Baxy","lastname":"Honeyghan","email":"bhoneyghan6@istockphoto.com"},
  {"firstname":"Ker","lastname":"Onion","email":"konion7@npr.org"},
  {"firstname":"Carmelia","lastname":"Armin","email":"carmin8@sciencedirect.com"},
  {"firstname":"Janella","lastname":"Monroe","email":"jmonroe9@addtoany.com"},
  {"firstname":"Penelopa","lastname":"Saur","email":"psaura@yandex.ru"},
  {"firstname":"Opal","lastname":"Ambrogelli","email":"oambrogellib@sphinn.com"},
  {"firstname":"Barbara","lastname":"Dixey","email":"bdixeyc@discovery.com"},
  {"firstname":"Sasha","lastname":"Moyer","email":"smoyerd@amazon.com"},
  {"firstname":"Bartel","lastname":"Sallows","email":"bsallowse@rakuten.co.jp"},
  {"firstname":"Stacy","lastname":"Frere","email":"sfreref@mashable.com"},
  {"firstname":"Gerick","lastname":"Ritchard","email":"gritchardg@biblegateway.com"},
  {"firstname":"Fae","lastname":"Bampkin","email":"fbampkinh@ft.com"},
  {"firstname":"Frannie","lastname":"Woodthorpe","email":"fwoodthorpei@addthis.com"},
  {"firstname":"Farica","lastname":"Sebert","email":"fsebertj@wiley.com"}
]

  showPersonClicked(data:Person){
    console.log("Step 7", data);
  }
}
