import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonService } from '../person.service';
import { Person, User } from '../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  empForm: FormGroup;
  showModal: boolean = false;
  editMode: boolean = false;
  persons: User[];

  constructor(private fb: FormBuilder, private empService: PersonService) {
    this.getPersons();
    this.persons = [];
    this.empForm = this.fb.group({
      _id: [''],
      name: ['srujan', Validators.required],
      age: ['20', Validators.required],
      gender: ['male', Validators.required],
      mobileNumber: ['9951293739', Validators.required],
      __v: ['number', Validators.required],
    });
  }

  getPersons() {
    this.empService.GetPersonList().subscribe((res: any) => {
      this.persons = res.users;
    });
  }

  onEmpSubmit() {
    if (this.empForm.valid) {
      if (this.editMode) {
        this.empService.UpdatePerson(this.empForm.value).subscribe(
          (res) => {
            this.getPersons();
            this.showModal=false
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.empService.AddPerson(this.empForm.value).subscribe(
          (res) => {
            this.getPersons();
            this.onCloseModal();
          },
          (err) => {
            console.log(err);
          }
        );
        console.log(this.empForm.value);
      }
    }
  }

  onAddPerson() {
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
  }

  onDeletePerson(id: string) {
    if (confirm('Are you sure you want to delete this person')) {
      this.empService.DeletePerson(id).subscribe(
        (res) => {
          console.log(res);
          this.getPersons();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  onEditPerson(person: User) {
    this.editMode = true;
    this.showModal = true;
    this.empForm.patchValue(person);
  }
}
