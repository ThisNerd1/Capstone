class user {
    constructor(first_name, last_name, username, password, email){
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.preferences = [];
        this.gifts = [];
        this.relationsTo = [];
    }
}