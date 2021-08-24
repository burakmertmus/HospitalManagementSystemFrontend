export class Doctor {
    private _doctor_id : number;
    public get doctor_id() : number {
        return this._doctor_id;
    }
    public set doctor_id(v : number) {
        this._doctor_id = v;
    }

    private _doc_first_name : string;
    public get doc_first_name() : string {
        return this._doc_first_name;
    }
    public set doc_first_name(v : string) {
        this._doc_first_name = v;
    }

    private _doc_last_name : string;
    public get doc_last_name() : string {
        return this._doc_last_name;
    }
    public set doc_last_name(v : string) {
        this._doc_last_name = v;
    }

    private _doc_ph_no : string;
    public get doc_ph_no() : string {
        return this._doc_ph_no;
    }
    public set doc_ph_no(v : string) {
        this._doc_ph_no = v;
    }

    private _doc_address : string;
    public get doc_address() : string {
        return this._doc_address;
    }
    public set doc_address(v : string) {
        this._doc_address = v;
    }

    
}
