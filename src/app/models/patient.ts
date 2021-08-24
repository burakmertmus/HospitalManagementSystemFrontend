export class Patient {
    
    private _patient_id : number;
    public get patient_id() : number {
        return this._patient_id;
    }
    public set patient_id(v : number) {
        this._patient_id = v;
    }

    private _pat_first_name : string;
    public get pat_first_name() : string {
        return this._pat_first_name;
    }
    public set pat_first_name(v : string) {
        this._pat_first_name = v;
    }

    private _pat_last_name : string;
    public get pat_last_name() : string {
        return this._pat_last_name;
    }
    public set pat_last_name(v : string) {
        this._pat_last_name = v;
    }

    private _pat_insurance_no : string;
    public get pat_insurance_no() : string {
        return this._pat_insurance_no;
    }
    public set pat_insurance_no(v : string) {
        this._pat_insurance_no = v;
    }


    private _pat_ph_no : string;
    public get pat_ph_no() : string {
        return this._pat_ph_no;
    }
    public set pat_ph_no(v : string) {
        this._pat_ph_no = v;
    }

    private _pat_address : string;
    public get pat_address() : string {
        return this._pat_address;
    }
    public set pat_address(v : string) {
        this._pat_address = v;
    }

    
}
