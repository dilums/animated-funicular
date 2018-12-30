function load_data(){
    $.getJSON("/viz-data/assets/data/test.json", json =>{
        data = json;
        display_data();
    });
}
