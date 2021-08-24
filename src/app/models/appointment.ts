export class Appointment {
    
    //appointment_id
    private _appointment_id : number;
    public get appointment_id() : number {
        return this._appointment_id;
    }
    public set appointment_id(v : number) {
        this._appointment_id = v;
    }

    //doc_id
    private _doc_id : number;
    public get doc_id() : number {
        return this._doc_id;
    }
    public set doc_id(v : number) {
        this._doc_id = v;
    }

    //pat_id
    private _pat_id : number;
    public get pat_id() : number {
        return this._pat_id;
    }
    public set pat_id(v : number) {
        this._pat_id = v;
    }

    //appointment_date
    private _appointment_date : Date;
    public get appointment_date() : Date {
        return this._appointment_date;
    }
    public set appointment_date(v : Date) {
        this._appointment_date = v;
    }
    
}
