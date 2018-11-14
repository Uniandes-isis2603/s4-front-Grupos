import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../administrador.service';
import { ActivatedRoute } from '@angular/router';
import { Administrador } from '../administrador';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {
/**
     * Constructor for the component
     * @param administradorService The administrador's services provider
     */
  constructor(private administradorService:AdministradorService) { }
  /**
     * The list of administradores which belong to the GruposDeInteres
     */
  administradores:Administrador[];
/**
     * Asks the service to update the list of administradores
     */
  getAdministradores():void{
    this.administradorService.getAdministradores().subscribe((administradores)=>this.administradores=administradores)
  }
/**
     * This will initialize the component by retrieving the list of administradores from the service
     * This method will be called when the component is created
     */
  ngOnInit() {
    this.getAdministradores();
  }

}
