import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
	data:any;
	producto:string;

	idCatalogo:any =undefined;
	sectionPage:string;
	constructor(private http: HttpClient) { }

	setData(data){
		this.data = data;
	}

	getData(){
		return this.data;
	}

	getConfig(url) {
		console.log("url",url);
		return this.http.get(url);
	}

	postConfig(url,obj) {
		console.log("url",url);
		console.log("obj",obj);
		return this.http.post(url,obj);
	}

	putConfig(url,obj) {
		console.log("url",url);
		console.log("obj",obj);
		return this.http.put(url,obj);
	}

	deleteConfig(url,data:any={}) {
		console.log("url",url);
		console.log("data",data);
		return this.http.delete(url,data );
	}


	//--search

	setSearchProducto(data){
		this.producto = data;
	}

	getSearchProducto(){
		console.log("search producto",this.producto);
		return this.producto ;
	}

	downloadNoteReceipt(Id: string): Observable<any> {
		let url = "https://drive.google.com/file/d/161sr24Dk3k-LdHsheGtTI93McQVewWPP/view?usp=sharing";
		return this.http.get(url, { responseType: "blob" } );
	}

	getSelectCategoria(){
		return this.idCatalogo
	}

	setSelectCatalogo(data){
		this.idCatalogo = data;
	}

	getSelectMenu(){
		return this.sectionPage
	}

	setSelectMenu(data){
		this.sectionPage = data;
	}


}
