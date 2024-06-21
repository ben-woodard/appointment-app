import { Component, OnInit } from '@angular/core';
import Appointment from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{

  appointments : Appointment[] = []
  newAppointmentTitle : string = '';
  newAppointmentDate : Date = new Date();
  id: number = 1;

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments")

    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addAppointment() {
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment : Appointment = {
        id: this.id,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.id++
      this.appointments.push(newAppointment)
      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }

  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1)
  }


}
